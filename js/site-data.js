/**
 * SHARED SITE DATA MODULE
 * ==========================
 * Holds projects, offers, and reviews added from the Admin Panel.
 * admin.html WRITES here. index.html (homepage) READS from here
 * to show newly added projects in the "More Projects" grid.
 */
const SITE_DATA_STORAGE_KEY = "vishwanathSiteData";

const DEFAULT_SITE_DATA = {
  settings: {
    brandSlogan: "We The Home Makers",
    heroTagline: "Building Bihar with Strength and Culture",
    heroTag: "Bihar Contractor · Clear Quotes",
    heroSub: "Local construction planning, reliable materials, and clear budget guidance.",
    noticeTitle: "",
    noticeText: "",
    yearsInBihar: 12,
    projectsDone: 22,
    officeAddress: "Vijay Nagar Main Road, Khajpura, Patna",
    phone: "+91 9934683355",
    email: "info.vishwanathconstruction@gmail.com",
    whatsappLink: "https://wa.me/9934683355",
    mapEmbedUrl: "https://maps.google.com/maps?q=Khajpura+Patna&output=embed",
    footerCopy: "© 2026 Vishwanath Construction. Trusted home construction support.",
    socialLinks: { facebook: "", instagram: "", youtube: "", maps: "" },
    googleReviewUrl: "",
    googleReviewAddUrl: "",
    heroImage: "",
    quotationNote: ""
  },
  offers: [],
  projects: [],
  reviews: []
};

function loadSiteData() {
  try {
    const raw = localStorage.getItem(SITE_DATA_STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
    const parsed = JSON.parse(raw);
    return {
      settings: {
        ...DEFAULT_SITE_DATA.settings,
        ...parsed.settings,
        socialLinks: { ...DEFAULT_SITE_DATA.settings.socialLinks, ...(parsed.settings?.socialLinks || {}) }
      },
      offers: Array.isArray(parsed.offers) ? parsed.offers : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      reviews: Array.isArray(parsed.reviews) ? parsed.reviews : []
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_SITE_DATA));
  }
}

function saveSiteData(data) {
  localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(data));
}

window.loadSiteData = loadSiteData;
window.saveSiteData = saveSiteData;
window.DEFAULT_SITE_DATA = DEFAULT_SITE_DATA;
