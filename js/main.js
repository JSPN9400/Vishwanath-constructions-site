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
    window.setTimeout(() => loader.classList.add("hidden"), 320);
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

  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    window.gsap.utils.toArray(".billing-card, .reason-card, .testimonial-card, .trust-card").forEach((card, index) => {
      window.gsap.fromTo(card, { opacity: 0, y: 28 }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 86%"
        }
      });
    });

    window.gsap.fromTo(".hero-main", { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    window.gsap.fromTo(".hero-side-card", { opacity: 0, x: 36 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out", delay: 0.15 });
  }
});
