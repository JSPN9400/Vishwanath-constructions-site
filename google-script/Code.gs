/**
 * VISHWANATH CONSTRUCTION — QUOTATION FORM + SHEET SETUP
 * =========================================================
 * Ye ek hi script hai jo:
 *   1. Ek naya Google Form bana dega (quotation/cost-estimate ke saare fields ke saath)
 *   2. Form ko ek naye Google Sheet se link kar dega (responses uss Sheet me jayengi)
 *   3. Website (quotation page) se bhi seedha data isi Sheet me bhej sakta hai
 *      (doPost function ke through) — taki Form bharo ya Website se Quotation
 *      banao, dono ka data EK HI Sheet me, EK HI table me aayega.
 *
 * ---------------------------------------------------------
 * SETUP (ek baar karna hai):
 * ---------------------------------------------------------
 * 1. https://script.google.com par jao -> "New Project"
 * 2. Is poori file ka code copy karke paste kar do (purana code hata ke)
 * 3. Upar "Save" icon dabao, project ka naam do: "Vishwanath Quotation Setup"
 * 4. Function dropdown me "createFormAndSheet" select karo, "Run" dabao
 *    - Pehli baar permission maangega -> Apni Google ID se allow karo
 *    - "Advanced" -> "Go to project (unsafe)" -> Allow (ye normal hai, ye aapka khud ka script hai)
 * 5. "Execution log" me 3 cheezein dikhengi:
 *      - FORM EDIT URL   (isse aap form ko edit/design kar sakte ho)
 *      - FORM LIVE LINK  (ye link WhatsApp/kahin bhi share karo)
 *      - SHEET URL       (yahan saara data - form se bhi, website se bhi - aayega)
 * 6. Ab "Deploy" -> "New deployment" -> Type: "Web app"
 *      - Execute as: Me
 *      - Who has access: Anyone
 *      - "Deploy" dabao, jo URL milega use copy karo
 * 7. Wo URL is project ke js/quotation-sync.js file me
 *    GOOGLE_SCRIPT_URL variable me paste kar do
 *
 * Bas itna hi - ab Form bhi ready, Sheet bhi ready, website bhi connected.
 * =========================================================
 */

const SHEET_NAME = "Quotation Leads";

function createFormAndSheet() {
  // ---- 1. Naya Spreadsheet banao ----
  const ss = SpreadsheetApp.create("Vishwanath Construction - Leads & Quotations");
  const sheet = ss.getSheets()[0];
  sheet.setName(SHEET_NAME);

  const headers = [
    "Timestamp",
    "Source",            // "Website Quotation" ya "Google Form"
    "Client Name",
    "Phone",
    "Project Name",
    "Location / City",
    "Area per Floor (sq ft)",
    "Floors",
    "Work Type",
    "Material Mode",
    "Package",
    "Rate per sq ft",
    "Base Value",
    "GST (18%)",
    "Total Estimate",
    "Estimated Duration",
    "Notes / Scope",
    "Quotation Number",
    "Status"              // New / Contacted / Site Visit Done / Converted / Closed
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  sheet.getRange(1, 1, 1, headers.length)
    .setFontWeight("bold")
    .setBackground("#1C2620")
    .setFontColor("#F5F2EA");
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);

  // ---- 2. Naya Form banao jisme quotation/cost-estimator ke saare fields hon ----
  const form = FormApp.create("Vishwanath Construction - Quotation Request")
    .setDescription("Apna construction project ka detail bharo, hamari team aapse jaldi sampark karegi.")
    .setCollectEmail(false)
    .setConfirmationMessage("Dhanyawad! Aapki request mil gayi hai. Hamari team jald hi WhatsApp/Call par sampark karegi.");

  form.addTextItem().setTitle("Client Name").setRequired(true);
  form.addTextItem().setTitle("Phone Number").setRequired(true);
  form.addTextItem().setTitle("Project Name").setHelpText("Jaise: Residential House, Apartment, Shop, etc.");
  form.addTextItem().setTitle("Location / City").setHelpText("Jaise: Patna, Danapur, etc.");
  form.addTextItem().setTitle("Area per Floor (sq ft)").setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Floors")
    .setChoiceValues(["Ground Floor", "Ground + 1", "Ground + 2", "Ground + 3"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Work Type")
    .setChoiceValues(["Structure Work", "Finishing Work", "Turnkey All Work"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Material Mode")
    .setChoiceValues(["With Material", "Without Material"])
    .setRequired(true);

  form.addMultipleChoiceItem()
    .setTitle("Package")
    .setChoiceValues(["Basic", "Standard", "Premium"])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle("Notes / Requirement Details")
    .setHelpText("Plan, finish level, site condition, timeline, etc.");

  // ---- 3. Form responses ko isi Sheet se link karo ----
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // ---- 4. Form responses ko hamare standard columns me copy karne ke liye trigger ----
  ScriptApp.newTrigger("onFormSubmitTrigger")
    .forForm(form)
    .onFormSubmit()
    .create();

  // ---- 5. Saari important links Logs me print karo ----
  Logger.log("=================================================");
  Logger.log("FORM EDIT URL  (design/edit karne ke liye):");
  Logger.log(form.getEditUrl());
  Logger.log("-------------------------------------------------");
  Logger.log("FORM LIVE LINK (share karne ke liye - WhatsApp etc):");
  Logger.log(form.getPublishedUrl());
  Logger.log("-------------------------------------------------");
  Logger.log("SHEET URL (saara data yahan aayega):");
  Logger.log(ss.getUrl());
  Logger.log("=================================================");

  // ---- 6. Properties me save kar do taaki baad me bhi access kar sakein ----
  const props = PropertiesService.getScriptProperties();
  props.setProperty("SHEET_ID", ss.getId());
  props.setProperty("FORM_ID", form.getId());
}

/**
 * Jab koi Google Form bhare, ye function us response ko
 * "Source: Google Form" tag karke standard column order me rakh deta hai.
 */
function onFormSubmitTrigger(e) {
  const props = PropertiesService.getScriptProperties();
  const sheetId = props.getProperty("SHEET_ID");
  const ss = SpreadsheetApp.openById(sheetId);
  const formResponseSheet = ss.getSheets().find(s => s.getName() !== SHEET_NAME);
  const mainSheet = ss.getSheetByName(SHEET_NAME);

  if (!formResponseSheet) return;

  const lastRow = formResponseSheet.getLastRow();
  const responseRow = formResponseSheet.getRange(lastRow, 1, 1, formResponseSheet.getLastColumn()).getValues()[0];
  // responseRow columns: [Timestamp, Client Name, Phone, Project Name, Location, Area,
  //                       Floors, Work Type, Material Mode, Package, Notes]

  mainSheet.appendRow([
    responseRow[0],          // Timestamp
    "Google Form",           // Source
    responseRow[1] || "",    // Client Name
    responseRow[2] || "",    // Phone
    responseRow[3] || "",    // Project Name
    responseRow[4] || "",    // Location
    responseRow[5] || "",    // Area per floor
    responseRow[6] || "",    // Floors
    responseRow[7] || "",    // Work type
    responseRow[8] || "",    // Material mode
    responseRow[9] || "",    // Package
    "", "", "", "", "",      // Rate, Base, GST, Total, Duration (not calculated for raw form fills)
    responseRow[10] || "",   // Notes
    "",                      // Quotation number
    "New"                    // Status
  ]);
}

/**
 * Website se (quotation page se) data yahan aata hai.
 * js/quotation-sync.js isi endpoint par POST karta hai.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();
    const sheetId = props.getProperty("SHEET_ID");
    const ss = SpreadsheetApp.openById(sheetId);
    const mainSheet = ss.getSheetByName(SHEET_NAME);

    mainSheet.appendRow([
      new Date(),
      "Website Quotation",
      data.clientName || "",
      data.phone || "",
      data.projectName || "",
      data.location || "",
      data.area || "",
      data.floors || "",
      data.workType || "",
      data.materialMode || "",
      data.package || "",
      data.rate || "",
      data.baseValue || "",
      data.gst || "",
      data.total || "",
      data.duration || "",
      data.notes || "",
      data.quotationNumber || "",
      "New"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Browser me URL khole jaane par bhi response de (testing ke liye)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Vishwanath Construction lead endpoint is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
