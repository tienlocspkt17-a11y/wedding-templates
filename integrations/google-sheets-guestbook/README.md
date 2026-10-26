# Google Sheets guestbook

The three Loan invitations submit guestbook entries through the published [Sổ lưu bút Đám cưới Loan form](https://docs.google.com/forms/d/e/1FAIpQLSdtpn70yExcl32-Ues3k-OK6yzIT9WU9M8SUqCFqHW7BUnTZA/viewform). It is linked to the private [Đám cưới Loan spreadsheet](https://docs.google.com/spreadsheets/d/12hTyx--rwqKCr5cYHDPhlgT0FBqq0C64f6xrVSkoaa8/edit). Responses are written to its `Sổ lưu bút` tab; the form records the submission timestamp automatically.

`client.js` sends the card ID, guest name, optional relation, message, and optional signature to the Form's `formResponse` endpoint. Its `load()` method polls the same-origin `/api/guestbook` endpoint so each invitation can show new responses from its own card ID. A small notice at the top shows a just-sent wish immediately, announces newly published wishes, then cycles through previously collected wishes one at a time. It waits until the invitation intro is closed before appearing.

`api/guestbook.js` reads the published CSV for `Lời chúc công khai` (or an optional `GUESTBOOK_PUBLIC_CSV_URL` override), filters by card ID, and returns only the timestamp, card ID, name, relation, and message. The tab is a formula view over columns A:E of `Sổ lưu bút`, so the signature column is excluded. Only that curated tab is published; the source response tab and spreadsheet sharing permissions remain private.

The browser polls every 15 seconds while visible and less often in background tabs. Google says updates to published Sheets may take a few minutes to appear, so the end-to-end delay can be longer than the polling interval.

The Form is published with **Responder view** set to **Anyone with the link**. Only the responder view is open; editor access remains restricted, and the spreadsheet remains private. Anyone with a card link can submit entries. The Form does not collect email addresses or restrict responses to one per person.
