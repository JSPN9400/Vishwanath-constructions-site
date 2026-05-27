function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);

    var data;

    // HTML se URLSearchParams mein "payload" key ke andar JSON aata hai
    if (e && e.parameter && e.parameter.payload) {
      data = JSON.parse(e.parameter.payload);
    }
    // Direct JSON body (fallback)
    else if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else {
      return makeResponse(false, "No data received");
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Header row auto-create karo agar sheet bilkul nai hai
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Quotation No", "Date", "Customer Name",
        "Phone", "Project Name", "Package", "Area (sqft)",
        "Base Rate", "Base Value", "GST Amount", "Total Estimate"
      ]);
    }

    var timestamp = new Date();
    var rowData = [
      timestamp,
      data.quotationNo   || "N/A",
      data.quotationDate || "N/A",
      data.customerName  || "N/A",
      data.customerPhone || "N/A",
      data.projectName   || "N/A",
      data.packageName   || "N/A",
      data.area          || 0,
      data.baseRate      || 0,
      data.baseValue     || 0,
      data.gstAmount     || 0,
      data.totalEstimate || 0
    ];

    sheet.appendRow(rowData);
    return makeResponse(true, "Saved Successfully");

  } catch (error) {
    return makeResponse(false, error.toString());
  } finally {
    lock.releaseLock();
  }
}

function makeResponse(success, message) {
  return ContentService.createTextOutput(
    JSON.stringify({ success: success, message: message })
  ).setMimeType(ContentService.MimeType.JSON);
}

// Browser mein URL khol ke test karo
function doGet(e) {
  return makeResponse(true, "Google Script is running correctly!");
}

function doOptions(e) {
  return ContentService.createTextOutput("")
                       .setMimeType(ContentService.MimeType.TEXT);
}