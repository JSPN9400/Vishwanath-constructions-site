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

  if (loader) {
    const hideLoader = () => loader.classList.add("hidden");
    if (document.readyState === "complete") {
      // Page (including images) already finished loading by the time JS ran
      requestAnimationFrame(hideLoader);
    } else {
      window.addEventListener("load", hideLoader, { once: true });
      // Safety cap: never block the user more than 1.2s even on a slow connection
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
    // Populate package dropdown from shared pricing (admin-editable)
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

      window.open(`https://wa.me/919934683355?text=${encodeURIComponent(message)}`, "_blank", "noopener");
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
