const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');
const config = require("../config");

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = 'token.json';
let oAuth2Client;
// Load client secrets from a local file.
fs.readFile('./config/credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content));
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  oAuth2Client = new google.auth.OAuth2(
    client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client);
    oAuth2Client.setCredentials(JSON.parse(token));
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error while trying to retrieve access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
    });
  });
}

function temp() {
  sheets.spreadsheets.values.get({
    spreadsheetId: '1pq8pD3HsfNrWViyjMIpmBY5E4kvJbh1jSnBVnCDaDr8',

    range: 'Sheet1!A1:J1',

  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    if (rows.length) {
      console.log('Name, Major:');
      // Print columns A and E, which correspond to indices 0 and 4.
      rows.map((row) => {
        console.log(`${row[0]}, ${row[4]}`);
      });
    } else {
      console.log('No data found.');
    }
  });
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1pq8pD3HsfNrWViyjMIpmBY5E4kvJbh1jSnBVnCDaDr8/edit#gid=0
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */
function appendRecord(record) {
  const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

  

  let values = [
    record
  ];
  let resource = {
    values,
  };
  sheets.spreadsheets.values.append({
    spreadsheetId: config.sheetId,
    range: 'raw!A1:ZZ1',
    valueInputOption: 'USER_ENTERED',
    resource,
    insertDataOption: 'INSERT_ROWS'
  }, (err, result) => {
    if (err) {
      // Handle error.
      console.log(err);
    } else {

      console.log(`${result.data.updates.updatedCells} cells appended.`);
    }
  });


}

module.exports = { appendRecord };