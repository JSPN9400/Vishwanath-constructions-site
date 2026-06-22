/**
 * SHARED PRICING MODULE
 * ========================
 * Admin panel (admin.html) saves pricing changes here (localStorage).
 * Homepage calculator AND Quotation page both read from this same source,
 * so a price change in Admin instantly reflects everywhere on the site.
 *
 * If nothing has been customized yet, it falls back to data/pricing.json.
 */
const PRICING_STORAGE_KEY = "vishwanathPricingData";

const DEFAULT_PRICING = {
  calculatorPackages: {
    basic: { label: "Basic", ratePerSqFt: 1800 },
    standard: { label: "Standard", ratePerSqFt: 2400 },
    premium: { label: "Premium", ratePerSqFt: 3200 }
  },
  quotationRates: {
    structure: {
      with_material: { low: 1100, mid: 1350, high: 1600 },
      without_material: { low: 420, mid: 520, high: 650 }
    },
    finishing: {
      with_material: { low: 650, mid: 900, high: 1250 },
      without_material: { low: 260, mid: 360, high: 480 }
    },
    all_work: {
      with_material: { low: 1750, mid: 2100, high: 2650 },
      without_material: { low: 690, mid: 880, high: 1130 }
    }
  },
  gstPercent: 18
};

function loadPricing() {
  try {
    const raw = localStorage.getItem(PRICING_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_PRICING));
    const parsed = JSON.parse(raw);
    // Merge with defaults so missing keys (e.g. after an update) don't break anything
    return {
      calculatorPackages: { ...DEFAULT_PRICING.calculatorPackages, ...parsed.calculatorPackages },
      quotationRates: { ...DEFAULT_PRICING.quotationRates, ...parsed.quotationRates },
      gstPercent: typeof parsed.gstPercent === "number" ? parsed.gstPercent : DEFAULT_PRICING.gstPercent
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_PRICING));
  }
}

function savePricing(pricing) {
  localStorage.setItem(PRICING_STORAGE_KEY, JSON.stringify(pricing));
}

// Expose globally — used by main.js (calculator), quotation/index.html, and admin.js
window.loadPricing = loadPricing;
window.savePricing = savePricing;
window.DEFAULT_PRICING = DEFAULT_PRICING;
