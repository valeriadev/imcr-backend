const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const config = require("../config/index");
const TOKEN_PATH = "token.json";
let oAuth2Client;
fs.readFile("./config/credentials.json", (err, content) => {
  if (err) return console.log("Error loading client secret file:", err);
  authorize(JSON.parse(content));
});




function authorize(credentials) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
  });
}

function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Enter the code from that page here: ", code => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error(
          "Error while trying to retrieve access token",
          err
        );
      oAuth2Client.setCredentials(token);
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
    });
  });
}

function getLastRecordByHospitalAndProdNumber(hospital, prodNum) {
  return new Promise((resolve, reject) => {
    const sheets = google.sheets({ version: "v4", auth: oAuth2Client });
    sheets.spreadsheets.values.get(
      {
        spreadsheetId: config.sheetId,

        range: "raw!A:ZZ"
      },
      (err, res) => {
        if (err) {
          reject(err);
          console.error(err)
        } else {
        }
        const rows = res.data.values;
        let lastRecord;
        rows.map(row => {
          if (row[0] == hospital && row[1] == prodNum) {
            lastRecord = row;
          }
        });

        console.log(lastRecord)
        resolve(lastRecord);
      }
    );
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1pq8pD3HsfNrWViyjMIpmBY5E4kvJbh1jSnBVnCDaDr8/edit#gid=0
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function appendRecord(record, sheetId) {
  const sheets = google.sheets({ version: "v4", auth: oAuth2Client });

  let values = [record];
  let resource = {
    values
  };
  sheets.spreadsheets.values.append(
    {
      spreadsheetId: sheetId,
      range: "raw!A1:ZZ1",
      valueInputOption: "USER_ENTERED",
      resource,
      insertDataOption: "INSERT_ROWS"
    },
    (err, result) => {
      if (err) {
        // Handle error.
        console.log(err);
      } else {
        console.log(`${result.data.updates.updatedCells} cells appended.`);
      }
    }
  );
}

module.exports = { appendRecord,getLastRecordByHospitalAndProdNumber };
