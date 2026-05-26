function doPost(e) {
  try {
    var sheet = getTargetSheet_();
    var payload = parsePayload_(e);

    var row = [
      new Date(),
      payload.quotationNo || "",
      payload.quotationDate || "",
      payload.customerName || "",
      payload.customerPhone || "",
      payload.customerAddress || "",
      payload.projectName || "",
      payload.area || "",
      payload.floorCount || "",
      payload.topFloor || "",
      payload.workType || "",
      payload.materialMode || "",
      payload.packageName || "",
      payload.baseRate || 0,
      payload.baseValue || 0,
      payload.gstRate || 0,
      payload.gstType || "",
      payload.gstAmount || 0,
      payload.totalEstimate || 0,
      payload.scope || "",
      payload.preparedBy || "",
      payload.gstNo || "",
      payload.gstRegYear || "",
      payload.estYear || ""
    ];

    ensureHeader_(sheet);
    sheet.appendRow(row);

    return jsonResponse_({
      success: true,
      message: "Saved successfully"
    });
  } catch (error) {
    return jsonResponse_({
      success: false,
      message: error && error.message ? error.message : "Unknown server error"
    });
  }
}

function doGet() {
  return jsonResponse_({
    success: true,
    message: "Quotation sheet endpoint is live"
  });
}

function getTargetSheet_() {
  var sheetName = "Quotations";
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }

  return sheet;
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  var header = [[
    "Created At",
    "Quotation No",
    "Quotation Date",
    "Customer Name",
    "Customer Phone",
    "Customer Address",
    "Project Name",
    "Area",
    "Floor Count",
    "Top Floor",
    "Work Type",
    "Material Mode",
    "Package Name",
    "Base Rate",
    "Base Value",
    "GST Rate",
    "GST Type",
    "GST Amount",
    "Total Estimate",
    "Scope",
    "Prepared By",
    "GST No",
    "GST Registration Year",
    "Established Year"
  ]];

  sheet.getRange(1, 1, 1, header[0].length).setValues(header);
  sheet.getRange(1, 1, 1, header[0].length).setFontWeight("bold");
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("No POST body received");
  }

  var payload = JSON.parse(e.postData.contents);

  if (!payload.customerName) {
    throw new Error("Customer name is required");
  }

  return payload;
}

function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
