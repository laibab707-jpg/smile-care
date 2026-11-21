// Pages that should highlight a parent navigation item.
const NAV_PAGE_ALIASES = {
  "treatment.html": "services.html",
  "doctor.html": "doctors.html"
};

const NAV_LINKS = [
  { label: "Home",        href: "index.html" },
  { label: "About",       href: "about.html" },
  { label: "Dentists",     href: "doctors.html" },
  { label: "Contact & Location", href: "contact.html#locations" },
  { label: "Services",     href: "services.html" },
  { label: "Consultation", href: "book.html" }
];

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name) || "";
}

function getCurrentPage() {
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  return NAV_PAGE_ALIASES[file] || file;
}

function initHomeHeadlineRotator() {
  const headline = document.getElementById("hero-title-rotation");
  const phrase = headline && headline.querySelector(".hero-title-rotation-text");
  if (!phrase || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const phrases = ["thoughtful care.", "gentle guidance.", "confident care."];
  let index = 0;

  window.setInterval(function () {
    headline.classList.add("is-changing");
    window.setTimeout(function () {
      index = (index + 1) % phrases.length;
      phrase.textContent = phrases[index];
      headline.classList.remove("is-changing");
    }, 260);
  }, 2400);
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const current = getCurrentPage();

  const linksHtml = NAV_LINKS.map(function (item) {
    const isActive = item.href.split("#")[0].toLowerCase() === current;
    return '<li><a class="nav-link' + (isActive ? " nav-active" : "") + '" href="' + item.href + '"' +
           (isActive ? ' aria-current="page"' : "") + ">" + item.label + "</a></li>";
  }).join("");

  mount.innerHTML =
    '<div class="topbar-wrap">' +
      '<div class="topbar-inner">' +
        '<div class="topbar-left">' +
          '<span>Thoughtful dental care starts with a healthier smile</span>' +
        "</div>" +
        '<div class="topbar-right">' +
          '<a class="topbar-link" href="contact.html#emergency">Emergency guidance</a>' +
        "</div>" +
      "</div>" +
    "</div>" +
    '<div class="nav-wrap" id="nav-wrap">' +
      '<nav class="nav-inner" aria-label="Main navigation">' +
        '<a class="nav-logo" href="index.html" aria-label="SmileCare home">' +
          '<svg class="nav-logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
            '<path d="M12 5.2C10.6 3.9 8.5 3.3 6.7 4.1 4.3 5.2 4.1 8 5 10.4c.7 1.9.9 3.4 1.2 5.4.3 2.2.8 4.6 2.1 4.6 1.5 0 1.3-3.6 3.7-3.6s2.2 3.6 3.7 3.6c1.3 0 1.8-2.4 2.1-4.6.3-2 .5-3.5 1.2-5.4.9-2.4.7-5.2-1.7-6.3-1.8-.8-3.9-.2-5.3 1.1z"/>' +
          "</svg>" +
          '<span><span class="nav-logo-smile">Smile</span><span class="nav-logo-care">Care</span></span>' +
        "</a>" +
        '<button class="nav-toggle" id="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-menu">' +
          '<span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span><span class="nav-toggle-bar"></span>' +
        "</button>" +
        '<ul class="nav-menu" id="nav-menu">' +
          linksHtml +
          '<li><a class="nav-cta" href="book.html">Request a consultation</a></li>' +
        "</ul>" +
      "</nav>" +
    "</div>";

  initNavBehavior();
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  renderSharedFaqSection();

  mount.innerHTML =
    '<footer class="site-footer">' +
      '<div class="site-footer-inner">' +
        '<div class="site-footer-grid">' +
          '<div class="site-footer-brand">' +
            '<a class="footer-logo" href="index.html" aria-label="SmileCare home">' +
              '<span class="nav-logo-smile">Smile</span><span class="nav-logo-care">Care</span>' +
            '</a>' +
            '<p>Thoughtful dental information to help you take the next step toward a healthier smile.</p>' +
          '</div>' +
          '<div class="site-footer-column">' +
            '<h2>Explore</h2>' +
            '<nav aria-label="Explore SmileCare">' +
              '<a href="index.html">Home</a>' +
              '<a href="about.html">About SmileCare</a>' +
              '<a href="doctors.html">Find a dentist</a>' +
              '<a href="contact.html#locations">Locations</a>' +
              '<a href="contact.html#faqs">FAQs</a>' +
            '</nav>' +
          '</div>' +
          '<div class="site-footer-column">' +
            '<h2>Dental care</h2>' +
            '<nav aria-label="Dental care links">' +
              '<a href="services.html">Our services</a>' +
              '<a href="book.html">Consultation</a>' +
              '<a href="contact.html#emergency">Emergency guidance</a>' +
              '<a href="contact.html">Contact us</a>' +
            '</nav>' +
          '</div>' +
          '<div class="site-footer-column">' +
            '<h2>Plan your visit</h2>' +
            '<a class="site-footer-book-link" href="book.html">Request a consultation</a>' +
          '</div>' +
        '</div>' +
        '<div class="site-footer-bottom">' +
          '<p>&copy; ' + new Date().getFullYear() + ' SmileCare. All rights reserved.</p>' +
          '<nav class="site-footer-legal" aria-label="Legal">' +
            '<a href="privacy.html">Privacy policy</a>' +
            '<a href="terms.html">Terms of use</a>' +
          '</nav>' +
        '</div>' +
      '</div>' +
    '</footer>';
}

function renderSharedFaqSection() {
  if (getCurrentPage() !== "index.html") return;
  if (document.getElementById("book-faqs") || document.getElementById("cont-faqs")) return;
  if (document.getElementById("site-faqs")) return;

  const section = document.createElement("section");
  section.className = "shared-faq-section";
  section.id = "site-faqs";
  section.setAttribute("aria-labelledby", "site-faq-heading");
  section.innerHTML =
    '<div class="shared-faq-inner">' +
      '<h2 class="shared-faq-heading" id="site-faq-heading">Frequently asked questions</h2>' +
      '<p class="shared-faq-intro">Clear answers to common questions about dental care and using SmileCare.</p>' +
      '<div class="shared-faq-list"></div>' +
      '<p class="shared-faq-cta">Still have questions? <a href="contact.html">Contact SmileCare</a>.</p>' +
    '</div>';

  const faqItems = [
    {
      question: "How do I request a consultation?",
      answer: "Use the consultation form to prepare a summary of your preferences. It is not sent to a clinic, and no appointment is confirmed.",
      linkText: "Open the consultation form",
      linkHref: "book.html"
    },
    {
      question: "Do I need to know which treatment I need?",
      answer: "No. The service information is general and can help you prepare questions. A dentist must examine you to assess your needs and recommend suitable treatment."
    },
    {
      question: "Are dentist profiles and fees current?",
      answer: "No. Provider profiles, availability, locations, and fees shown here are illustrative and unverified. Confirm credentials, availability, and costs directly with a licensed clinic."
    },
    {
      question: "What should I do if I have a dental emergency?",
      answer: "Contact a dental professional promptly for urgent dental problems. If you have difficulty breathing or swallowing, heavy bleeding, or rapidly worsening swelling, seek emergency medical help immediately.",
      linkText: "Read emergency guidance",
      linkHref: "contact.html#emergency"
    },
    {
      question: "Is information entered on this site sent to a clinic?",
      answer: "No. Forms and the patient assistant do not send or store your messages. Please do not enter personal or sensitive medical information."
    }
  ];

  const list = section.querySelector(".shared-faq-list");
  faqItems.forEach(function (item) {
    const details = document.createElement("details");
    details.className = "shared-faq-item";
    const summary = document.createElement("summary");
    summary.textContent = item.question;
    const answer = document.createElement("div");
    answer.className = "shared-faq-answer";
    const paragraph = document.createElement("p");
    paragraph.textContent = item.answer;
    answer.appendChild(paragraph);
    if (item.linkText && item.linkHref) {
      const link = document.createElement("a");
      link.href = item.linkHref;
      link.textContent = item.linkText;
      answer.appendChild(document.createElement("br"));
      answer.appendChild(link);
    }
    details.appendChild(summary);
    details.appendChild(answer);
    list.appendChild(details);
  });

  const main = document.querySelector("main");
  const footerMount = document.getElementById("site-footer");
  if (main) {
    main.appendChild(section);
  } else if (footerMount) {
    document.body.insertBefore(section, footerMount);
  }
}

function initNavBehavior() {
  const wrap = document.getElementById("nav-wrap");
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!wrap || !toggle || !menu) return;

  function setMenu(open) {
    menu.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  toggle.addEventListener("click", function () {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close after choosing a link
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setMenu(false);
  });

  // Close with Escape and return focus to the button
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      toggle.focus();
    }
  });

  // Reset when moving to desktop width
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 900) setMenu(false);
  });

  // Soft shadow after scrolling
  function onScroll() {
    wrap.classList.toggle("nav-scrolled", window.scrollY > 4);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", renderHeader);
document.addEventListener("DOMContentLoaded", renderFooter);
document.addEventListener("DOMContentLoaded", initHomeHeadlineRotator);

// Quick-choice chips: each points to a problem id from the problems array in data.js
const SEARCH_CHIPS = [
  { label: "Toothache",      problemId: "toothache" },
  { label: "Braces",         problemId: "crooked-teeth" },
  { label: "Whitening",      problemId: "yellow-teeth" },
  { label: "Bleeding gums",  problemId: "bleeding-gums" },
  { label: "Kids dentistry", problemId: "kids-dental-problem" }
];

function initSearchCard() {
  const form = document.getElementById("search-form");
  const problemSelect = document.getElementById("search-problem");
  const citySelect = document.getElementById("search-city");
  const chipsBox = document.getElementById("search-chips");
  if (!form || !problemSelect || !citySelect || !chipsBox) return;
  if (typeof problems === "undefined") return; // data.js did not load

  // Fill the problem select from data.js (uses each problem's label)
  problems.forEach(function (p) {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.label;
    problemSelect.appendChild(opt);
  });

  // Build chips (only for problems that exist in data.js)
  SEARCH_CHIPS.forEach(function (chip) {
    const exists = problems.some(function (p) { return p.id === chip.problemId; });
    if (!exists) return;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "search-chip";
    btn.textContent = chip.label;
    btn.setAttribute("data-problem", chip.problemId);
    btn.setAttribute("aria-pressed", "false");
    chipsBox.appendChild(btn);
  });

  function syncChips() {
    chipsBox.querySelectorAll(".search-chip").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-problem") === problemSelect.value));
    });
  }

  chipsBox.addEventListener("click", function (e) {
    const btn = e.target.closest(".search-chip");
    if (!btn) return;
    problemSelect.value = btn.getAttribute("data-problem");
    syncChips();
  });

  problemSelect.addEventListener("change", syncChips);

  // Submit: doctors.html?problem=ID&city=CITY (empty values are left out)
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const parts = [];
    if (problemSelect.value) parts.push("problem=" + encodeURIComponent(problemSelect.value));
    if (citySelect.value) parts.push("city=" + encodeURIComponent(citySelect.value));
    window.location.href = "doctors.html" + (parts.length ? "?" + parts.join("&") : "");
  });
}

document.addEventListener("DOMContentLoaded", initSearchCard);

// Treatment fees are illustrative and should be replaced with verified clinic pricing.
function formatPKR(n) {
  return Number(n).toLocaleString("en-US");
}

function createTreatmentIllustration(treatment) {
  const illustrations = {
    1: '<path d="M92 79h56M96 91h48M103 103h34"/><path d="m166 58 4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/>',
    2: '<path d="M86 96h68"/><path d="M100 78h40v36h-40z" rx="8"/><path d="m108 96 10 10 16-20"/>',
    3: '<path d="M120 79v57M106 100l14 14 14-14M106 119l14 14 14-14"/><circle cx="120" cy="68" r="8"/>',
    4: '<path d="m171 57 4 9 9 4-9 4-4 9-4-9-9-4 9-4z"/><path d="m74 61 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/><path d="m151 112 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/>',
    5: '<path d="M87 95h66M96 83v25M108 83v25M120 83v25M132 83v25M144 83v25"/><circle cx="96" cy="95" r="4"/><circle cx="108" cy="95" r="4"/><circle cx="120" cy="95" r="4"/><circle cx="132" cy="95" r="4"/><circle cx="144" cy="95" r="4"/>',
    6: '<path d="M120 99v53M110 111h20M110 122h20M110 133h20M110 144h20"/><path d="M107 95h26"/>',
    7: '<path d="m91 82 10 7 9-9 10 9 10-9 9 9 10-7-8 43H99z"/><path d="M101 125h38"/>',
    8: '<path d="M90 69c13 4 20 14 26 27M150 69c-13 4-20 14-26 27"/><path d="m116 96 4 34m4-34-4 34"/><path d="M87 65l10 5m56-5-10 5"/>',
    9: '<path d="M91 96h58M101 85v22M120 82v29M139 85v22"/><path d="m120 64 4 8 8 4-8 4-4 8-4-8-8-4 8-4z"/>',
    10: '<path d="M82 104c18-14 38-20 58-18 12 1 23 5 34 12"/><path d="M88 115c17-8 34-11 52-9 12 1 22 4 31 9"/><path d="M105 88v18m18-21v21m18-17v17"/>',
    11: '<circle cx="120" cy="96" r="39"/><path d="M103 91h.1M137 91h.1"/><path d="M103 106c8 12 26 12 34 0"/><path d="M120 55v-9m-17 13-6-7m40 7 6-7"/>',
    12: '<path d="M120 65v44m-22-22h44"/><circle cx="120" cy="87" r="34"/>',
    13: '<path d="M98 73c0 11-12 18-12 30a12 12 0 0 0 24 0c0-12-12-19-12-30zm44 16c0 9-10 15-10 24a10 10 0 0 0 20 0c0-9-10-15-10-24z"/><path d="m119 68 3 6 6 3-6 3-3 6-3-6-6-3 6-3z"/>',
    14: '<path d="M120 63 154 76v25c0 22-14 36-34 47-20-11-34-25-34-47V76z"/><path d="m103 101 12 12 23-25"/>',
    15: '<path d="M82 97h76"/><path d="M88 97v15c0 10 7 17 16 17h32c9 0 16-7 16-17V97"/><path d="M96 97v15m16-15v18m16-18v18m16-18v15"/><path d="M92 87h56"/>',
    16: '<path d="m100 76 9 8 11-8 11 8 9-8-7 47h-26z"/><path d="M105 123h30"/><path d="m166 65 3 7 7 3-7 3-3 7-3-7-7-3 7-3z"/>',
    17: '<path d="M92 100c10-15 19-22 28-22 11 0 18 10 28 10 7 0 13-4 20-11"/><path d="m155 67 15 10-12 14-15-10z"/><path d="m99 118 16 10 17-4"/>',
    18: '<path d="M77 91c15 28 35 42 57 42 20 0 39-12 55-36"/><path d="M88 91c12 18 27 28 44 28 16 0 30-8 43-25"/><path d="M100 106v10m16-5v10m16-10v10m16-14v10m16-19v10"/>',
    19: '<rect x="78" y="61" width="84" height="72" rx="8"/><path d="M91 75h58M91 87h30"/><path d="M128 95c-7-4-16-1-15 8 1 8 5 14 7 23 1 4 3 4 5 0 2-5 5-5 7 0 2 4 4 4 5 0 2-9 6-15 7-23 1-9-8-12-16-8z"/>'
  };
  const motif = illustrations[treatment.id] || '<path d="m120 66 8 23 24 1-19 14 7 23-20-14-20 14 7-23-19-14 24-1z"/>';
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 160">' +
      '<defs><linearGradient id="treatment-bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e7f0e7"/><stop offset="1" stop-color="#c5dacb"/></linearGradient></defs>' +
      '<rect width="240" height="160" fill="url(#treatment-bg)"/>' +
      '<circle cx="201" cy="31" r="38" fill="#fff" opacity=".34"/>' +
      '<circle cx="34" cy="143" r="49" fill="#fff" opacity=".28"/>' +
      '<path d="M120 29c-15-14-39-15-49-2-12 15-4 35 2 51 7 20 9 47 20 49 12 2 12-29 27-29s15 31 27 29c11-2 13-29 20-49 6-16 14-36 2-51-10-13-34-12-49 2z" fill="#fff" stroke="#71947d" stroke-width="3"/>' +
      '<g fill="none" stroke="#356b58" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">' + motif + '</g>' +
    '</svg>';

  const image = document.createElement("img");
  image.className = "treat-img treat-illustration";
  image.alt = treatment.name + " illustration";
  image.loading = "lazy";
  image.decoding = "async";
  image.src = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  return image;
}

function createTreatmentCard(t) {
  const card = document.createElement("article");
  card.className = "treat-card";
  card.dataset.category = t.category;

  const media = document.createElement("div");
  media.className = "treat-media";
  const img = t.image
    ? document.createElement("img")
    : createTreatmentIllustration(t);
  if (t.image) {
    img.className = "treat-img";
    img.src = t.image;
    img.alt = t.name + " treatment";
    img.loading = "lazy";
    img.addEventListener("error", function () { img.replaceWith(createTreatmentIllustration(t)); });
  }
  media.appendChild(img);

  const cat = document.createElement("span");
  cat.className = "treat-category";
  cat.textContent = t.category;
  media.appendChild(cat);

  // Body
  const body = document.createElement("div");
  body.className = "treat-body";

  const name = document.createElement("h3");
  name.className = "treat-name";
  name.textContent = t.name;

  const desc = document.createElement("p");
  desc.className = "treat-desc";
  desc.textContent = t.shortDescription;

  const meta = document.createElement("ul");
  meta.className = "treat-meta";
  meta.innerHTML =
    '<li class="treat-meta-item">' +
      '<svg class="treat-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>' +
      '<span class="treat-duration"></span>' +
    "</li>" +
    '<li class="treat-meta-item">' +
      '<svg class="treat-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/></svg>' +
      '<span class="treat-fee"></span>' +
    "</li>";
  meta.querySelector(".treat-duration").textContent = t.duration;
  meta.querySelector(".treat-fee").textContent =
    "Illustrative estimate: PKR " + formatPKR(t.feeMin) + " - " + formatPKR(t.feeMax);

  const link = document.createElement("a");
  link.className = "treat-link";
  link.href = "book.html?treatment=" + encodeURIComponent(t.id);
  link.innerHTML = 'Prepare for a consultation <span class="sr-only"></span><span aria-hidden="true">&rarr;</span>';
  link.setAttribute("aria-label", "Prepare to discuss " + t.name + " with a dentist");

  body.appendChild(name);
  body.appendChild(desc);
  body.appendChild(meta);
  body.appendChild(link);

  card.appendChild(media);
  card.appendChild(body);
  return card;
}

function renderFeaturedTreatments() {
  const grid = document.getElementById("treat-grid");
  if (!grid) return;
  if (typeof treatments === "undefined") return; // data.js did not load

  const frag = document.createDocumentFragment();
  treatments.slice(0, 6).forEach(function (t) {
    frag.appendChild(createTreatmentCard(t));
  });
  grid.appendChild(frag);
}

function renderTreatmentDirectory() {
  const grid = document.getElementById("service-treatment-grid");
  if (!grid || typeof treatments === "undefined") return;

  const filters = document.getElementById("service-treatment-filters");
  const status = document.getElementById("service-filter-status");
  const frag = document.createDocumentFragment();
  treatments.forEach(function (treatment) {
    frag.appendChild(createTreatmentCard(treatment));
  });
  grid.appendChild(frag);

  if (!filters) return;

  const categories = Array.from(new Set(treatments.map(function (treatment) {
    return treatment.category;
  }))).sort();
  const filterOptions = ["All treatments"].concat(categories);

  filterOptions.forEach(function (category, index) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "service-hero-filter";
    button.textContent = category;
    button.setAttribute("aria-pressed", index === 0 ? "true" : "false");
    button.addEventListener("click", function () {
      const showAll = index === 0;
      let visibleCount = 0;
      Array.from(grid.children).forEach(function (card) {
        const isVisible = showAll || card.dataset.category === category;
        card.hidden = !isVisible;
        if (isVisible) visibleCount += 1;
      });

      Array.from(filters.querySelectorAll("button")).forEach(function (filter) {
        filter.setAttribute("aria-pressed", filter === button ? "true" : "false");
      });

      if (status) {
        status.textContent = showAll
          ? "Showing all " + visibleCount + " treatment options."
          : "Showing " + visibleCount + " " + category.toLowerCase() + " treatment " +
            (visibleCount === 1 ? "option." : "options.");
      }
    });
    filters.appendChild(button);
  });

  if (status) status.textContent = "Showing all " + treatments.length + " treatment options.";
}

document.addEventListener("DOMContentLoaded", renderFeaturedTreatments);
document.addEventListener("DOMContentLoaded", renderTreatmentDirectory);
// Uses formatPKR() from Section 4.

// Dentist profiles, fees, and timings are illustrative and must be verified before use.

function createDentistCard(d) {
  const card = document.createElement("article");
  card.className = "dent-card";

  // Photo with a fallback avatar showing the provider's initial.
  const photoWrap = document.createElement("div");
  photoWrap.className = "dent-photo-wrap";
  const avatar = document.createElement("span");
  avatar.className = "dent-avatar";
  avatar.setAttribute("aria-hidden", "true");
  const nameParts = d.name.replace(/^Dr\.?\s*/i, "").trim();
  avatar.textContent = (nameParts.charAt(0) || "D").toUpperCase();
  photoWrap.appendChild(avatar);

  if (d.photo) {
    const img = document.createElement("img");
    img.className = "dent-photo";
    img.src = d.photo;
    img.alt = "Illustrative profile photo of " + d.name;
    img.loading = "lazy";
    img.addEventListener("error", function () { img.remove(); });
    photoWrap.appendChild(img);
  }

  const name = document.createElement("h3");
  name.className = "dent-name";
  name.textContent = d.name;

  const spec = document.createElement("p");
  spec.className = "dent-specialty";
  spec.textContent = d.specialty;

  const info = document.createElement("ul");
  info.className = "dent-info";
  const rows = [
    d.experience + " years experience",
    d.city + (d.area ? " - " + d.area : ""),
    "Illustrative fee: PKR " + formatPKR(d.feeMin) + " - " + formatPKR(d.feeMax),
    "Timings: " + d.timings
  ];
  rows.forEach(function (text, i) {
    const li = document.createElement("li");
    if (i === 2) li.className = "dent-fee";
    li.textContent = text;
    info.appendChild(li);
  });

  const actions = document.createElement("div");
  actions.className = "dent-actions";

  const view = document.createElement("a");
  view.className = "dent-btn dent-btn-outline";
  view.href = "doctor.html?id=" + encodeURIComponent(d.id);
  view.textContent = "View Profile";
  view.setAttribute("aria-label", "View profile of " + d.name);

  const book = document.createElement("a");
  book.className = "dent-btn dent-btn-book";
  book.href = "book.html?doctor=" + encodeURIComponent(d.id);
  book.textContent = "Prepare";
  book.setAttribute("aria-label", "Prepare a local appointment summary with the unverified profile for " + d.name);

  actions.appendChild(view);
  actions.appendChild(book);

  card.appendChild(photoWrap);
  card.appendChild(name);
  card.appendChild(spec);
  card.appendChild(info);
  card.appendChild(actions);
  return card;
}

function renderDentistPreviews() {
  const grid = document.getElementById("dent-grid");
  if (!grid) return;
  if (typeof doctors === "undefined") return; // data.js did not load

  const frag = document.createDocumentFragment();
  doctors.slice(0, 4).forEach(function (d) {
    frag.appendChild(createDentistCard(d));
  });
  grid.appendChild(frag);
}

document.addEventListener("DOMContentLoaded", renderDentistPreviews);

// General SmileCare FAQs.
// topic: "booking" shows on book.html; general FAQs show on contact.html.
const siteFaqs = [
  { topic: "booking", question: "How does the appointment form work?", answer: "Complete the form to prepare a summary of your preferences. It does not send or store your details, so the clinic will not receive your request." },
  { topic: "booking", question: "Is an appointment confirmed when I submit the form?", answer: "No. The form only creates a summary on this page. Contact a clinic directly to request and confirm an appointment." },
  { topic: "booking", question: "Do I need to choose a dentist or treatment?", answer: "No. You can leave either selection as “Not sure yet.” The form can help organize your preferences, but it does not contact a clinic. A dentist can advise on treatment after an examination." },
  { topic: "booking", question: "Can I change or cancel an appointment using this form?", answer: "No. This form does not send or save requests. For an appointment arranged directly with a clinic, contact that clinic to change or cancel it." },
  { topic: "booking", question: "What happens to my contact details and health information?", answer: "Nothing is sent or saved by this form. Please do not enter personal or sensitive medical details. Read our Privacy Policy for more information." },
  { topic: "general", question: "Are the fees shown on this website fixed?", answer: "No. Fees shown here are illustrative estimates, not clinic prices. A licensed dentist can confirm current costs after assessing your needs." },
  { topic: "general", question: "How do I know which treatment I need?", answer: "Treatment pages give general information only and are not a diagnosis. A dentist needs to examine you to recommend the right treatment." },
  { topic: "general", question: "Can I plan a visit for a child?", answer: "Yes. Choose \"My child\" in the form to organize your preferences. A pediatric dentist may be a good fit for young children, but this form does not contact a clinic." },
  { topic: "general", question: "What should I do in a dental emergency?", answer: "Read the emergency guidance on this page. For swelling that affects breathing or swallowing, or a serious injury, seek urgent medical help immediately." },
  { topic: "general", question: "How is my personal information used?", answer: "Forms do not send or store the information entered. Please do not provide personal or sensitive medical details." }
];

/* ---------- Shared form helpers ---------- */
function showFieldError(input, message) {
  const err = document.getElementById(input.id + "-err");
  input.setAttribute("aria-invalid", "true");
  if (err) { err.textContent = message; err.hidden = false; }
}
function clearFieldError(input) {
  const err = document.getElementById(input.id + "-err");
  input.removeAttribute("aria-invalid");
  if (err) { err.textContent = ""; err.hidden = true; }
}
function isValidPhone(value) {
  const s = value.replace(/[\s\-()]/g, "");
  return /^(?:\+92|0092|92|0)?3\d{9}$/.test(s) || /^0\d{9,10}$/.test(s);
}
function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function renderSiteFaqs(containerId, topic) {
  const box = document.getElementById(containerId);
  if (!box) return;
  siteFaqs.filter(function (f) { return !topic || f.topic === topic; }).forEach(function (f) {
    const d = document.createElement("details");
    d.className = "tdet-faq";
    const sum = document.createElement("summary");
    sum.textContent = f.question;
    const ans = document.createElement("div");
    ans.className = "tdet-faq-answer";
    const p = document.createElement("p");
    p.textContent = f.answer;
    ans.appendChild(p);
    d.appendChild(sum);
    d.appendChild(ans);
    box.appendChild(d);
  });
}

/* ---------- Booking page ---------- */
function initBookingPage() {
  const form = document.getElementById("book-form");
  if (!form || typeof treatments === "undefined" || typeof doctors === "undefined") return;

  const treatEl = document.getElementById("book-treatment");
  const cityEl = document.getElementById("book-city");
  const docEl = document.getElementById("book-doctor");
  const dateEl = document.getElementById("book-date");
  const timeEl = document.getElementById("book-time");
  const forEl = document.getElementById("book-for");
  const nameEl = document.getElementById("book-name");
  const phoneEl = document.getElementById("book-phone");
  const emailEl = document.getElementById("book-email");
  const notesEl = document.getElementById("book-notes");
  const consentEl = document.getElementById("book-consent");
  const summaryEl = document.getElementById("book-summary");
  const successEl = document.getElementById("book-success");

  function findTreatment(v) { return treatments.find(function (t) { return String(t.id) === String(v); }); }
  function findDoctor(v) { return doctors.find(function (d) { return String(d.id) === String(v); }); }
  function pad(n) { return n < 10 ? "0" + n : String(n); }

  // Dropdowns from the illustrative data in data.js.
  treatments.forEach(function (t) {
    const o = document.createElement("option");
    o.value = t.id; o.textContent = t.name;
    treatEl.appendChild(o);
  });
  const cities = [];
  doctors.forEach(function (d) { if (cities.indexOf(d.city) === -1) cities.push(d.city); });
  cities.forEach(function (c) {
    const o = document.createElement("option");
    o.value = c; o.textContent = c;
    cityEl.appendChild(o);
  });

  function rebuildDoctorOptions() {
    const city = cityEl.value;
    const keep = docEl.value;
    docEl.innerHTML = "";
    const first = document.createElement("option");
    first.value = ""; first.textContent = "Not sure yet - help me choose";
    docEl.appendChild(first);
    doctors.filter(function (d) { return !city || d.city === city; }).forEach(function (d) {
      const o = document.createElement("option");
      o.value = d.id;
      o.textContent = d.name + " - " + d.specialty + " (" + d.city + ")";
      docEl.appendChild(o);
    });
    if (keep && findDoctor(keep) && (!city || findDoctor(keep).city === city)) docEl.value = keep;
  }

  // Earliest date = today
  const now = new Date();
  const todayIso = now.getFullYear() + "-" + pad(now.getMonth() + 1) + "-" + pad(now.getDate());
  dateEl.min = todayIso;

  function prettyDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  }

  // Live summary card
  function addBlock(label, lines, strongFirst) {
    const wrap = document.createElement("div");
    wrap.className = "book-summary-block";
    const l = document.createElement("p");
    l.className = "book-summary-label";
    l.textContent = label;
    wrap.appendChild(l);
    lines.forEach(function (text, i) {
      const p = document.createElement("p");
      p.className = "book-summary-line" + (strongFirst && i === 0 ? " book-summary-strong" : "");
      p.textContent = text;
      wrap.appendChild(p);
    });
    summaryEl.appendChild(wrap);
  }

  function updateSummary() {
    const t = findTreatment(treatEl.value);
    const d = findDoctor(docEl.value);
    summaryEl.innerHTML = "";
    const h = document.createElement("h2");
    h.className = "book-summary-title";
    h.textContent = "Your selection";
    summaryEl.appendChild(h);

    if (!t && !d && !dateEl.value) {
      const p = document.createElement("p");
      p.className = "book-summary-empty";
      p.textContent = "Your choices will appear here as you fill in the form.";
      summaryEl.appendChild(p);
      return;
    }
    if (t) addBlock("Treatment", [t.name, t.duration, "Illustrative fee: PKR " + formatPKR(t.feeMin) + " - " + formatPKR(t.feeMax)], true);
    if (d) addBlock("Dentist (unverified profile)", [
      d.name, d.specialty, d.clinicName + ", " + d.area + ", " + d.city,
      "Timings: " + d.timings, "Days: " + d.daysAvailable.join(", "),
      "Illustrative fee: PKR " + formatPKR(d.feeMin) + " - " + formatPKR(d.feeMax)
    ], true);
    if (dateEl.value || timeEl.value) {
      addBlock("Preferred slot", [dateEl.value ? prettyDate(dateEl.value) : "Date not chosen", timeEl.value || "Time not chosen"], true);
    }
    // Soft notes (not errors)
    const notes = [];
    if (t && d && d.treatments.indexOf(t.id) === -1) notes.push("This unverified profile does not list this treatment. Ask a licensed clinic directly about availability.");
    if (forEl.value === "My child" && d && d.specialty !== "Pediatric Dentist") notes.push("For young children, a Pediatric Dentist may be a good fit.");
    notes.forEach(function (n) {
      const p = document.createElement("p");
      p.className = "book-summary-warn";
      p.textContent = n;
      summaryEl.appendChild(p);
    });
  }

  // Events
  cityEl.addEventListener("change", function () { rebuildDoctorOptions(); updateSummary(); });
  docEl.addEventListener("change", function () {
    const d = findDoctor(docEl.value);
    if (d) { cityEl.value = d.city; rebuildDoctorOptions(); docEl.value = d.id; }
    clearFieldError(dateEl);
    updateSummary();
  });
  [treatEl, timeEl, forEl, dateEl].forEach(function (el) { el.addEventListener("change", updateSummary); });
  [dateEl, timeEl, nameEl, phoneEl, emailEl, consentEl].forEach(function (el) {
    el.addEventListener("input", function () { clearFieldError(el); });
    el.addEventListener("change", function () { clearFieldError(el); });
  });

  // Prefill from links: book.html?doctor=ID&treatment=ID (both optional)
  rebuildDoctorOptions();
  const preTreat = findTreatment(getQueryParam("treatment"));
  const preDoc = findDoctor(getQueryParam("doctor"));
  if (preTreat) treatEl.value = preTreat.id;
  if (preDoc) { cityEl.value = preDoc.city; rebuildDoctorOptions(); docEl.value = preDoc.id; }
  updateSummary();

  // Validation
  function validate() {
    let firstBad = null;
    function bad(el, msg) { showFieldError(el, msg); if (!firstBad) firstBad = el; }
    [dateEl, timeEl, nameEl, phoneEl, emailEl, consentEl].forEach(clearFieldError);

    if (!dateEl.value) bad(dateEl, "Please choose a preferred date.");
    else if (dateEl.value < todayIso) bad(dateEl, "Please choose today or a future date.");
    // Provider schedules are unverified; the selected date is only a preference.
    if (!timeEl.value) bad(timeEl, "Please choose a preferred time.");
    if (nameEl.value.trim().length < 2) bad(nameEl, "Please enter the patient's full name.");
    if (!phoneEl.value.trim()) bad(phoneEl, "Please enter a mobile number.");
    else if (!isValidPhone(phoneEl.value)) bad(phoneEl, "Enter a valid number, for example 0300 1234567.");
    if (emailEl.value.trim() && !isValidEmail(emailEl.value.trim())) bad(emailEl, "Enter a valid email address or leave it empty.");
    if (!consentEl.checked) bad(consentEl, "Please agree to continue.");

    if (firstBad) firstBad.focus();
    return !firstBad;
  }

  function showSuccess() {
    const t = findTreatment(treatEl.value);
    const d = findDoctor(docEl.value);
    const ref = "SC-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    document.getElementById("book-ref").textContent = ref;

    const rows = [
      ["Patient", nameEl.value.trim() + " (" + forEl.value + ")"],
      ["Mobile", phoneEl.value.trim()],
      ["Preferred date", prettyDate(dateEl.value)],
      ["Preferred time", timeEl.value],
      ["Treatment", t ? t.name : "Not sure yet"],
      ["Dentist", d ? d.name + " (unverified profile)" : "Not selected"]
    ];
    const list = document.getElementById("book-success-list");
    list.innerHTML = "";
    rows.forEach(function (r) {
      const row = document.createElement("div");
      row.className = "book-success-row";
      const dt = document.createElement("dt"); dt.textContent = r[0];
      const dd = document.createElement("dd"); dd.textContent = r[1];
      row.appendChild(dt); row.appendChild(dd);
      list.appendChild(row);
    });

    form.hidden = true;
    successEl.hidden = false;
    const title = document.getElementById("book-success-title");
    successEl.scrollIntoView({ behavior: "smooth", block: "start" });
    if (title) title.focus({ preventScroll: true });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (validate()) showSuccess();
  });

  document.getElementById("book-print").addEventListener("click", function () { window.print(); });
  document.getElementById("book-again").addEventListener("click", function () {
    form.reset();
    cityEl.value = "";
    rebuildDoctorOptions();
    updateSummary();
    successEl.hidden = true;
    form.hidden = false;
    treatEl.focus();
  });

  renderSiteFaqs("book-faqs", "booking");
}

/* ---------- Contact page ---------- */
function initContactPage() {
  const locGrid = document.getElementById("cont-loc-grid");
  const contForm = document.getElementById("cont-form");
  if (!locGrid || !contForm || typeof doctors === "undefined") return;

  // Location cards grouped by city from the unverified doctor records.
  const byCity = {};
  const order = [];
  doctors.forEach(function (d) {
    if (!byCity[d.city]) { byCity[d.city] = []; order.push(d.city); }
    byCity[d.city].push(d);
  });
  order.forEach(function (city) {
    const list = byCity[city];
    const card = document.createElement("article");
    card.className = "cont-loc-card";

    const h = document.createElement("h3");
    h.className = "cont-loc-city";
    h.textContent = city;
    const count = document.createElement("p");
    count.className = "cont-loc-count";
    count.textContent = list.length + (list.length === 1 ? " listed dentist" : " listed dentists");

    const ul = document.createElement("ul");
    ul.className = "cont-loc-list";
    list.forEach(function (d) {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = d.clinicName;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(d.area + ", " + d.city + " · illustrative area only"));
      ul.appendChild(li);
    });

    const a = document.createElement("a");
    a.className = "cont-loc-link";
    a.href = "doctors.html?city=" + encodeURIComponent(city);
    a.textContent = "View dentists in " + city;

    card.appendChild(h);
    card.appendChild(count);
    card.appendChild(ul);
    card.appendChild(a);
    locGrid.appendChild(card);
  });

  // Message form
  const nameEl = document.getElementById("cont-name");
  const emailEl = document.getElementById("cont-email-input");
  const phoneEl = document.getElementById("cont-phone-input");
  const msgEl = document.getElementById("cont-message");
  const success = document.getElementById("cont-success");
  [nameEl, emailEl, phoneEl, msgEl].forEach(function (el) {
    el.addEventListener("input", function () { clearFieldError(el); });
  });

  contForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let firstBad = null;
    function bad(el, msg) { showFieldError(el, msg); if (!firstBad) firstBad = el; }
    [nameEl, emailEl, phoneEl, msgEl].forEach(clearFieldError);

    if (nameEl.value.trim().length < 2) bad(nameEl, "Please enter your name.");
    if (!emailEl.value.trim()) bad(emailEl, "Please enter your email.");
    else if (!isValidEmail(emailEl.value.trim())) bad(emailEl, "Enter a valid email address.");
    if (phoneEl.value.trim() && !isValidPhone(phoneEl.value)) bad(phoneEl, "Enter a valid number or leave it empty.");
    if (msgEl.value.trim().length < 10) bad(msgEl, "Please write a short message (at least 10 characters).");

    if (firstBad) { firstBad.focus(); return; }
    contForm.hidden = true;
    success.hidden = false;
    const title = document.getElementById("cont-success-title");
    if (title) title.focus();
  });

  document.getElementById("cont-again").addEventListener("click", function () {
    contForm.reset();
    success.hidden = true;
    contForm.hidden = false;
    nameEl.focus();
  });

  renderSiteFaqs("cont-faqs", "general");
}

document.addEventListener("DOMContentLoaded", initBookingPage);
document.addEventListener("DOMContentLoaded", initContactPage);

/* ---------- Dentist directory and individual profiles ---------- */
function renderDoctorDirectory() {
  const grid = document.getElementById("doctor-directory-grid");
  if (!grid || typeof doctors === "undefined") return;

  const search = document.getElementById("doctor-directory-search");
  const citySelect = document.getElementById("doctor-directory-city");
  const specialtySelect = document.getElementById("doctor-directory-specialty");
  const count = document.getElementById("doctor-directory-count");
  const empty = document.getElementById("doctor-directory-empty");
  const params = new URLSearchParams(window.location.search);
  const selectedCity = params.get("city") || "";
  const problemId = params.get("problem") || "";
  const selectedProblem = typeof problems === "undefined"
    ? null
    : problems.find(function (problem) { return problem.id === problemId; });

  const cities = Array.from(new Set(doctors.map(function (doctor) { return doctor.city; })));
  const specialties = Array.from(new Set(doctors.map(function (doctor) { return doctor.specialty; })));
  cities.forEach(function (city) {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
  });
  specialties.forEach(function (specialty) {
    const option = document.createElement("option");
    option.value = specialty;
    option.textContent = specialty;
    specialtySelect.appendChild(option);
  });
  if (cities.indexOf(selectedCity) !== -1) citySelect.value = selectedCity;

  function render() {
    const query = search.value.trim().toLowerCase();
    const selectedSpecialty = specialtySelect.value;
    const selectedLocation = citySelect.value;
    const matches = doctors.filter(function (doctor) {
      const searchable = [doctor.name, doctor.specialty, doctor.city, doctor.area, doctor.clinicName].join(" ").toLowerCase();
      const matchesProblem = !selectedProblem ||
        doctor.specialty === selectedProblem.specialty ||
        doctor.treatments.some(function (id) { return selectedProblem.possibleTreatments.indexOf(id) !== -1; });
      return searchable.includes(query) &&
        (!selectedLocation || doctor.city === selectedLocation) &&
        (!selectedSpecialty || doctor.specialty === selectedSpecialty) &&
        matchesProblem;
    });

    grid.innerHTML = "";
    matches.forEach(function (doctor) {
      const card = document.createElement("article");
      card.className = "directory-card";

      const avatar = document.createElement("div");
      avatar.className = "directory-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = doctor.name.replace(/^Dr\.?\s*/i, "").charAt(0).toUpperCase();

      const details = document.createElement("div");
      details.className = "directory-details";
      const specialty = document.createElement("p");
      specialty.className = "directory-specialty";
      specialty.textContent = doctor.specialty;
      const name = document.createElement("h2");
      name.textContent = doctor.name;
      const meta = document.createElement("p");
      meta.textContent = doctor.city + " · " + doctor.area + " · " + doctor.experience + " years' experience";
      const profileNote = document.createElement("p");
      profileNote.className = "directory-note";
      profileNote.textContent = "Unverified profile · Illustrative fee PKR " +
        formatPKR(doctor.feeMin) + "–" + formatPKR(doctor.feeMax);
      details.appendChild(specialty);
      details.appendChild(name);
      details.appendChild(meta);
      details.appendChild(profileNote);

      const actions = document.createElement("div");
      actions.className = "directory-actions";
      const profile = document.createElement("a");
      profile.className = "hero-btn hero-btn-outline directory-profile-link";
      profile.href = "doctor.html?id=" + encodeURIComponent(doctor.id);
      profile.textContent = "View profile";
      const book = document.createElement("a");
      book.className = "hero-btn hero-btn-primary";
      book.href = "book.html?doctor=" + encodeURIComponent(doctor.id);
      book.textContent = "Prepare summary";
      book.setAttribute("aria-label", "Prepare a local summary with the unverified profile for " + doctor.name);
      actions.appendChild(profile);
      actions.appendChild(book);
      card.appendChild(avatar);
      card.appendChild(details);
      card.appendChild(actions);
      grid.appendChild(card);
    });

    count.textContent = "Showing " + matches.length + (matches.length === 1 ? " dentist profile" : " dentist profiles");
    empty.hidden = matches.length > 0;
  }

  [search, citySelect, specialtySelect].forEach(function (control) {
    control.addEventListener("input", render);
    control.addEventListener("change", render);
  });
  render();
}

function renderDoctorProfile() {
  const mount = document.getElementById("doctor-profile");
  if (!mount || typeof doctors === "undefined") return;

  const doctorId = getQueryParam("id");
  const doctor = doctors.find(function (item) { return String(item.id) === doctorId; });
  if (!doctor) {
    const heading = document.createElement("h1");
    heading.textContent = "Dentist profile not found";
    const message = document.createElement("p");
    message.className = "profile-not-found";
    message.textContent = "That profile is unavailable. Browse the directory to choose another.";
    mount.appendChild(heading);
    mount.appendChild(message);
    return;
  }

  const avatar = document.createElement("div");
  avatar.className = "profile-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = doctor.name.replace(/^Dr\.?\s*/i, "").charAt(0).toUpperCase();

  const heading = document.createElement("div");
  heading.className = "profile-heading";
  const eyebrow = document.createElement("p");
  eyebrow.className = "directory-specialty";
  eyebrow.textContent = doctor.specialty + " · Unverified profile";
  const name = document.createElement("h1");
  name.textContent = doctor.name;
  const place = document.createElement("p");
  place.textContent = doctor.clinicName + " · " + doctor.city;
  heading.appendChild(eyebrow);
  heading.appendChild(name);
  heading.appendChild(place);

  const summary = document.createElement("section");
  summary.className = "profile-summary";
  const summaryTitle = document.createElement("h2");
  summaryTitle.textContent = "Profile";
  const details = [
    ["Experience", doctor.experience + " years"],
    ["Location", doctor.clinicAddress],
    ["Consultation fee", "Illustrative range: PKR " + formatPKR(doctor.feeMin) + "–" + formatPKR(doctor.feeMax)],
    ["Hours", doctor.timings + " · " + doctor.daysAvailable.join(", ")],
    ["Languages", doctor.languages.join(", ")]
  ];
  summary.appendChild(summaryTitle);
  details.forEach(function (item) {
    const row = document.createElement("p");
    const label = document.createElement("strong");
    label.textContent = item[0] + ": ";
    row.appendChild(label);
    row.appendChild(document.createTextNode(item[1]));
    summary.appendChild(row);
  });

  const treatmentsSection = document.createElement("section");
  treatmentsSection.className = "profile-summary";
  const treatmentsTitle = document.createElement("h2");
  treatmentsTitle.textContent = "Treatments";
  const treatmentsText = document.createElement("p");
  const offered = treatments.filter(function (treatment) {
    return doctor.treatments.indexOf(treatment.id) !== -1;
  });
  treatmentsText.textContent = offered.map(function (treatment) { return treatment.name; }).join(", ") ||
    "No treatments are listed for this profile.";
  treatmentsSection.appendChild(treatmentsTitle);
  treatmentsSection.appendChild(treatmentsText);

  const actions = document.createElement("div");
  actions.className = "profile-actions";
  const book = document.createElement("a");
  book.className = "hero-btn hero-btn-primary";
  book.href = "book.html?doctor=" + encodeURIComponent(doctor.id);
  book.textContent = "Prepare appointment summary";
  book.setAttribute("aria-label", "Prepare a local appointment summary with the unverified profile for " + doctor.name);
  const back = document.createElement("a");
  back.className = "hero-btn hero-btn-outline profile-back-link";
  back.href = "doctors.html";
  back.textContent = "Back to all dentists";
  actions.appendChild(book);
  actions.appendChild(back);

  const card = document.createElement("article");
  card.className = "doctor-profile-card";
  card.appendChild(avatar);
  card.appendChild(heading);
  card.appendChild(summary);
  card.appendChild(treatmentsSection);
  card.appendChild(actions);
  mount.appendChild(card);
}

document.addEventListener("DOMContentLoaded", renderDoctorDirectory);
document.addEventListener("DOMContentLoaded", renderDoctorProfile);