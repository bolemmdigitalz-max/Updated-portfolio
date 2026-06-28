/* ============================================================
   BOLUDEVS PORTFOLIO — script.js
   Converted from React/TypeScript to Vanilla JavaScript
   ============================================================ */

// === DATA ===
const CATEGORIES = [
  "All",
  "Website Design",
  "Google Maps Listings",
  "Social Media Advertising",
  "Graphic Design"
];

const CONTACTS = {
  whatsapp: ["09041490874", "09033372448"],
  call: ["09115327236"]
};

const PROJECTS = [
  {
    id: 1, title: "Corporate Business Website", category: "Website Design",
    description: "A clean, conversion-focused corporate website built for a growing service company to establish a credible online presence.",
    services: ["UI/UX Design", "Responsive Build", "Landing Page"],
    image: "https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  },
  {
    id: 2, title: "E-Commerce Landing Page", category: "Website Design",
    description: "High-converting product landing page designed to drive leads and online sales for a retail brand.",
    services: ["Landing Page", "Lead Generation", "Mobile First"],
    image: "https://images.pexels.com/photos/7191162/pexels-photo-7191162.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  },
  {
    id: 3, title: "Startup Portfolio Site", category: "Website Design",
    description: "A modern portfolio website that showcases a startup's products with smooth animations and a premium feel.",
    services: ["Web Design", "Animation", "SEO Setup"],
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 4, title: "Restaurant Google Profile", category: "Google Maps Listings",
    description: "Created and optimized a Google Business Profile that boosted a restaurant's local search rankings and foot traffic.",
    services: ["Profile Setup", "Local SEO", "Optimization"],
    image: "https://images.pexels.com/photos/5921677/pexels-photo-5921677.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  },
  {
    id: 5, title: "Local Store Map Listing", category: "Google Maps Listings",
    description: "Verified and optimized a retail store's map listing to attract more nearby customers searching online.",
    services: ["Map Verification", "Local Visibility", "Reviews"],
    image: "https://images.pexels.com/photos/5448160/pexels-photo-5448160.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 6, title: "Service Business Listing", category: "Google Maps Listings",
    description: "Optimized a service provider's Google profile with accurate info, photos and categories for stronger local reach.",
    services: ["Profile Setup", "Citations", "Local SEO"],
    image: "https://images.pexels.com/photos/5444631/pexels-photo-5444631.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 7, title: "Brand Awareness Campaign", category: "Social Media Advertising",
    description: "Planned and managed a multi-platform ad campaign that grew brand awareness and audience engagement.",
    services: ["Ad Strategy", "Campaign Mgmt", "Targeting"],
    image: "https://images.pexels.com/photos/15635241/pexels-photo-15635241.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  },
  {
    id: 8, title: "Lead Generation Ads", category: "Social Media Advertising",
    description: "Designed and ran targeted lead-generation ads delivering qualified prospects at a strong return on ad spend.",
    services: ["Meta Ads", "Analytics", "A/B Testing"],
    image: "https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 9, title: "Content Marketing Plan", category: "Social Media Advertising",
    description: "Built a consistent content marketing calendar that increased reach and customer engagement over time.",
    services: ["Content Plan", "Scheduling", "Engagement"],
    image: "https://images.pexels.com/photos/6956303/pexels-photo-6956303.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 10, title: "Complete Brand Identity", category: "Graphic Design",
    description: "Developed a cohesive brand identity including logo, colour palette and visual guidelines for a new business.",
    services: ["Logo Design", "Brand Kit", "Guidelines"],
    image: "https://images.pexels.com/photos/8546649/pexels-photo-8546649.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  },
  {
    id: 11, title: "Social Media Graphics", category: "Graphic Design",
    description: "Created a set of eye-catching social media templates and promotional graphics to keep branding consistent.",
    services: ["Social Templates", "Promo Graphics", "Branding"],
    image: "https://images.pexels.com/photos/15569284/pexels-photo-15569284.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: false
  },
  {
    id: 12, title: "Logo & Marketing Assets", category: "Graphic Design",
    description: "Designed a memorable logo and a suite of marketing materials including flyers and business cards.",
    services: ["Logo Design", "Print Assets", "Flyers"],
    image: "https://images.pexels.com/photos/17845/pexels-photo.jpg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    featured: true
  }
];

// === SVG ICONS ===
const ICONS = {
  arrowRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  arrowUp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  star: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>`,
  starLg: `<svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" aria-hidden="true"><path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z"/></svg>`,
  whatsapp: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.82 9.82 0 001.516 5.26l-.999 3.648 3.972-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>`,
  phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>`
};

// === HELPERS ===
const NAV_IDS = ['home','about','experience','tools','skills','projects','contact'];

function goTo(id) {
  closeMobileMenu();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToTopFn() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function waLink(num) {
  const intl = '234' + num.replace(/^0/, '');
  const msg = encodeURIComponent("Hello Osiberu, I'd like to discuss a project with you.");
  return `https://wa.me/${intl}?text=${msg}`;
}

// === NAVBAR ===
const navbar     = document.getElementById('navbar');
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

function closeMobileMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  mobileMenu.classList.remove('open');
  hamburger.innerHTML = ICONS.menu;
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle('open', menuOpen);
  hamburger.innerHTML = menuOpen ? ICONS.close : ICONS.menu;
  hamburger.setAttribute('aria-expanded', String(menuOpen));
});

// Scroll: navbar shadow + active link
window.addEventListener('scroll', () => {
  // Navbar shadow
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active section detection
  const offset = window.scrollY + 120;
  let current = 'home';
  for (const id of NAV_IDS) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= offset) current = id;
  }
  document.querySelectorAll('[data-section]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === current);
  });

  // Back to top
  document.getElementById('back-to-top').classList.toggle('visible', window.scrollY > 600);
}, { passive: true });

// === SCROLL REVEAL ===
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

// === FOOTER YEAR ===
document.getElementById('footer-copy').textContent =
  `© ${new Date().getFullYear()} Osiberu Boluwatife. All rights reserved.`;

// === PROJECT CARD ===
function projectCardHTML(project, featured = false) {
  const tags = project.services
    .map(s => `<span class="project-tag">${s}</span>`)
    .join('');
  const featuredBadge = featured
    ? `<span class="project-feat-badge">${ICONS.star} Featured</span>`
    : '';
  return `
    <article class="project-card">
      <div class="project-img-wrap">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <span class="project-cat-badge">${project.category}</span>
        ${featuredBadge}
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">${tags}</div>
        <button class="project-btn" onclick="goTo('contact')">
          View Project ${ICONS.arrowRight}
        </button>
      </div>
    </article>`;
}

// === RENDER FEATURED ===
function renderFeatured() {
  const grid = document.getElementById('featured-grid');
  grid.innerHTML = PROJECTS
    .filter(p => p.featured)
    .map(p => projectCardHTML(p, true))
    .join('');
}

// === PROJECTS FILTER & SEARCH ===
let activeFilter = 'All';

function renderFilterButtons() {
  const container = document.getElementById('filter-buttons');
  container.innerHTML = CATEGORIES.map(cat => `
    <button class="filter-btn${cat === activeFilter ? ' active' : ''}" data-cat="${cat}">
      ${cat}
    </button>`).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.cat;
      renderFilterButtons();
      renderProjects();
    });
  });
}

function renderProjects() {
  const query = document.getElementById('project-search').value.trim().toLowerCase();
  const grid  = document.getElementById('projects-grid');
  const empty = document.getElementById('projects-empty');

  const filtered = PROJECTS.filter(p => {
    const matchCat   = activeFilter === 'All' || p.category === activeFilter;
    const matchQuery = !query ||
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.services.some(s => s.toLowerCase().includes(query));
    return matchCat && matchQuery;
  });

  if (filtered.length > 0) {
    grid.style.display  = 'grid';
    empty.style.display = 'none';
    grid.innerHTML = filtered.map(p => projectCardHTML(p)).join('');
  } else {
    grid.style.display  = 'none';
    empty.style.display = 'block';
  }
}

document.getElementById('project-search')
  .addEventListener('input', renderProjects);

// === RENDER CONTACT CARDS ===
function renderContact() {
  const grid = document.getElementById('contact-grid');

  const waCards = CONTACTS.whatsapp.map((num, i) => `
    <div class="contact-card reveal">
      <span class="contact-icon wa">${ICONS.whatsapp}</span>
      <p class="contact-label">WhatsApp${CONTACTS.whatsapp.length > 1 ? ' ' + (i + 1) : ''}</p>
      <p class="contact-num">${num}</p>
      <a href="${waLink(num)}" target="_blank" rel="noopener noreferrer" class="contact-btn wa">
        ${ICONS.whatsapp} Chat on WhatsApp
      </a>
    </div>`).join('');

  const callCards = CONTACTS.call.map(num => `
    <div class="contact-card reveal">
      <span class="contact-icon phone">${ICONS.phone}</span>
      <p class="contact-label">Call</p>
      <p class="contact-num">${num}</p>
      <a href="tel:${num}" class="contact-btn phone">
        ${ICONS.phone} Call Now
      </a>
    </div>`).join('');

  grid.innerHTML = waCards + callCards;
}

// === INIT ===
renderFeatured();
renderFilterButtons();
renderProjects();
renderContact();
initReveal();
