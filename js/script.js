// ============================================
// TM MEDIA CAFE — Data & Rendering Logic
// ============================================

const TMMC = {
  // ── Services (Home Page) ──────────────────
  services: [
    { icon: "📋", title: "Pamphlets & Flyers", desc: "Eye-catching print designs that make your cafe impossible to miss on every table and counter.", link: "pamphlets.html" },
    { icon: "📱", title: "Instagram Posts", desc: "Scroll-stopping social media visuals, reels covers & story templates for your cafe brand.", link: "insta.html" },
    { icon: "✍️", title: "Content Writing", desc: "From menu descriptions to blog posts — words that make people hungry and thirsty for more.", link: "content.html" },
    { icon: "📖", title: "Menu Cards", desc: "Beautifully crafted menu designs — from classic to modern — that increase your average order value.", link: "menu-cards.html" },
    { icon: "🎨", Title: "Color Combinations", desc: "Expertly curated color palettes for your cafe branding, walls, furniture & marketing.", link: "color-combo.html" },
    { icon: "👗", Title: "Staff Dress Colors", desc: "Uniform color schemes that reflect your brand identity and make your team look sharp.", link: "staff-dress.html" },
    { icon: "🏠", title: "Interior Design", desc: "Complete interior concepts — seating, lighting, wall art & ambiance planning.", link: "interior.html" },
    { icon: "🏗️", title: "Full Cafe Setup", desc: "Everything you need to open your dream cafe — equipment, furniture, licenses & more.", link: "facilities.html" },
  ],

  // ── Pamphlet / Flyer Templates ────────────
  pamphlets: [
    { title: "Classic Coffee Flyer", desc: "Warm brown tones with vintage coffee illustrations. Perfect for daily specials and seasonal drinks.", tag: "Print", gradient: "linear-gradient(135deg, #5C3D2E, #C19A6B)" },
    { title: "Modern Minimal Flyer", desc: "Clean lines, bold typography, and cream background. Ideal for artisan coffee shops.", tag: "Modern", gradient: "linear-gradient(135deg, #E8DCC8, #C19A6B)" },
    { title: "Menu Insert Pamphlet", desc: "Tri-fold design with full menu layout, pricing, and mouth-watering food photography.", tag: "Tri-fold", gradient: "linear-gradient(135deg, #7B5E57, #D4B896)" },
    { title: "Event Promo Flyer", desc: "Live music nights, open mic, or latte art workshops — get the word out in style.", tag: "Event", gradient: "linear-gradient(135deg, #C19A6B, #C9A84C)" },
    { title: "Grand Opening Flyer", desc: "Make your launch unforgettable with a bold, celebratory design that draws crowds.", tag: "Launch", gradient: "linear-gradient(135deg, #3E2723, #5C3D2E)" },
    { title: "Loyalty Card Flyer", desc: "Punch card designs that keep customers coming back. Buy 9, get 1 free!", tag: "Loyalty", gradient: "linear-gradient(135deg, #C67B5B, #C9A84C)" },
    { title: "Seasonal Specials Flyer", desc: "Autumn pumpkin spice, winter warmers, spring refreshers — seasonal templates ready to go.", tag: "Seasonal", gradient: "linear-gradient(135deg, #8B9E7B, #C19A6B)" },
    { title: "Takeaway Menu Flyer", desc: "Slim, elegant design for takeaway counters and delivery bags. Every impression counts.", tag: "Takeaway", gradient: "linear-gradient(135deg, #F5EFE0, #E8DCC8)" },
  ],

  // ── Instagram Post Templates ──────────────
  instaPosts: [
    { title: "Quote Post", desc: "Inspirational coffee quotes on warm backgrounds. Boost engagement with every share.", tag: "Quotes", gradient: "linear-gradient(135deg, #5C3D2E, #C19A6B)" },
    { title: "Menu Highlight", desc: "Showcase your best-sellers with stunning flat-lay or close-up photography templates.", tag: "Food", gradient: "linear-gradient(135deg, #C67B5B, #E8DCC8)" },
    { title: "Behind the Scenes", desc: "Barista at work, coffee being brewed — authentic content that builds real connections.", tag: "BTS", gradient: "linear-gradient(135deg, #7B5E57, #D4B896)" },
    { title: "Promo / Offer Post", desc: "Flash sales, combo deals, happy hour announcements with eye-catching badges.", tag: "Promo", gradient: "linear-gradient(135deg, #C9A84C, #C19A6B)" },
    { title: "Story Template Set", desc: "Matching story backgrounds for polls, Q&A, countdowns, and daily menus.", tag: "Stories", gradient: "linear-gradient(135deg, #E8DCC8, #F5EFE0)" },
    { title: "Reels Cover Pack", desc: "Vertical cover designs for Instagram Reels — get those views up!", tag: "Reels", gradient: "linear-gradient(135deg, #3E2723, #7B5E57)" },
    { title: "Customer Review Post", desc: "Share 5-star reviews beautifully. Social proof that sells more than ads ever will.", tag: "Reviews", gradient: "linear-gradient(135deg, #C19A6B, #C67B5B)" },
    { title: "New Arrival Post", desc: "Launch a new drink or dessert with a reveal template that builds anticipation.", tag: "Launch", gradient: "linear-gradient(135deg, #8B9E7B, #C9A84C)" },
  ],

  // ── Content Writing Samples ───────────────
  contentWriting: [
    { title: "Menu Descriptions", desc: "Words that make a simple latte sound like a luxury experience. Appetite-awakening copy for every item.", tag: "Menu", gradient: "linear-gradient(135deg, #5C3D2E, #7B5E57)" },
    { title: "Social Media Captions", desc: "Daily captions, hashtags, and post ideas that grow your following organically.", tag: "Social", gradient: "linear-gradient(135deg, #C19A6B, #C67B5B)" },
    { title: "Website Copy", desc: "About us, contact page, and landing copy that converts visitors into loyal customers.", tag: "Web", gradient: "linear-gradient(135deg, #7B5E57, #C19A6B)" },
    { title: "Blog Posts", desc: "Cafe culture articles, brewing guides, and behind-the-scenes stories for your website.", tag: "Blog", gradient: "linear-gradient(135deg, #C9A84C, #8B9E7B)" },
    { title: "Taglines & Slogans", desc: "Memorable one-liners that stick in people's minds. Your brand in a sentence.", tag: "Branding", gradient: "linear-gradient(135deg, #3E2723, #C19A6B)" },
    { title: "Email Newsletters", desc: "Monthly updates, special offers, and event invitations that people actually open.", tag: "Email", gradient: "linear-gradient(135deg, #D4B896, #E8DCC8)" },
  ],

  // ── Menu Card Templates ───────────────────
  menuCards: [
    { title: "Espresso Bar Menu", desc: "Sleek black-and-gold design for specialty coffee menus. Classic, elegant, timeless.", tag: "Coffee", gradient: "linear-gradient(135deg, #3E2723, #5C3D2E)" },
    { title: "Breakfast Menu", desc: "Warm and inviting — perfect for morning specials, brunch combos, and fresh bakes.", tag: "Breakfast", gradient: "linear-gradient(135deg, #C19A6B, #D4B896)" },
    { title: "Dessert Menu", desc: "Sweet and indulgent design for cakes, pastries, and sweet treats that sell themselves.", tag: "Desserts", gradient: "linear-gradient(135deg, #C67B5B, #C9A84C)" },
    { title: "Lunch & Sandwiches", desc: "Fresh, clean layout for midday meals, salads, and grab-and-go options.", tag: "Lunch", gradient: "linear-gradient(135deg, #8B9E7B, #C19A6B)" },
    { title: "Seasonal Specials Menu", desc: "Rotating designs for holiday specials, summer drinks, and winter warmers.", tag: "Seasonal", gradient: "linear-gradient(135deg, #C9A84C, #E8DCC8)" },
    { title: "Kids Menu", desc: "Fun, colorful, and family-friendly — mini meals, babyccinos, and treats.", tag: "Kids", gradient: "linear-gradient(135deg, #D4B896, #C67B5B)" },
    { title: "Wine & Cheese Menu", desc: "Sophisticated evening menu for wine pairings, cheese boards, and charcuterie.", tag: "Evening", gradient: "linear-gradient(135deg, #5C3D2E, #3E2723)" },
    { title: "Digital QR Menu", desc: "Modern, scannable menu design optimized for phones and tablets.", tag: "Digital", gradient: "linear-gradient(135deg, #7B5E57, #8B9E7B)" },
  ],

  // ── Color Combinations ────────────────────
  colorCombos: [
    { name: "Classic Espresso", desc: "Deep browns and warm creams — timeless coffee house elegance that never goes out of style.", colors: ["#3E2723", "#7B5E57", "#C19A6B", "#F5EFE0"] },
    { name: "Caramel Dream", desc: "Golden caramel tones with rich brown accents — sweet, inviting, and irresistible.", colors: ["#C19A6B", "#C9A84C", "#D4B896", "#FBF7EE"] },
    { name: "Earthy Cafe", desc: "Terracotta, sage, and warm beige — natural, grounded, and effortlessly cool.", colors: ["#C67B5B", "#8B9E7B", "#E8DCC8", "#5C3D2E"] },
    { name: "Modern Minimal", desc: "Clean whites with subtle wood tones — Scandinavian-inspired simplicity.", colors: ["#FFFFFF", "#F5EFE0", "#D4B896", "#7B5E57"] },
    { name: "Autumn Harvest", desc: "Rust, ochre, and deep brown — cozy fall vibes that make customers stay longer.", colors: ["#C67B5B", "#C9A84C", "#5C3D2E", "#E8DCC8"] },
    { name: "Vintage Parisian", desc: "Soft beige, dusty rose, and dark chocolate — romantic Parisian bistro charm.", colors: ["#E8DCC8", "#D4B896", "#8B5E3C", "#3E2723"] },
  ],

  // ── Staff Dress Colors ────────────────────
  dressColors: [
    { name: "Classic Barista", desc: "Brown apron over cream shirt — the timeless coffee shop look customers trust.", colors: ["#5C3D2E", "#F5EFE0"] },
    { name: "Modern Earthy", desc: "Sage green shirt with beige apron — natural, approachable, Instagram-worthy.", colors: ["#8B9E7B", "#E8DCC8"] },
    { name: "Bold & Rich", desc: "Dark brown shirt with caramel accents — confident and professional.", colors: ["#3E2723", "#C19A6B"] },
    { name: "Fresh & Clean", desc: "White shirt with light tan apron — pristine and welcoming.", colors: ["#FFFFFF", "#D4B896"] },
    { name: "Terracotta Warm", desc: "Warm terracotta tones with cream — energetic and memorable.", colors: ["#C67B5B", "#F5EFE0"] },
    { name: "Midnight Cafe", desc: "Deep charcoal with gold trim — upscale evening cafe aesthetic.", colors: ["#3E2723", "#C9A84C"] },
  ],

  // ── Interior Designs ──────────────────────
  interiors: [
    { name: "Cozy Corner Cafe", desc: "Warm lighting, wooden furniture, bookshelves — a second home for coffee lovers.", tag: "Cozy", gradient: "linear-gradient(135deg, #5C3D2E, #C19A6B)" },
    { name: "Industrial Loft", desc: "Exposed brick, metal accents, Edison bulbs — urban chic that's highly photographable.", tag: "Industrial", gradient: "linear-gradient(135deg, #3E2723, #7B5E57)" },
    { name: "Botanical Garden", desc: "Living walls, hanging plants, natural wood — fresh air and fresh coffee.", tag: "Nature", gradient: "linear-gradient(135deg, #8B9E7B, #C19A6B)" },
    { name: "Minimalist Zen", desc: "Clean lines, neutral tones, open space — less is more in this calming design.", tag: "Minimal", gradient: "linear-gradient(135deg, #F5EFE0, #E8DCC8)" },
    { name: "Vintage Parisian", desc: "Ornate mirrors, velvet chairs, marble tables — old-world charm meets specialty coffee.", tag: "Vintage", gradient: "linear-gradient(135deg, #D4B896, #8B5E3C)" },
    { name: "Retro Diner", desc: "Checkered floors, neon signs, colorful booths — fun, energetic, and nostalgic.", tag: "Retro", gradient: "linear-gradient(135deg, #C67B5B, #C9A84C)" },
    { name: "Scandinavian Light", desc: "White walls, light wood, wool throws — hygge-inspired comfort and simplicity.", tag: "Nordic", gradient: "linear-gradient(135deg, #FFFFFF, #D4B896)" },
    { name: "Rustic Farmhouse", desc: "Reclaimed wood, mason jars, burlap accents — countryside warmth in the city.", tag: "Rustic", gradient: "linear-gradient(135deg, #7B5E57, #C19A6B)" },
  ],

  // ── Facilities ───────────────────────────
  facilities: [
    {
      icon: "☕", title: "Coffee Equipment",
      items: ["Espresso machine", "Coffee grinder", "Brewing equipment", "Blender for frappes", "Water filtration system", "Refrigeration units", "Ice maker", "Display chiller"]
    },
    {
      icon: "🪑", title: "Furniture & Seating",
      items: ["Tables & chairs", "Comfortable sofas", "Outdoor seating", "Bar stools", "Waiting area bench", "Kids high chairs", "Lounge corner setup", "Decorative shelving"]
    },
    {
      icon: "🎨", title: "Interior & Decor",
      items: ["Wall art & frames", "Lighting fixtures", "Indoor plants", "Menu board design", "Counter design", "Flooring solutions", "Window treatments", "Branded signage"]
    },
    {
      icon: "📋", title: "Branding & Marketing",
      items: ["Logo design", "Menu design", "Social media kit", "Loyalty cards", "Business cards", "Pamphlets & flyers", "Website design", "Photography package"]
    },
    {
      icon: "⚙️", title: "Operational Setup",
      items: ["POS system", "Billing software", "Kitchen equipment", "Storage solutions", "Dishwashing station", "Staff uniform design", "Packaging supplies", "Delivery partnership setup"]
    },
    {
      icon: "📜", title: "Legal & Licenses",
      items: ["FSSAI registration", "Trade license", "Fire safety certificate", "Music license", "GST registration", "Insurance coverage", "Health permits", "Trademark registration"]
    },
  ],
};

// ── RENDER FUNCTIONS ─────────────────────────

function renderServices() {
  const container = document.getElementById('services-grid');
  if (!container) return;
  container.innerHTML = TMMC.services.map((s, i) => `
    <div class="service-card animate-on-scroll" style="transition-delay: ${i * 0.1}s">
      <div class="icon-wrapper">${s.icon}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="${s.link}" class="card-link">Explore <span>&rarr;</span></a>
    </div>
  `).join('');
}

function renderCards(containerId, items, type = 'template') {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (type === 'template') {
    container.innerHTML = items.map((item, i) => `
      <div class="template-card animate-on-scroll" style="transition-delay: ${i * 0.05}s">
        <div class="card-image" style="background: ${item.gradient}">
          <div class="placeholder-text">
            <div class="icon">${item.tag === 'Print' ? '📋' : item.tag === 'Modern' ? '✨' : item.tag === 'Tri-fold' ? '📑' : item.tag === 'Event' ? '🎉' : item.tag === 'Launch' ? '🚀' : item.tag === 'Loyalty' ? '💳' : item.tag === 'Seasonal' ? '🍂' : item.tag === 'Takeaway' ? '🛍️' : '☕'}</div>
            <h4>${item.title}</h4>
          </div>
        </div>
        <div class="card-body">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
          <span class="card-tag">${item.tag}</span>
        </div>
      </div>
    `).join('');
  } else if (type === 'palette') {
    container.innerHTML = items.map((item, i) => `
      <div class="palette-card animate-on-scroll" style="transition-delay: ${i * 0.05}s">
        <div class="palette-preview">
          ${item.colors.map(c => `<div class="color-block" style="background: ${c}"></div>`).join('')}
        </div>
        <div class="palette-body">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
          <div class="color-codes">
            ${item.colors.map(c => `<span>${c}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
  } else if (type === 'dress') {
    container.innerHTML = items.map((item, i) => `
      <div class="dress-card animate-on-scroll" style="transition-delay: ${i * 0.05}s">
        <div class="dress-preview">
          ${item.colors.map(c => `<div class="dress-color" style="background: ${c}"><span>${c}</span></div>`).join('')}
        </div>
        <div class="dress-body">
          <h4>${item.name}</h4>
          <p>${item.desc}</p>
        </div>
      </div>
    `).join('');
  } else if (type === 'facility') {
    container.innerHTML = items.map((item, i) => `
      <div class="facility-card animate-on-scroll" style="transition-delay: ${i * 0.08}s">
        <div class="facility-header">
          <div class="icon">${item.icon}</div>
          <h3>${item.title}</h3>
        </div>
        <ul>
          ${item.items.map(it => `<li>${it}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }
}

// ── PAGE INITIALIZER ────────────────────────

function initPage() {
  const page = document.body.dataset.page;

  switch (page) {
    case 'home':
      renderServices();
      break;
    case 'pamphlets':
      renderCards('cards-container', TMMC.pamphlets, 'template');
      break;
    case 'insta':
      renderCards('cards-container', TMMC.instaPosts, 'template');
      break;
    case 'content':
      renderCards('cards-container', TMMC.contentWriting, 'template');
      break;
    case 'menu-cards':
      renderCards('cards-container', TMMC.menuCards, 'template');
      break;
    case 'color-combo':
      renderCards('cards-container', TMMC.colorCombos, 'palette');
      break;
    case 'staff-dress':
      renderCards('cards-container', TMMC.dressColors, 'dress');
      break;
    case 'interior':
      renderCards('cards-container', TMMC.interiors, 'template');
      break;
    case 'facilities':
      renderCards('cards-container', TMMC.facilities, 'facility');
      break;
  }
}

// ── NAVBAR SCROLL ───────────────────────────

function handleScroll() {
  const navbar = document.querySelector('.navbar');
  const scrollTop = document.querySelector('.scroll-top');

  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }

  if (window.scrollY > 500) {
    scrollTop?.classList.add('visible');
  } else {
    scrollTop?.classList.remove('visible');
  }
}

// ── SCROLL ANIMATIONS ──────────────────────

function handleAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// ── MOBILE NAV ─────────────────────────────

function handleMobileNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('open');
  });

  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('open');
    });
  });
}

// ── SCROLL TO TOP ──────────────────────────

function handleScrollTop() {
  const scrollTop = document.querySelector('.scroll-top');
  scrollTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── DOCUMENT READY ──────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initPage();
  handleAnimations();
  handleMobileNav();
  handleScrollTop();
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
