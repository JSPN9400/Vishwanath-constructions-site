function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Race conditions aur parallel requests se bachne ke liye lock
    lock.waitLock(10000); 
    
    // Incoming data parsing aur basic fallback handle
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ "success": false, "message": "No data received" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var timestamp = new Date();
    
    // Sheet Headers alignment ke sath Data entry sequence mapping
    var rowData = [
      timestamp,
      data.quotationNo || "N/A",
      data.quotationDate || "N/A",
      data.customerName || "N/A",
      data.customerPhone || "N/A",
      data.projectName || "N/A",
      data.packageName || "N/A",
      data.area || 0,
      data.baseRate || 0,
      data.baseValue || 0,
      data.gstAmount || 0,
      data.totalEstimate || 0
    ];
    
    sheet.appendRow(rowData);
    
    // Final Fixed Response header aur allow origin wrapper
    return ContentService.createTextOutput(JSON.stringify({ "success": true, "message": "Saved Successfully" }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "message": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Fixed CORS preflight routing function (Debugging purpose)
function doOptions(e) {
  return ContentService.createTextOutput("")
                       .setMimeType(ContentService.MimeType.TEXT);
}