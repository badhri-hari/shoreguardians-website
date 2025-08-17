var SPREADSHEET_ID = '';
var API_KEY = '';

function doGet(e) {
  try {
    if (e.parameter.apiKey !== API_KEY) {
      return ContentService.createTextOutput(JSON.stringify({
        "error": "Unauthorized access",
        "code": 401
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = spreadsheet.getSheets()[0];
    var dataRange = sheet.getDataRange();
    var data = dataRange.getValues();
    var membersData = [];

    for (var i = 1; i < data.length; i++) {
      var rowData = data[i];

      if (rowData[1] && rowData[2]) {
        membersData.push({
          "SubmissionTime": rowData[0],
          "Name": rowData[1],
          "Email": rowData[2],
          "PictureLink": rowData[5],
        });
      }
    }

    return ContentService.createTextOutput(JSON.stringify(membersData))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "error": error.toString(),
      "code": 500
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
