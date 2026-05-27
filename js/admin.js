const STORAGE_KEY = "vishwanathSiteData";
const defaultSiteData = {
  settings: {
    brandSlogan: "We The Home Makers",
    heroTagline: "Trusted Builder · Fast Quotation",
    heroTag: "Bihar Contractor · Clear Quotes",
    heroSub:
      "Local construction planning, reliable materials, and clear budget guidance for every family project.",
    noticeTitle: "",
    noticeText: "",
    yearsInBihar: 12,
    projectsDone: 22,
    officeAddress:
      "B5 Muktipalce, Rukanpura, Baly Road, 800014, in Bigland Construction Office",
    phone: "+91 9XXXXXXXXX",
    email: "contact@vishwanath.in",
    whatsappLink: "https://wa.me/9934683355",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=B5%20Muktipalce%20Rukanpura%20Baly%20Road%20800014&t=&z=15&ie=UTF8&iwloc=&output=embed",
    footerCopy: "© 2026 Vishwanath Construction. Bihar contractor and build guide.",
    socialLinks: {
      facebook: "",
      instagram: "",
      youtube: "",
      maps: ""
    },
    googleReviewUrl: "",
    googleReviewAddUrl: "",
    heroImage:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
  },
  offers: [],
  projects: [],
  reviews: []
};

const adminForm = document.getElementById("adminForm");
const siteSettingsForm = document.getElementById("siteSettingsForm");
const adminList = document.getElementById("adminList");
const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "vishwanathTheme";

const fields = {
  entryType: document.getElementById("entryType"),
  title: document.getElementById("title"),
  tag: document.getElementById("tag"),
  location: document.getElementById("location"),
  description: document.getElementById("description"),
  imageUrl: document.getElementById("imageUrl"),
  imageFile: document.getElementById("imageFile"),
  buttonText: document.getElementById("buttonText"),
  buttonUrl: document.getElementById("buttonUrl")
};

const settingsFields = {
  noticeTitle: document.getElementById("noticeTitleInput"),
  noticeText: document.getElementById("noticeTextInput"),
  brandSlogan: document.getElementById("brandSloganInput"),
  heroTagline: document.getElementById("heroTaglineInput"),
  heroTag: document.getElementById("heroTagInput"),
  heroSub: document.getElementById("heroSubInput"),
  yearsInBihar: document.getElementById("yearsInput"),
  projectsDone: document.getElementById("projectsInput"),
  officeAddress: document.getElementById("officeAddressInput"),
  phone: document.getElementById("phoneInput"),
  email: document.getElementById("emailInput"),
  whatsappLink: document.getElementById("whatsappInput"),
  mapEmbedUrl: document.getElementById("mapInput"),
  footerCopy: document.getElementById("footerCopyInput"),
  facebook: document.getElementById("facebookInput"),
  instagram: document.getElementById("instagramInput"),
  youtube: document.getElementById("youtubeInput"),
  maps: document.getElementById("mapsLinkInput"),
  googleReviewUrl: document.getElementById("googleReviewUrlInput"),
  googleReviewAddUrl: document.getElementById("googleReviewAddUrlInput"),
  heroImage: document.getElementById("heroImageInput"),
  heroImageFile: document.getElementById("heroImageFile")
};

let uploadedEntryImage = "";
let uploadedHeroImage = "";

function applyTheme(theme) {
  const resolvedTheme = theme === "dark" ? "dark" : "light";
  document.body.dataset.theme = resolvedTheme;
  window.localStorage.setItem(THEME_KEY, resolvedTheme);

  if (themeToggle) {
    themeToggle.textContent = resolvedTheme === "dark" ? "Light Mode" : "Dark Mode";
  }
}

function cloneDefaults() {
  return JSON.parse(JSON.stringify(defaultSiteData));
}

function loadSiteData() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return cloneDefaults();
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      settings: {
        ...defaultSiteData.settings,
        ...(parsed.settings || {}),
        socialLinks: {
          ...defaultSiteData.settings.socialLinks,
          ...(parsed.settings?.socialLinks || {})
        }
      },
      offers: Array.isArray(parsed.offers) ? parsed.offers : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      reviews: Array.isArray(parsed.reviews) ? parsed.reviews : []
    };
  } catch {
    return cloneDefaults();
  }
}

function saveSiteData(data) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function setStatus(id, message, color = "var(--leaf)") {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  element.textContent = message;
  element.style.color = color;
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function getEntryImage() {
  return uploadedEntryImage || fields.imageUrl.value.trim();
}

function getHeroImage() {
  return uploadedHeroImage || settingsFields.heroImage.value.trim();
}

function updateEntryPreview() {
  const previewImage = document.getElementById("entryPreviewImage");
  const previewType = document.getElementById("entryPreviewType");
  const previewTitle = document.getElementById("entryPreviewTitle");
  const previewMeta = document.getElementById("entryPreviewMeta");
  const previewDescription = document.getElementById("entryPreviewDescription");

  const type =
    fields.entryType.value === "offer"
      ? "Offer"
      : fields.entryType.value === "festival"
        ? "Festival"
        : "Project";
  const image = getEntryImage() || defaultSiteData.settings.heroImage;

  previewImage.src = image;
  previewType.textContent = type;
  previewTitle.textContent = fields.title.value.trim() || "Family Home in Patna";
  previewMeta.textContent =
    fields.entryType.value === "project"
      ? fields.location.value.trim() || "Kankarbagh, Patna"
      : fields.tag.value.trim() || "Special Campaign";
  previewDescription.textContent =
    fields.description.value.trim() ||
    "Short description for the selected offer or project will appear here.";
}

function updateSettingsPreview() {
  const heroPreview = document.getElementById("heroPreview");
  const previewSlogan = document.getElementById("previewSlogan");
  const previewTagline = document.getElementById("previewTagline");
  const previewYears = document.getElementById("previewYears");
  const previewProjects = document.getElementById("previewProjects");

  heroPreview.src = getHeroImage() || defaultSiteData.settings.heroImage;
  previewSlogan.textContent =
    settingsFields.brandSlogan.value.trim() || defaultSiteData.settings.brandSlogan;
  previewTagline.textContent =
    settingsFields.heroTagline.value.trim() || defaultSiteData.settings.heroTagline;
  previewYears.textContent =
    String(Number(settingsFields.yearsInBihar.value) || defaultSiteData.settings.yearsInBihar);
  previewProjects.textContent = `${String(
    Number(settingsFields.projectsDone.value) || defaultSiteData.settings.projectsDone
  )}+`;
}

function populateSettingsForm() {
  const { settings } = loadSiteData();
  settingsFields.noticeTitle.value = settings.noticeTitle || "";
  settingsFields.noticeText.value = settings.noticeText || "";
  settingsFields.brandSlogan.value = settings.brandSlogan;
  settingsFields.heroTagline.value = settings.heroTagline;
  settingsFields.heroTag.value = settings.heroTag;
  settingsFields.heroSub.value = settings.heroSub;
  settingsFields.yearsInBihar.value = settings.yearsInBihar;
  settingsFields.projectsDone.value = settings.projectsDone;
  settingsFields.officeAddress.value = settings.officeAddress;
  settingsFields.phone.value = settings.phone;
  settingsFields.email.value = settings.email;
  settingsFields.whatsappLink.value = settings.whatsappLink;
  settingsFields.mapEmbedUrl.value = settings.mapEmbedUrl;
  settingsFields.footerCopy.value = settings.footerCopy;
  settingsFields.facebook.value = settings.socialLinks?.facebook || "";
  settingsFields.instagram.value = settings.socialLinks?.instagram || "";
  settingsFields.youtube.value = settings.socialLinks?.youtube || "";
  settingsFields.maps.value = settings.socialLinks?.maps || "";
  settingsFields.googleReviewUrl.value = settings.googleReviewUrl || "";
  settingsFields.googleReviewAddUrl.value = settings.googleReviewAddUrl || "";
  settingsFields.heroImage.value = settings.heroImage;
  uploadedHeroImage = "";
  updateSettingsPreview();
}

function renderAdminList() {
  const data = loadSiteData();
  const list = [
    ...data.projects.map((item) => ({ type: "project", ...item })),
    ...data.offers.map((item) => ({ type: item.postType || "offer", ...item })),
    ...data.reviews.map((item) => ({ type: "review", ...item }))
  ];

  if (!list.length) {
    adminList.innerHTML =
      '<div class="empty-card">No entries saved yet. Add project photos, offers, or festival posts to populate the homepage.</div>';
    return;
  }

  adminList.innerHTML = list
    .map(
      (item, index) => `
        <article class="admin-item">
            <img class="entry-thumb" src="${item.image || defaultSiteData.settings.heroImage}" alt="${item.title}">
            <div class="item-meta">
                <span class="item-badge">${item.type === "project" ? "Project" : item.type === "festival" ? "Festival" : item.type === "review" ? "Review" : "Offer"}</span>
                <h3>${item.title}</h3>
                <p class="item-sub">${item.type === "project" ? item.location || "Bihar Project" : item.type === "review" ? item.location || "Google Review" : item.tag || "Campaign Update"}</p>
                <p>${item.description || ""}</p>
                <p><strong>Button:</strong> ${item.buttonText || "-"} | <strong>URL:</strong> ${item.buttonUrl || "-"}</p>
            </div>
            <div class="item-actions">
                <button class="btn btn-secondary" type="button" data-delete="${index}">Delete</button>
            </div>
        </article>
      `
    )
    .join("");

  adminList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => deleteEntry(Number(button.dataset.delete)));
  });
}

function deleteEntry(index) {
  const data = loadSiteData();
  const combined = [
    ...data.projects.map((item) => ({ type: "project", item })),
    ...data.offers.map((item) => ({ type: item.postType || "offer", item })),
    ...data.reviews.map((item) => ({ type: "review", item }))
  ];
  const selected = combined[index];

  if (!selected) {
    return;
  }

  if (selected.type === "project") {
    data.projects = data.projects.filter((item) => item !== selected.item);
  } else if (selected.type === "review") {
    data.reviews = data.reviews.filter((item) => item !== selected.item);
  } else {
    data.offers = data.offers.filter((item) => item !== selected.item);
  }

  saveSiteData(data);
  renderAdminList();
  setStatus("entryStatus", "Entry deleted from homepage content.", "var(--maithil-red)");
}

async function handleImageUpload(input, target) {
  const file = input.files?.[0];
  if (!file) {
    return;
  }

  const image = await fileToDataUrl(file);

  if (target === "entry") {
    uploadedEntryImage = image;
    updateEntryPreview();
  } else {
    uploadedHeroImage = image;
    updateSettingsPreview();
  }
}

siteSettingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = loadSiteData();
  data.settings = {
    noticeTitle: settingsFields.noticeTitle.value.trim(),
    noticeText: settingsFields.noticeText.value.trim(),
    brandSlogan:
      settingsFields.brandSlogan.value.trim() || defaultSiteData.settings.brandSlogan,
    heroTagline:
      settingsFields.heroTagline.value.trim() || defaultSiteData.settings.heroTagline,
    heroTag: settingsFields.heroTag.value.trim() || defaultSiteData.settings.heroTag,
    heroSub: settingsFields.heroSub.value.trim() || defaultSiteData.settings.heroSub,
    yearsInBihar:
      Number(settingsFields.yearsInBihar.value) || defaultSiteData.settings.yearsInBihar,
    projectsDone:
      Number(settingsFields.projectsDone.value) || defaultSiteData.settings.projectsDone,
    officeAddress:
      settingsFields.officeAddress.value.trim() || defaultSiteData.settings.officeAddress,
    phone: settingsFields.phone.value.trim() || defaultSiteData.settings.phone,
    email: settingsFields.email.value.trim() || defaultSiteData.settings.email,
    whatsappLink:
      settingsFields.whatsappLink.value.trim() || defaultSiteData.settings.whatsappLink,
    mapEmbedUrl:
      settingsFields.mapEmbedUrl.value.trim() || defaultSiteData.settings.mapEmbedUrl,
    footerCopy:
      settingsFields.footerCopy.value.trim() || defaultSiteData.settings.footerCopy,
    socialLinks: {
      facebook: settingsFields.facebook.value.trim(),
      instagram: settingsFields.instagram.value.trim(),
      youtube: settingsFields.youtube.value.trim(),
      maps: settingsFields.maps.value.trim()
    },
    googleReviewUrl: settingsFields.googleReviewUrl.value.trim(),
    googleReviewAddUrl: settingsFields.googleReviewAddUrl.value.trim(),
    heroImage: getHeroImage() || defaultSiteData.settings.heroImage
  };

  saveSiteData(data);
  populateSettingsForm();
  setStatus("settingsStatus", "Important site settings saved successfully.");
});

adminForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = loadSiteData();
  const image = getEntryImage() || defaultSiteData.settings.heroImage;
  const entry = {
    title: fields.title.value.trim(),
    description: fields.description.value.trim(),
    image,
    buttonText: fields.buttonText.value.trim(),
    buttonUrl: fields.buttonUrl.value.trim(),
    tag: fields.tag.value.trim(),
    location: fields.location.value.trim(),
    postType: fields.entryType.value === "festival" ? "festival" : "offer"
  };

  if (fields.entryType.value === "project") {
    data.projects.unshift(entry);
  } else if (fields.entryType.value === "review") {
    data.reviews.unshift({
      author: { en: fields.title.value.trim(), hi: fields.title.value.trim() },
      location: { en: fields.location.value.trim(), hi: fields.location.value.trim() },
      text: { en: fields.description.value.trim(), hi: fields.description.value.trim() },
      rating: 5,
      source: "Google"
    });
  } else {
    data.offers.unshift(entry);
  }

  saveSiteData(data);
  adminForm.reset();
  uploadedEntryImage = "";
  updateEntryPreview();
  renderAdminList();
  setStatus("entryStatus", "Homepage entry saved successfully.");
});

document.getElementById("resetEntryForm").addEventListener("click", () => {
  adminForm.reset();
  uploadedEntryImage = "";
  updateEntryPreview();
  setStatus("entryStatus", "Entry form cleared.", "var(--maithil-red)");
});

fields.imageFile.addEventListener("change", () => {
  handleImageUpload(fields.imageFile, "entry").catch(() => {
    setStatus("entryStatus", "Could not read the selected image.", "var(--maithil-red)");
  });
});

settingsFields.heroImageFile.addEventListener("change", () => {
  handleImageUpload(settingsFields.heroImageFile, "hero").catch(() => {
    setStatus("settingsStatus", "Could not read the selected hero image.", "var(--maithil-red)");
  });
});

[
  fields.entryType,
  fields.title,
  fields.tag,
  fields.location,
  fields.description,
  fields.imageUrl
].forEach((field) => field.addEventListener("input", updateEntryPreview));

[
  settingsFields.noticeTitle,
  settingsFields.noticeText,
  settingsFields.brandSlogan,
  settingsFields.heroTagline,
  settingsFields.heroTag,
  settingsFields.heroSub,
  settingsFields.yearsInBihar,
  settingsFields.projectsDone,
  settingsFields.officeAddress,
  settingsFields.phone,
  settingsFields.email,
  settingsFields.whatsappLink,
  settingsFields.mapEmbedUrl,
  settingsFields.footerCopy,
  settingsFields.facebook,
  settingsFields.instagram,
  settingsFields.youtube,
  settingsFields.maps,
  settingsFields.googleReviewUrl,
  settingsFields.googleReviewAddUrl,
  settingsFields.heroImage
].forEach((field) => field.addEventListener("input", updateSettingsPreview));

populateSettingsForm();
updateEntryPreview();
renderAdminList();
applyTheme(window.localStorage.getItem(THEME_KEY) || "light");
themeToggle?.addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "dark" ? "light" : "dark");
});
