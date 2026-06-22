# Google Form + Sheet Setup — Quotation Leads

Ye setup karne se aapko milega:
- Ek **Google Form** (jisme wahi fields hain jo aapke cost-estimate/quotation page me hain)
- Ek **Google Sheet** jisme Form ka data AUR Website (quotation page) ka data — dono ek hi jagah, ek hi table me aayenge
- Pata chal jayega kisne kab quotation/estimate liya, kaunsa package, kitna area, kitna total estimate

---

## STEP 1 — Script banao (5 minute, ek baar karna hai)

1. Browser me kholo: **https://script.google.com**
2. **"New Project"** par click karo
3. `google-script/Code.gs` file ka pura code copy karo aur jo default code already likha hai usse hata kar paste kar do
4. Upar left me project ka naam likho: `Vishwanath Quotation Setup`
5. **Save** icon (floppy disk) dabao

## STEP 2 — Form + Sheet generate karo

1. Upar function dropdown me se **`createFormAndSheet`** select karo
2. **"Run"** button dabao (▶️ icon)
3. Pehli baar "Authorization required" aayega:
   - **"Review permissions"** → apni Google account select karo
   - "Google hasn't verified this app" warning aayegi — ye normal hai kyunki ye aapka khud ka script hai
   - **"Advanced"** → **"Go to Vishwanath Quotation Setup (unsafe)"** → **"Allow"**
4. Niche **"Execution log"** kholo (View → Logs, ya Ctrl+Enter)
5. Wahan 3 important links milenge:
   - `FORM EDIT URL` — isse form ka design/wording change kar sakte ho
   - `FORM LIVE LINK` — **ye link WhatsApp, Instagram, kahin bhi share kar sakte ho**
   - `SHEET URL` — **yahan saara data aayega, isko apni team ke saath share kar do**

➡️ Ye dono links kahin save kar lo (Notes me, WhatsApp khud ko bhej do).

## STEP 3 — Website se connect karo (taaki quotation page ka data bhi isi Sheet me aaye)

1. Wapas script editor me jao
2. Upar right **"Deploy"** → **"New deployment"** dabao
3. Gear icon (⚙️) → **"Web app"** select karo
4. Settings:
   - **Execute as:** Me (aapki email)
   - **Who has access:** Anyone
5. **"Deploy"** dabao → permission phir maangega to wahi Step 2 wala process karo
6. Ek URL milega jaisa: `https://script.google.com/macros/s/XXXXXXXXX/exec`
7. Ye URL copy karo

8. Ab `js/quotation-sync.js` file kholo, ye line dhundo:
   ```js
   const GOOGLE_SCRIPT_URL = "PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE";
   ```
   Yahan apna copy kiya hua URL paste kar do.

Bas ho gaya. Ab:
- Koi bhi Google Form bhare → Sheet me data jayega
- Koi bhi website ke quotation page se estimate banaye → Sheet me data jayega
- Dono ek hi Sheet me, "Source" column me pata chal jayega ki kahan se aaya

---

## Sheet me kya milega

| Column | Matlab |
|---|---|
| Timestamp | Kab fill hua |
| Source | "Website Quotation" ya "Google Form" |
| Client Name, Phone | Customer ka detail |
| Project Name, Location | Project ka naam aur jagah |
| Area, Floors, Work Type, Material Mode, Package | Project ki details |
| Rate, Base Value, GST, Total Estimate | Calculation (sirf website se aaye data me) |
| Notes | Customer ne kya likha |
| Status | Khud manually update karo: New / Contacted / Site Visit Done / Converted / Closed |

**Marketing/follow-up ke liye tip:** Sheet ke "Status" column ko use karo — jisko call kar liya usko "Contacted" mark kar do, isse pata rahega kaun follow-up baki hai.

---

## Agar kuch galat ho jaye

- Agar dobara Form/Sheet banana ho to `createFormAndSheet` function dobara Run mat karo — isse naya Form-Sheet ban jayega purane se alag. Pehle purana delete karo phir naya banao.
- Agar Web App URL kaam na kare, "Deploy" → "Manage deployments" me jaake check karo ki "Who has access: Anyone" set hai ya nahi.
