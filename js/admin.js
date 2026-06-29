// ============================================
// Vishwanath Construction — Admin Panel
// localStorage CRUD for homepage content
// (loadSiteData / saveSiteData come from js/site-data.js, loaded before this file)
// ============================================
const defaultSiteData = window.DEFAULT_SITE_DATA;

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
    heroImageInput: s.heroImage,
    quotationNoteInput: s.quotationNote
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
      const fields = ['noticeTitle','noticeText','brandSlogan','heroTagline','heroTag','heroSub','officeAddress','phone','email','whatsappLink','mapEmbedUrl','footerCopy','googleReviewUrl','googleReviewAddUrl','heroImage','quotationNote'];
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

  initPricingPanel();
  initMaterialsPanel();
  initLeadsPanel();
});

// ============================================
// Pricing Panel — calculator + quotation rates
// ============================================
function initPricingPanel() {
  const form = document.getElementById('pricingForm');
  if (!form) return;

  const fields = {
    rateBasic: ['calculatorPackages', 'basic', 'ratePerSqFt'],
    rateStandard: ['calculatorPackages', 'standard', 'ratePerSqFt'],
    ratePremium: ['calculatorPackages', 'premium', 'ratePerSqFt'],
    structWithLow: ['quotationRates', 'structure', 'with_material', 'low'],
    structWithMid: ['quotationRates', 'structure', 'with_material', 'mid'],
    structWithHigh: ['quotationRates', 'structure', 'with_material', 'high'],
    structWoLow: ['quotationRates', 'structure', 'without_material', 'low'],
    structWoMid: ['quotationRates', 'structure', 'without_material', 'mid'],
    structWoHigh: ['quotationRates', 'structure', 'without_material', 'high'],
    finWithLow: ['quotationRates', 'finishing', 'with_material', 'low'],
    finWithMid: ['quotationRates', 'finishing', 'with_material', 'mid'],
    finWithHigh: ['quotationRates', 'finishing', 'with_material', 'high'],
    finWoLow: ['quotationRates', 'finishing', 'without_material', 'low'],
    finWoMid: ['quotationRates', 'finishing', 'without_material', 'mid'],
    finWoHigh: ['quotationRates', 'finishing', 'without_material', 'high'],
    allWithLow: ['quotationRates', 'all_work', 'with_material', 'low'],
    allWithMid: ['quotationRates', 'all_work', 'with_material', 'mid'],
    allWithHigh: ['quotationRates', 'all_work', 'with_material', 'high'],
    allWoLow: ['quotationRates', 'all_work', 'without_material', 'low'],
    allWoMid: ['quotationRates', 'all_work', 'without_material', 'mid'],
    allWoHigh: ['quotationRates', 'all_work', 'without_material', 'high']
  };

  function getPath(obj, path) {
    return path.reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
  }
  function setPath(obj, path, value) {
    let cur = obj;
    for (let i = 0; i < path.length - 1; i++) {
      cur = cur[path[i]];
    }
    cur[path[path.length - 1]] = value;
  }

  function fillForm() {
    const pricing = window.loadPricing();
    Object.entries(fields).forEach(([id, path]) => {
      const el = document.getElementById(id);
      if (el) el.value = getPath(pricing, path);
    });
    document.getElementById('gstPercentInput').value = pricing.gstPercent;
  }

  fillForm();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const pricing = window.loadPricing();
    Object.entries(fields).forEach(([id, path]) => {
      const el = document.getElementById(id);
      if (el && el.value !== '') setPath(pricing, path, Number(el.value));
    });
    pricing.gstPercent = Number(document.getElementById('gstPercentInput').value) || pricing.gstPercent;
    window.savePricing(pricing);
    setStatus('pricingStatus', 'Pricing saved — homepage calculator and quotation tool will use these rates immediately.');
  });

  document.getElementById('resetPricingBtn')?.addEventListener('click', function () {
    if (!confirm('Reset all pricing to the original default values?')) return;
    window.savePricing(JSON.parse(JSON.stringify(window.DEFAULT_PRICING)));
    fillForm();
    setStatus('pricingStatus', 'Pricing reset to defaults.');
  });
}

// ============================================
// Materials Panel — package-wise material specs
// Text format: "## Category" headers, "Item | Spec" rows
// ============================================
function materialsToText(tier) {
  return tier.groups.map((group) => {
    const header = `## ${group.category}`;
    const rows = group.rows.map(([item, spec]) => `${item} | ${spec}`).join('\n');
    return `${header}\n${rows}`;
  }).join('\n\n');
}

function textToMaterials(text, label) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const groups = [];
  let current = null;
  lines.forEach((line) => {
    if (line.startsWith('##')) {
      current = { category: line.replace(/^##\s*/, ''), rows: [] };
      groups.push(current);
    } else if (line.includes('|') && current) {
      const [item, ...specParts] = line.split('|');
      current.rows.push([item.trim(), specParts.join('|').trim()]);
    }
  });
  return { label, groups };
}

function initMaterialsPanel() {
  const form = document.getElementById('materialsForm');
  if (!form) return;

  const matLow = document.getElementById('matLow');
  const matMid = document.getElementById('matMid');
  const matHigh = document.getElementById('matHigh');

  function fillForm() {
    const materials = window.loadMaterials();
    matLow.value = materialsToText(materials.low);
    matMid.value = materialsToText(materials.mid);
    matHigh.value = materialsToText(materials.high);
  }

  fillForm();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const materials = {
      low: textToMaterials(matLow.value, 'Basic'),
      mid: textToMaterials(matMid.value, 'Standard'),
      high: textToMaterials(matHigh.value, 'Premium')
    };
    window.saveMaterials(materials);
    setStatus('materialsStatus', 'Material specifications saved — new quotations will use these specs immediately.');
  });

  document.getElementById('resetMaterialsBtn')?.addEventListener('click', function () {
    if (!confirm('Reset all material specifications to the original defaults?')) return;
    window.saveMaterials(JSON.parse(JSON.stringify(window.DEFAULT_MATERIALS)));
    fillForm();
    setStatus('materialsStatus', 'Material specifications reset to defaults.');
  });
}
function initLeadsPanel() {
  const sheetInput = document.getElementById('sheetLinkInput');
  const formInput = document.getElementById('formLinkInput');
  if (!sheetInput || !formInput) return;

  const LEADS_LINKS_KEY = 'vishwanathLeadLinks';

  function loadLinks() {
    try {
      return JSON.parse(localStorage.getItem(LEADS_LINKS_KEY) || '{}');
    } catch {
      return {};
    }
  }

  function applyLinks() {
    const links = loadLinks();
    sheetInput.value = links.sheetUrl || '';
    formInput.value = links.formUrl || '';
    const openSheetBtn = document.getElementById('openSheetBtn');
    const openFormBtn = document.getElementById('openFormBtn');
    if (links.sheetUrl) { openSheetBtn.href = links.sheetUrl; openSheetBtn.style.opacity = '1'; }
    else { openSheetBtn.removeAttribute('href'); openSheetBtn.style.opacity = '0.5'; }
    if (links.formUrl) { openFormBtn.href = links.formUrl; openFormBtn.style.opacity = '1'; }
    else { openFormBtn.removeAttribute('href'); openFormBtn.style.opacity = '0.5'; }
  }

  applyLinks();

  document.getElementById('saveLeadLinksBtn')?.addEventListener('click', function () {
    localStorage.setItem(LEADS_LINKS_KEY, JSON.stringify({
      sheetUrl: sheetInput.value.trim(),
      formUrl: formInput.value.trim()
    }));
    applyLinks();
    setStatus('leadsStatus', 'Links saved. Use "Open Google Sheet" anytime to see new quotation requests.');
  });
}