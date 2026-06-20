// ============================================
// Vishwanath Construction — Admin Panel
// localStorage CRUD for homepage content
// ============================================
const STORAGE_KEY = "vishwanathSiteData";
const defaultSiteData = {
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
    heroImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80"
  },
  offers: [],
  projects: [],
  reviews: []
};

function loadSiteData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return JSON.parse(JSON.stringify(defaultSiteData));
    const parsed = JSON.parse(raw);
    return {
      settings: { ...defaultSiteData.settings, ...parsed.settings, socialLinks: { ...defaultSiteData.settings.socialLinks, ...(parsed.settings?.socialLinks || {}) } },
      offers: Array.isArray(parsed.offers) ? parsed.offers : [],
      projects: Array.isArray(parsed.projects) ? parsed.projects : [],
      reviews: Array.isArray(parsed.reviews) ? parsed.reviews : []
    };
  } catch { return JSON.parse(JSON.stringify(defaultSiteData)); }
}

function saveSiteData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// --- Populate forms and previews ---
function populateSettings() {
  const data = loadSiteData();
  const s = data.settings;
  const map = {
    noticeTitleInput: s.noticeTitle,
    noticeTextInput: s.noticeText,
    brandSloganInput: s.brandSlogan,
    heroTaglineInput: s.heroTagline,
    heroTagInput: s.heroTag,
    heroSubInput: s.heroSub,
    yearsInput: s.yearsInBihar,
    projectsInput: s.projectsDone,
    officeAddressInput: s.officeAddress,
    phoneInput: s.phone,
    emailInput: s.email,
    whatsappInput: s.whatsappLink,
    mapInput: s.mapEmbedUrl,
    footerCopyInput: s.footerCopy,
    facebookInput: s.socialLinks.facebook,
    instagramInput: s.socialLinks.instagram,
    youtubeInput: s.socialLinks.youtube,
    mapsLinkInput: s.socialLinks.maps,
    googleReviewUrlInput: s.googleReviewUrl,
    googleReviewAddUrlInput: s.googleReviewAddUrl,
    heroImageInput: s.heroImage
  };
  Object.entries(map).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  });
  updatePreview();
}

function updatePreview() {
  const data = loadSiteData();
  const s = data.settings;
  const heroPreview = document.getElementById('heroPreview');
  if (heroPreview) heroPreview.src = s.heroImage || defaultSiteData.settings.heroImage;
  const slogan = document.getElementById('previewSlogan');
  if (slogan) slogan.textContent = s.brandSlogan || defaultSiteData.settings.brandSlogan;
  const tagline = document.getElementById('previewTagline');
  if (tagline) tagline.textContent = s.heroTagline || defaultSiteData.settings.heroTagline;
  const years = document.getElementById('previewYears');
  if (years) years.textContent = s.yearsInBihar || defaultSiteData.settings.yearsInBihar;
  const projects = document.getElementById('previewProjects');
  if (projects) projects.textContent = (s.projectsDone || defaultSiteData.settings.projectsDone) + '+';
}

function renderAdminList() {
  const data = loadSiteData();
  const list = [
    ...data.projects.map(item => ({ type: 'project', ...item })),
    ...data.offers.map(item => ({ type: item.postType || 'offer', ...item })),
    ...data.reviews.map(item => ({ type: 'review', ...item }))
  ];
  const container = document.getElementById('adminList');
  if (!container) return;
  if (!list.length) {
    container.innerHTML = '<div class="empty-card">No entries saved yet.</div>';
    return;
  }
  container.innerHTML = list.map((item, index) => `
    <article class="admin-item">
      <img class="entry-thumb" src="${item.image || defaultSiteData.settings.heroImage}" alt="${item.title}">
      <div class="item-meta">
        <span class="item-badge">${item.type === 'project' ? 'Project' : item.type === 'festival' ? 'Festival' : item.type === 'review' ? 'Review' : 'Offer'}</span>
        <h3>${item.title}</h3>
        <p class="item-sub">${item.location || item.tag || ''}</p>
        <p>${item.description || ''}</p>
        <p><strong>Button:</strong> ${item.buttonText || '-'} | <strong>URL:</strong> ${item.buttonUrl || '-'}</p>
      </div>
      <div class="item-actions">
        <button class="btn-outline-gold" data-delete="${index}" style="padding:0.4rem 1rem;font-size:0.8rem;">Delete</button>
      </div>
    </article>
  `).join('');
  container.querySelectorAll('[data-delete]').forEach(btn => {
    btn.addEventListener('click', () => deleteEntry(parseInt(btn.dataset.delete)));
  });
}

function deleteEntry(index) {
  const data = loadSiteData();
  const combined = [
    ...data.projects.map(item => ({ type: 'project', item })),
    ...data.offers.map(item => ({ type: item.postType || 'offer', item })),
    ...data.reviews.map(item => ({ type: 'review', item }))
  ];
  const selected = combined[index];
  if (!selected) return;
  if (selected.type === 'project') data.projects = data.projects.filter(i => i !== selected.item);
  else if (selected.type === 'review') data.reviews = data.reviews.filter(i => i !== selected.item);
  else data.offers = data.offers.filter(i => i !== selected.item);
  saveSiteData(data);
  renderAdminList();
  setStatus('entryStatus', 'Entry deleted.');
}

function setStatus(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

// --- Form submissions ---
document.addEventListener('DOMContentLoaded', function() {
  populateSettings();
  renderAdminList();

  const settingsForm = document.getElementById('siteSettingsForm');
  if (settingsForm) {
    settingsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = loadSiteData();
      const s = data.settings;
      const fields = ['noticeTitle','noticeText','brandSlogan','heroTagline','heroTag','heroSub','officeAddress','phone','email','whatsappLink','mapEmbedUrl','footerCopy','googleReviewUrl','googleReviewAddUrl','heroImage'];
      fields.forEach(f => {
        const el = document.getElementById(f + 'Input');
        if (el) s[f] = el.value.trim();
      });
      // number fields
      s.yearsInBihar = parseInt(document.getElementById('yearsInput').value) || 12;
      s.projectsDone = parseInt(document.getElementById('projectsInput').value) || 22;
      // social
      s.socialLinks.facebook = document.getElementById('facebookInput').value.trim();
      s.socialLinks.instagram = document.getElementById('instagramInput').value.trim();
      s.socialLinks.youtube = document.getElementById('youtubeInput').value.trim();
      s.socialLinks.maps = document.getElementById('mapsLinkInput').value.trim();
      saveSiteData(data);
      populateSettings();
      setStatus('settingsStatus', 'Settings saved.');
    });
  }

  const entryForm = document.getElementById('adminForm');
  if (entryForm) {
    entryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = loadSiteData();
      const entry = {
        title: document.getElementById('title').value.trim(),
        description: document.getElementById('description').value.trim(),
        image: document.getElementById('imageUrl').value.trim() || defaultSiteData.settings.heroImage,
        buttonText: document.getElementById('buttonText').value.trim(),
        buttonUrl: document.getElementById('buttonUrl').value.trim(),
        tag: document.getElementById('tag').value.trim(),
        location: document.getElementById('location').value.trim(),
        postType: document.getElementById('entryType').value === 'festival' ? 'festival' : 'offer'
      };
      const type = document.getElementById('entryType').value;
      if (type === 'project') data.projects.unshift(entry);
      else if (type === 'review') data.reviews.unshift({ author: entry.title, location: entry.location, text: entry.description, rating: 5, source: 'Google' });
      else data.offers.unshift(entry);
      saveSiteData(data);
      entryForm.reset();
      document.getElementById('imageFile').value = '';
      renderAdminList();
      setStatus('entryStatus', 'Entry saved.');
    });
  }

  // File upload preview
  const imageFile = document.getElementById('imageFile');
  if (imageFile) {
    imageFile.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        document.getElementById('imageUrl').value = ev.target.result;
        // Also update preview
        const previewImg = document.getElementById('entryPreviewImage');
        if (previewImg) previewImg.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  const heroImageFile = document.getElementById('heroImageFile');
  if (heroImageFile) {
    heroImageFile.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        document.getElementById('heroImageInput').value = ev.target.result;
        document.getElementById('heroPreview').src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // Reset form
  document.getElementById('resetEntryForm')?.addEventListener('click', function() {
    document.getElementById('adminForm').reset();
    document.getElementById('imageFile').value = '';
    setStatus('entryStatus', 'Form cleared.');
  });

  // Theme toggle in admin
  document.getElementById('themeToggle')?.addEventListener('click', function() {
    const current = document.body.dataset.theme;
    document.body.dataset.theme = (current === 'dark') ? 'light' : 'dark';
    localStorage.setItem('vishwanathTheme', document.body.dataset.theme);
    this.textContent = (document.body.dataset.theme === 'dark') ? 'Light Mode' : 'Dark Mode';
  });
});