document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("pageLoader");
  const header = document.getElementById("header");
  const mobileToggle = document.getElementById("mobileToggle");
  const siteNav = document.getElementById("siteNav");
  const parallaxTarget = document.querySelector("[data-parallax]");
  const calcEstimateBtn = document.getElementById("calcEstimateBtn");
  const calcArea = document.getElementById("calcArea");
  const calcFloors = document.getElementById("calcFloors");
  const calcPackage = document.getElementById("calcPackage");
  const calcBuiltUp = document.getElementById("calcBuiltUp");
  const calcEstimate = document.getElementById("calcEstimate");
  const calcGuide = document.getElementById("calcGuide");
  const leadForm = document.getElementById("leadForm");

  // ============================================================
  // APPLY ADMIN SETTINGS TO HOMEPAGE
  // Reads settings saved from admin.html and updates DOM live
  // ============================================================
  function applySettings() {
    if (!window.loadSiteData) return;
    const data = window.loadSiteData();
    const s = data.settings;

    // --- Hero photo ---
    const heroPhoto = document.getElementById("heroPhoto");
    if (heroPhoto && s.heroImage) {
      heroPhoto.src = s.heroImage;
    }

    // --- Notice / announcement banner ---
    const noticeBanner = document.getElementById("noticeBanner");
    const noticeTitle = document.getElementById("noticeBannerTitle");
    const noticeText = document.getElementById("noticeBannerText");
    if (noticeBanner) {
      if (s.noticeTitle || s.noticeText) {
        noticeBanner.hidden = false;
        if (noticeTitle) noticeTitle.textContent = s.noticeTitle || "";
        if (noticeText)  noticeText.textContent  = s.noticeText  || "";
      } else {
        noticeBanner.hidden = true;
      }
    }

    // --- Brand slogan ---
    const brandSloganEl = document.getElementById("brandSlogan");
    if (brandSloganEl && s.brandSlogan) brandSloganEl.textContent = s.brandSlogan;

    // --- Hero tagline, tag, subtext ---
    const heroTaglineEl = document.getElementById("heroTaglineText");
    if (heroTaglineEl && s.heroTagline) heroTaglineEl.textContent = s.heroTagline;
    const heroTagEl = document.getElementById("heroTagText");
    if (heroTagEl && s.heroTag) heroTagEl.textContent = s.heroTag;
    const heroSubEl = document.getElementById("heroSubText");
    if (heroSubEl && s.heroSub) heroSubEl.textContent = s.heroSub;

    // --- Stats: Years in Bihar & Projects Done ---
    const yearsEl = document.getElementById("statYears");
    if (yearsEl && s.yearsInBihar) yearsEl.textContent = s.yearsInBihar;
    const projectsEl = document.getElementById("statProjects");
    if (projectsEl && s.projectsDone) projectsEl.textContent = s.projectsDone + "+";

    // --- Phone: all [data-dynamic="phone"] links ---
    if (s.phone) {
      const cleanPhone = s.phone.replace(/[^0-9+]/g, "");
      document.querySelectorAll("[data-dynamic='phone']").forEach(el => {
        el.href = "tel:" + cleanPhone;
        el.textContent = s.phone;
      });
    }

    // --- WhatsApp: all [data-dynamic="whatsapp"] links ---
    if (s.whatsappLink) {
      document.querySelectorAll("[data-dynamic='whatsapp']").forEach(el => {
        // Preserve query string if already set
        const url = new URL(el.href, location.href);
        const text = url.searchParams.get("text") || "";
        el.href = s.whatsappLink + (text ? "?text=" + encodeURIComponent(text) : "");
      });
      // Also update lead form open URL (handled in submit handler below)
    }

    // --- Email ---
    if (s.email) {
      document.querySelectorAll("[data-dynamic='email']").forEach(el => {
        el.href = "mailto:" + s.email;
        el.textContent = s.email;
      });
    }

    // --- Office address ---
    const addrEl = document.getElementById("officeAddress");
    if (addrEl && s.officeAddress) addrEl.textContent = s.officeAddress;

    // --- Footer copyright ---
    const footerCopyEl = document.getElementById("footerCopy");
    if (footerCopyEl && s.footerCopy) footerCopyEl.textContent = s.footerCopy;

    // --- Social links ---
    const fbLink = document.getElementById("socialFacebook");
    if (fbLink) { if (s.socialLinks.facebook) { fbLink.href = s.socialLinks.facebook; fbLink.hidden = false; } else { fbLink.hidden = true; } }
    const igLink = document.getElementById("socialInstagram");
    if (igLink) { if (s.socialLinks.instagram) { igLink.href = s.socialLinks.instagram; igLink.hidden = false; } else { igLink.hidden = true; } }
    const ytLink = document.getElementById("socialYoutube");
    if (ytLink) { if (s.socialLinks.youtube) { ytLink.href = s.socialLinks.youtube; ytLink.hidden = false; } else { ytLink.hidden = true; } }
    const mapsLink = document.getElementById("socialMaps");
    if (mapsLink) { if (s.socialLinks.maps) { mapsLink.href = s.socialLinks.maps; mapsLink.hidden = false; } else { mapsLink.hidden = true; } }

    // --- Google Reviews links ---
    const reviewSeeAll = document.getElementById("googleReviewSeeAll");
    if (reviewSeeAll && s.googleReviewUrl) reviewSeeAll.href = s.googleReviewUrl;
    const reviewAdd = document.getElementById("googleReviewAdd");
    if (reviewAdd && s.googleReviewAddUrl) reviewAdd.href = s.googleReviewAddUrl;

    // --- Map embed ---
    const mapIframe = document.getElementById("mapEmbed");
    if (mapIframe && s.mapEmbedUrl) mapIframe.src = s.mapEmbedUrl;

    // Store whatsapp for lead form use
    window._vcWhatsapp = s.whatsappLink || "https://wa.me/919934683355";
  }

  applySettings();

  if (loader) {
    const hideLoader = () => loader.classList.add("hidden");
    if (document.readyState === "complete") {
      requestAnimationFrame(hideLoader);
    } else {
      window.addEventListener("load", hideLoader, { once: true });
      window.setTimeout(hideLoader, 1200);
    }
  }

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  if (mobileToggle && siteNav) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      mobileToggle.classList.toggle("open", isOpen);
      mobileToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".interactive-btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.className = "ripple";
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      button.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 650);
    });
  });

  if (calcEstimateBtn && calcArea && calcFloors && calcPackage) {
    if (window.loadPricing) {
      const pricing = window.loadPricing();
      const packages = pricing.calculatorPackages;
      calcPackage.innerHTML = Object.entries(packages)
        .map(([key, pkg]) => `<option value="${pkg.ratePerSqFt}" data-label="${pkg.label}"${key === "standard" ? " selected" : ""}>${pkg.label}</option>`)
        .join("");
    }

    const updateEstimate = () => {
      const area = Number(calcArea.value) || 0;
      const floors = Number(calcFloors.value) || 1;
      const rate = Number(calcPackage.value) || 0;
      const builtUp = area * floors;
      const estimate = builtUp * rate;
      calcBuiltUp.textContent = `${builtUp.toLocaleString("en-IN")} sq ft`;
      calcEstimate.textContent = `INR ${estimate.toLocaleString("en-IN")}`;
      calcGuide.textContent = `${calcPackage.options[calcPackage.selectedIndex].text} package with ${floors} floor plan`;
    };

    ["input", "change"].forEach((type) => {
      calcArea.addEventListener(type, updateEstimate);
      calcFloors.addEventListener(type, updateEstimate);
      calcPackage.addEventListener(type, updateEstimate);
    });

    calcEstimateBtn.addEventListener("click", updateEstimate);
    updateEstimate();
  }

  if (leadForm) {
    leadForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = document.getElementById("leadName")?.value.trim() || "";
      const phone = document.getElementById("leadPhone")?.value.trim() || "";
      const city = document.getElementById("leadCity")?.value.trim() || "";
      const project = document.getElementById("leadProject")?.value || "";
      const message = [
        "Hello Vishwanath Construction,",
        "I want a free site consultation.",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `City: ${city || "Not shared"}`,
        `Project Type: ${project}`
      ].join("\n");

      if (window.sendQuotationToSheet) {
        window.sendQuotationToSheet({
          clientName: name,
          phone,
          projectName: project,
          location: city,
          notes: "Submitted via homepage quick enquiry form"
        });
      }

      const waBase = (window._vcWhatsapp || "https://wa.me/919934683355").split("?")[0];
      window.open(`${waBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

  if (parallaxTarget) {
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 16;
      const y = (event.clientY / window.innerHeight - 0.5) * 12;
      parallaxTarget.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  }

  // Render projects added from the admin panel (if any)
  const moreProjectsGrid = document.getElementById("moreProjectsGrid");
  if (moreProjectsGrid && window.loadSiteData) {
    const siteData = window.loadSiteData();
    const projects = siteData.projects || [];
    if (projects.length) {
      moreProjectsGrid.hidden = false;
      moreProjectsGrid.innerHTML = projects.map((p) => `
        <article class="project-card">
          <div class="project-visual" style="${p.image ? `background-image:url('${p.image}');background-size:cover;background-position:center;` : ""}"></div>
          <div class="project-body">
            <span class="project-tag">${p.location || "Patna, Bihar"}</span>
            <h3>${p.title || "Untitled Project"}</h3>
            <p>${p.description || ""}</p>
          </div>
        </article>
      `).join("");
    }
  }
});
