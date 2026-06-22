/**
 * QUOTATION -> GOOGLE SHEET SYNC
 * ================================
 * Jab koi quotation page par "Generate Professional Preview" ya
 * "Send on WhatsApp" dabata hai, ye data Google Sheet me bhi save ho jata hai.
 *
 * SETUP: google-script/SETUP-README.md follow karo, phir niche wala
 * URL apne deployed Web App URL se replace kar do.
 */
const GOOGLE_SCRIPT_URL = "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE";

function sendQuotationToSheet(payload) {
  if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.indexOf("PASTE_YOUR") === 0) {
    console.warn("Google Sheet sync skipped: GOOGLE_SCRIPT_URL not configured yet. See google-script/SETUP-README.md");
    return Promise.resolve();
  }

  return fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    mode: "no-cors", // Apps Script web apps don't return CORS headers; no-cors lets the request fire
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload)
  }).catch((err) => {
    console.warn("Could not sync quotation to Google Sheet:", err);
  });
}

// Expose globally so quotation/index.html inline script can call it
window.sendQuotationToSheet = sendQuotationToSheet;
