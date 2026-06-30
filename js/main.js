document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("pageLoader");
  const header = document.getElementById("header");

  // ============================================================
  // APPLY ADMIN SETTINGS
  // ============================================================
  function applySettings() {
    if (!window.loadSiteData) return;
    const data = window.loadSiteData();
    const s = data.settings;

    // Hero photo
    const heroPhoto = document.getElementById("heroPhoto");
    if (heroPhoto && s.heroImage) heroPhoto.src = s.heroImage;

    // Notice banner
    const noticeBanner = document.getElementById("noticeBanner");
    if (noticeBanner) {
      if (s.noticeTitle || s.noticeText) {
        noticeBanner.hidden = false;
        const t = document.getElementById("noticeBannerTitle"); if(t) t.textContent = s.noticeTitle||"";
        const x = document.getElementById("noticeBannerText"); if(x) x.textContent = s.noticeText||"";
      } else { noticeBanner.hidden = true; }
    }

    // Phone links
    if (s.phone) {
      const clean = s.phone.replace(/[^0-9+]/g,"");
      document.querySelectorAll("[data-dynamic='phone']").forEach(el => {
        el.href = "tel:" + clean;
        el.textContent = s.phone;
      });
    }

    // BUG FIX: WhatsApp — safely preserve existing query text
    if (s.whatsappLink) {
      const waBase = s.whatsappLink.split("?")[0];
      document.querySelectorAll("[data-dynamic='whatsapp']").forEach(el => {
        try {
          const existingHref = el.getAttribute("href") || "";
          const qIndex = existingHref.indexOf("?text=");
          const existingText = qIndex !== -1 ? decodeURIComponent(existingHref.slice(qIndex + 6)) : "";
          el.href = waBase + (existingText ? "?text=" + encodeURIComponent(existingText) : "");
        } catch(e) {
          el.href = waBase;
        }
      });
    }

    // Email links
    if (s.email) document.querySelectorAll("[data-dynamic='email']").forEach(el => {
      el.href = "mailto:" + s.email;
      el.textContent = s.email;
    });

    // Footer copy
    const fc = document.getElementById("footerCopy");
    if (fc && s.footerCopy) fc.textContent = s.footerCopy;

    // BUG FIX: Update stat counters properly — update both dataset AND visible text
    // so counter animation picks up the correct admin value
    const yr = document.getElementById("statYears");
    if (yr && s.yearsInBihar) {
      yr.dataset.count = s.yearsInBihar;
      yr.textContent = s.yearsInBihar;
    }
    const pr = document.getElementById("statProjects");
    if (pr && s.projectsDone) {
      pr.dataset.count = s.projectsDone;
      pr.textContent = s.projectsDone;
    }

    // Hero card stats too
    const heroYr = document.getElementById("heroStatYears");
    if (heroYr && s.yearsInBihar) { heroYr.dataset.count = s.yearsInBihar; heroYr.textContent = s.yearsInBihar; }
    const heroPr = document.getElementById("heroStatProjects");
    if (heroPr && s.projectsDone) { heroPr.dataset.count = s.projectsDone; heroPr.textContent = s.projectsDone; }

    window._vcWhatsapp = s.whatsappLink || "https://wa.me/919934683355";
  }

  applySettings();

  // ============================================================
  // LOADER
  // ============================================================
  if (loader) {
    const hide = () => loader.classList.add("hidden");
    if (document.readyState === "complete") requestAnimationFrame(hide);
    else { window.addEventListener("load", hide, {once:true}); setTimeout(hide, 1500); }
  }

  // ============================================================
  // HEADER SCROLL
  // ============================================================
  if (header) {
    const update = () => header.classList.toggle("scrolled", window.scrollY > 40);
    update();
    window.addEventListener("scroll", update, {passive:true});
  }

  // Mobile nav
  const toggle = document.getElementById("mobileToggle");
  const nav = document.getElementById("siteNav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // ============================================================
  // SCROLL REVEAL
  // ============================================================
  const revealEls = document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale");
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach(el => revealObs.observe(el));

  // ============================================================
  // COUNTER ANIMATION
  // BUG FIX: read dataset.count at animation time (after applySettings updated it)
  // ============================================================
  function animateCount(el, target, duration = 1800) {
    let start = 0;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(eased * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }
  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        // BUG FIX: read dataset.count fresh here — may have been updated by applySettings
        const target = parseInt(el.dataset.count);
        if (!isNaN(target)) animateCount(el, target);
        counterObs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll("[data-count]").forEach(el => counterObs.observe(el));

  // ============================================================
  // CALCULATOR
  // BUG FIX: pricing.js loads before main.js — window.loadPricing always available
  // Removed hardcoded options; all options come from loadPricing()
  // ============================================================
  const calcArea    = document.getElementById("calcArea");
  const calcFloors  = document.getElementById("calcFloors");
  const calcPackage = document.getElementById("calcPackage");
  const calcEstimate = document.getElementById("calcEstimate");
  const calcBuiltUp  = document.getElementById("calcBuiltUp");
  const calcGuide    = document.getElementById("calcGuide");
  const calcBtn      = document.getElementById("calcEstimateBtn");

  if (calcPackage) {
    const pricing = window.loadPricing ? window.loadPricing() : null;
    if (pricing) {
      calcPackage.innerHTML = Object.entries(pricing.calculatorPackages)
        .map(([k,p]) => `<option value="${p.ratePerSqFt}"${k==="standard"?" selected":""}>${p.label} — ₹${p.ratePerSqFt.toLocaleString("en-IN")}/sq ft</option>`)
        .join("");
    }
  }

  function doCalc() {
    const area   = Number(calcArea?.value) || 0;
    const floors = Number(calcFloors?.value) || 1;
    const rate   = Number(calcPackage?.value) || 0;
    const builtUp = area * floors;
    const est = builtUp * rate;
    if (calcEstimate) calcEstimate.textContent = "₹" + est.toLocaleString("en-IN");
    if (calcBuiltUp) calcBuiltUp.textContent = builtUp.toLocaleString("en-IN") + " sq ft";
    if (calcGuide && calcPackage) calcGuide.textContent = calcPackage.options[calcPackage.selectedIndex]?.text?.split("—")[0]?.trim() || "";
  }
  [calcArea, calcFloors, calcPackage].forEach(el => el?.addEventListener("input", doCalc));
  calcBtn?.addEventListener("click", doCalc);
  doCalc();

  // ============================================================
  // FAQ ACCORDION
  // ============================================================
  document.querySelectorAll(".faq-q").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(i => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // ============================================================
  // STAGE SWITCHER
  // ============================================================
  const stageImgs = [
    "assets/images/stages/stage1-foundation.jpg",
    "assets/images/stages/stage2-structure.jpg",
    "assets/images/stages/stage3-brick.jpg",
    "assets/images/stages/stage4-slab.jpg",
    "assets/images/stages/stage5-plumbing.jpg",
    "assets/images/stages/stage9-painting.jpg"
  ];
  const stageImg = document.getElementById("stageImg");
  if (stageImg) stageImg.style.transition = "opacity 0.3s ease";
  document.querySelectorAll(".stage-item").forEach((item, i) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".stage-item").forEach(s => s.classList.remove("active"));
      item.classList.add("active");
      if (stageImg && stageImgs[i]) {
        stageImg.style.opacity = "0";
        setTimeout(() => { stageImg.src = stageImgs[i]; stageImg.style.opacity = "1"; }, 250);
      }
    });
  });

  // ============================================================
  // LEAD FORM
  // ============================================================
  const leadForm = document.getElementById("leadForm");
  if (leadForm) {
    leadForm.addEventListener("submit", e => {
      e.preventDefault();
      const name    = document.getElementById("leadName")?.value.trim() || "";
      const phone   = document.getElementById("leadPhone")?.value.trim() || "";
      const city    = document.getElementById("leadCity")?.value.trim() || "";
      const project = document.getElementById("leadProject")?.value || "";
      const msg = [
        "Hello Vishwanath Construction,",
        "I want a free site consultation.",
        `Name: ${name}`, `Phone: ${phone}`,
        `City: ${city || "Not shared"}`, `Project Type: ${project}`
      ].join("\n");
      if (window.sendQuotationToSheet) window.sendQuotationToSheet({
        clientName: name, phone, projectName: project, location: city, notes: "Homepage enquiry form"
      });
      const base = (window._vcWhatsapp || "https://wa.me/919934683355").split("?")[0];
      window.open(`${base}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    });
  }

  // ============================================================
  // MORE PROJECTS (admin added)
  // ============================================================
  const grid = document.getElementById("moreProjectsGrid");
  if (grid && window.loadSiteData) {
    const { projects } = window.loadSiteData();
    if (projects?.length) {
      grid.hidden = false;
      grid.innerHTML = projects.map(p => `
        <div class="project-card">
          <div class="proj-bg" style="${p.image ? `background-image:url('${p.image}');` : ""}width:100%;height:100%;"></div>
          <div class="project-overlay">
            <span class="project-tag-badge">${p.location || "Patna"}</span>
            <h3>${p.title || "Untitled"}</h3>
            <p>${p.description || ""}</p>
          </div>
        </div>
      `).join("");
    }
  }

  // heroScale keyframe safety
  const s = document.createElement("style");
  s.textContent = `@keyframes heroScale{from{transform:scale(1)}to{transform:scale(1.06)}}`;
  document.head.appendChild(s);

});

// ============================================================
// IMAGE FALLBACK — if any external image fails to load,
// swap to a neutral placeholder so layout never breaks
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const fallbackSvg = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="#1A2028"/><text x="300" y="200" fill="#8A9099" font-family="Inter,sans-serif" font-size="16" text-anchor="middle">Vishwanath Construction</text></svg>`
  );
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function onErr() {
      if (this.src !== fallbackSvg) {
        this.src = fallbackSvg;
        this.style.objectFit = 'cover';
      }
      this.removeEventListener('error', onErr);
    });
  });
});
