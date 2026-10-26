# Google Sheets guestbook

The three Loan invitations submit guestbook entries through the published [Sổ lưu bút Đám cưới Loan form](https://docs.google.com/forms/d/e/1FAIpQLSdtpn70yExcl32-Ues3k-OK6yzIT9WU9M8SUqCFqHW7BUnTZA/viewform). It is linked to the private [Đám cưới Loan spreadsheet](https://docs.google.com/spreadsheets/d/12hTyx--rwqKCr5cYHDPhlgT0FBqq0C64f6xrVSkoaa8/edit). Responses are written to its `Sổ lưu bút` tab; the form records the submission timestamp automatically.

`client.js` sends the card ID, guest name, optional relation, message, and optional signature to the Form's `formResponse` endpoint. It does not read the spreadsheet or form responses back into visitors' browsers.

The Form is published with **Responder view** set to **Anyone with the link**. Only the responder view is open; editor access remains restricted, and the spreadsheet remains private. Anyone with a card link can submit entries. The Form does not collect email addresses or restrict responses to one per person.

The earlier standalone Apps Script prototype was removed from this folder because `SpreadsheetApp.openById()` requested access to every Sheet in the account. It was not authorized or deployed.
