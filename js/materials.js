/**
 * MATERIAL SPECIFICATIONS BY PACKAGE
 * =====================================
 * Basic / Standard / Premium — each quotation shows the material
 * brand & spec that matches the package the customer selected,
 * sourced from the official Vishwanath Construction quotation format.
 *
 * Admin-editable later via localStorage the same way as pricing.js,
 * but ships with sensible defaults drawn from the real template.
 */
const MATERIALS_STORAGE_KEY = "vishwanathMaterialsData";

const DEFAULT_MATERIALS = {
  low: {
    label: "Basic",
    groups: [
      { category: "Structure", rows: [
        ["Cement", "OPC / PPC — Standard ISI brand"],
        ["Steel (TMT)", "Fe 500 Grade — Standard ISI brand"],
        ["Concrete Mix", "M15 Grade, site-batched"],
        ["Bricks", "Standard red bricks — 5 inch walls"]
      ]},
      { category: "Plumbing & Electrical", rows: [
        ["Pipes", "Standard CPVC / UPVC — ISI brand"],
        ["Wires", "Standard PVC insulated wires"],
        ["Switches", "Standard modular switches"],
        ["Sanitary Fixtures", "Standard ceramic fittings"]
      ]},
      { category: "Doors, Windows & Finish", rows: [
        ["Main Door", "Flush door, factory laminate"],
        ["Internal Doors", "Flush door shutters"],
        ["Windows", "Powder-coated aluminium"],
        ["Flooring", "Ceramic tiles, 2x2 ft"],
        ["Paint", "Standard emulsion, single coat putty"]
      ]}
    ]
  },
  mid: {
    label: "Standard",
    groups: [
      { category: "Structure", rows: [
        ["Cement", "PPC (Portland Pozzolana Cement) — Brand: ULTRATECH"],
        ["Steel (TMT)", "Fe 500D Grade — Brand: TATA"],
        ["Concrete Mix", "M20 Grade (1:1.5:3) Designed Mix"],
        ["Bricks", "Red bricks — 5 inch internal & external walls"]
      ]},
      { category: "Plumbing & Electrical", rows: [
        ["Pipes", "Wall concealed CPVC, Hot & Cold lines — Brand: SUPREME"],
        ["Wires", "Flame Retardant Low Smoke (FRLS) — Brand: HAVELLS"],
        ["Switches", "Modular switches & sockets, separate MCB per flat — Brand: HAVELLS"],
        ["Sanitary Fixtures", "Premium CP fittings package — Brand: JAQUAR (ESCO)"],
        ["Dado / Floor Tiles", "Ceramic wall tiles @ approx. Rs. 45/sq.ft, Anti-skid floor tiles @ approx. Rs. 55/sq.ft — Brand: KAJARIA"]
      ]},
      { category: "Doors, Windows & Finish", rows: [
        ["Main Door", "Sagwan chaukhat, Pine wood flush shutter with laminate, 40mm"],
        ["Internal Doors", "Malaysian chaukhat, ISI Mark Green Ply shutters"],
        ["Windows", "Premium aluminium panels with clear glass"],
        ["Flooring (Living/Dining)", "Vitrified tiles 800x800mm @ approx. Rs. 50/sq.ft"],
        ["Flooring (Bedroom)", "Vitrified tiles 600x600mm or wooden-styled tiles"],
        ["Paint (Internal)", "Stain-resistant anti-fungal emulsion, 2 coats putty — Brand: ASIAN PAINTS"],
        ["Paint (External)", "Weather-proof anti-algae exterior emulsion — Brand: ASIAN PAINTS"],
        ["Waterproofing", "Chemical waterproofing in sunken areas — Brand: DR. FIXIT / SIKA"]
      ]}
    ]
  },
  high: {
    label: "Premium",
    groups: [
      { category: "Structure", rows: [
        ["Cement", "PPC, premium grade — Brand: ULTRATECH / AMBUJA"],
        ["Steel (TMT)", "Fe 500D Grade, corrosion-resistant — Brand: TATA"],
        ["Concrete Mix", "M20/M25 Grade Designed Mix with quality testing"],
        ["Bricks", "Premium red bricks, reinforced jointing — 5 inch walls"]
      ]},
      { category: "Plumbing & Electrical", rows: [
        ["Pipes", "Wall concealed CPVC, Hot & Cold — Brand: SUPREME / ASTRAL"],
        ["Wires", "FRLS, higher gauge for AC/heavy load — Brand: HAVELLS / POLYCAB"],
        ["Switches", "Premium modular switches, individual MCB — Brand: HAVELLS / LEGRAND"],
        ["Sanitary Fixtures", "Premium fittings — commode, jet spray, rain shower, designer basin — Brand: JAQUAR / KOHLER"],
        ["Dado / Floor Tiles", "Premium digital ceramic & vitrified tiles, designer layout — Brand: KAJARIA (Premium range)"]
      ]},
      { category: "Doors, Windows & Finish", rows: [
        ["Main Door", "Heavy Sagwan chaukhat, designer flush door with veneer finish"],
        ["Internal Doors", "Premium chaukhat, laminate flush doors with designer hardware"],
        ["Windows", "Premium UPVC / aluminium with double glazing option"],
        ["Flooring (Living/Dining)", "Premium vitrified / Italian marble-finish tiles"],
        ["Staircase", "Premium Indian granite, polished finish"],
        ["Paint (Internal)", "Premium emulsion / texture finish, 2 coats putty — Brand: ASIAN PAINTS (Royale range)"],
        ["Paint (External)", "Premium weather-proof exterior with texture options — Brand: ASIAN PAINTS"],
        ["Waterproofing", "Comprehensive chemical waterproofing, all wet areas — Brand: DR. FIXIT / SIKA / BASF"],
        ["Add-ons", "SS railing, designer main gate, MS grill parapet"]
      ]}
    ]
  }
};

function loadMaterials() {
  try {
    const raw = localStorage.getItem(MATERIALS_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_MATERIALS));
    const parsed = JSON.parse(raw);
    return {
      low: parsed.low || DEFAULT_MATERIALS.low,
      mid: parsed.mid || DEFAULT_MATERIALS.mid,
      high: parsed.high || DEFAULT_MATERIALS.high
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_MATERIALS));
  }
}

function saveMaterials(materials) {
  localStorage.setItem(MATERIALS_STORAGE_KEY, JSON.stringify(materials));
}

window.loadMaterials = loadMaterials;
window.saveMaterials = saveMaterials;
window.DEFAULT_MATERIALS = DEFAULT_MATERIALS;
