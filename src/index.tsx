import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c) => {
  return c.html(homePage())
})

app.get('/about', (c) => {
  return c.html(aboutPage())
})

app.get('/projects', (c) => {
  return c.html(projectsPage())
})

app.get('/contact', (c) => {
  return c.html(contactPage())
})

// Contact form submission
app.post('/api/contact', async (c) => {
  const body = await c.req.json()
  // In production, integrate with email service
  console.log('Contact form submission:', body)
  return c.json({ success: true, message: 'Thank you for your enquiry. We will be in touch shortly.' })
})

function navHTML(activePage: string) {
  return `
  <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500" style="background: transparent;">
    <div class="nav-inner max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
      <a href="/" class="logo-link flex flex-col items-start group">
        <span class="logo-arte text-2xl font-light tracking-[0.25em] uppercase transition-colors duration-300" style="color: #7B8EB9; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 1.6rem; letter-spacing: 0.3em;">ARTé</span>
        <span class="logo-tagline text-xs tracking-[0.35em] uppercase transition-colors duration-300" style="color: #7B8EB9; font-size: 0.6rem; letter-spacing: 0.4em; margin-top: -2px;">THE LIVING STANDARD</span>
      </a>
      
      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-12">
        <a href="/" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${activePage === 'home' ? 'nav-active' : ''}" style="font-family: 'Inter', sans-serif;">Home</a>
        <a href="/about" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${activePage === 'about' ? 'nav-active' : ''}" style="font-family: 'Inter', sans-serif;">About</a>
        <a href="/projects" class="nav-link text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${activePage === 'projects' ? 'nav-active' : ''}" style="font-family: 'Inter', sans-serif;">Projects</a>
        <a href="/contact" class="nav-cta text-xs tracking-[0.2em] uppercase px-6 py-3 border transition-all duration-300 hover:scale-105" style="font-family: 'Inter', sans-serif; border-color: #7B8EB9; color: #7B8EB9;">Enquire</a>
      </div>
      
      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
        <span class="menu-bar block w-6 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
        <span class="menu-bar block w-4 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
        <span class="menu-bar block w-6 h-px transition-all duration-300" style="background: #7B8EB9;"></span>
      </button>
    </div>
    
    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden md:hidden" style="background: rgba(255,255,255,0.98); border-top: 1px solid #e8e4df;">
      <div class="px-8 py-6 flex flex-col gap-6">
        <a href="/" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">Home</a>
        <a href="/about" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">About</a>
        <a href="/projects" class="text-xs tracking-[0.25em] uppercase" style="color: #2C2C2C; font-family: 'Inter', sans-serif;">Projects</a>
        <a href="/contact" class="text-xs tracking-[0.25em] uppercase" style="color: #7B8EB9; font-family: 'Inter', sans-serif;">Enquire</a>
      </div>
    </div>
  </nav>
  `
}

function headHTML(title: string, description: string) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} — ARTé | The Living Standard</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90' fill='%237B8EB9'>A</text></svg>">
    <meta name="description" content="${description}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
      :root {
        --arte-blue: #7B8EB9;
        --arte-blue-light: #A8B5D1;
        --arte-blue-dark: #5A6E99;
        --arte-cream: #FAF9F7;
        --arte-warm: #F5F0EA;
        --arte-charcoal: #2C2C2C;
        --arte-mid: #6B6B6B;
        --arte-border: #E8E4DF;
      }
      
      * { margin: 0; padding: 0; box-sizing: border-box; }
      
      html { scroll-behavior: smooth; }
      
      body {
        background: var(--arte-cream);
        color: var(--arte-charcoal);
        font-family: 'Inter', sans-serif;
        font-weight: 300;
        line-height: 1.7;
        -webkit-font-smoothing: antialiased;
      }
      
      /* ── Navigation ── */
      #main-nav.scrolled {
        background: rgba(250, 249, 247, 0.97) !important;
        border-bottom: 1px solid var(--arte-border);
        box-shadow: 0 2px 30px rgba(0,0,0,0.05);
      }
      #main-nav.scrolled .nav-link,
      #main-nav.scrolled .logo-arte,
      #main-nav.scrolled .logo-tagline {
        color: var(--arte-charcoal) !important;
      }
      #main-nav.scrolled .nav-link:hover { color: var(--arte-blue) !important; }
      #main-nav.scrolled .nav-cta { border-color: var(--arte-charcoal) !important; color: var(--arte-charcoal) !important; }
      #main-nav.scrolled .nav-cta:hover { border-color: var(--arte-blue) !important; color: var(--arte-blue) !important; background: transparent !important; }
      #main-nav.scrolled .menu-bar { background: var(--arte-charcoal) !important; }
      
      /* On dark hero bg, links are light; after scroll, links are dark */
      .hero-nav .nav-link { color: rgba(255,255,255,0.85); }
      .hero-nav .nav-link:hover { color: #fff; }
      .hero-nav .logo-arte,
      .hero-nav .logo-tagline { color: #fff !important; }
      .hero-nav .nav-cta { border-color: rgba(255,255,255,0.7) !important; color: rgba(255,255,255,0.85) !important; }
      .hero-nav .nav-cta:hover { border-color: #fff !important; color: #fff !important; }
      .hero-nav .menu-bar { background: #fff !important; }
      
      .nav-link { color: var(--arte-mid); }
      .nav-link:hover { color: var(--arte-blue); }
      .nav-active { color: var(--arte-blue) !important; }
      
      /* ── Typography ── */
      .heading-serif {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-weight: 300;
        line-height: 1.15;
        letter-spacing: -0.01em;
      }
      
      .section-label {
        font-size: 0.65rem;
        letter-spacing: 0.35em;
        text-transform: uppercase;
        color: var(--arte-blue);
        font-weight: 400;
      }
      
      /* ── Buttons ── */
      .btn-primary {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        background: var(--arte-blue);
        color: #fff;
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-primary:hover { background: var(--arte-blue-dark); transform: translateY(-1px); }
      
      .btn-outline {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid var(--arte-charcoal);
        color: var(--arte-charcoal);
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-outline:hover { border-color: var(--arte-blue); color: var(--arte-blue); }
      
      .btn-outline-white {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        border: 1px solid rgba(255,255,255,0.6);
        color: rgba(255,255,255,0.9);
        padding: 14px 36px;
        font-size: 0.7rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-weight: 400;
        transition: all 0.3s ease;
        text-decoration: none;
      }
      .btn-outline-white:hover { border-color: #fff; color: #fff; }
      
      /* ── Hero ── */
      .hero-section {
        height: 100vh;
        min-height: 700px;
        position: relative;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
      }
      
      .hero-bg {
        position: absolute;
        inset: 0;
        background-image: url('https://sspark.genspark.ai/cfimages?u1=GNWa9lB3h0kOONsP0VmaoO8R058LWMIeAEeJLur%2FoLhO%2B%2BbA7n4RlYuGntyMjFBaK%2FGc%2BGXITwvMLzoPlhXYwWPv5xnOR2Kj%2Fi%2FgoWrwJBpst2dlsMhuR9Y0YQ7%2BJdoW398C&u2=02wQXjxM51Kal9b4&width=2560');
        background-size: cover;
        background-position: center 30%;
        transform: scale(1.05);
        transition: transform 8s ease;
      }
      .hero-bg::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          to bottom,
          rgba(0,0,0,0.2) 0%,
          rgba(0,0,0,0.1) 40%,
          rgba(0,0,0,0.55) 100%
        );
      }
      
      /* ── Cards ── */
      .project-card {
        overflow: hidden;
        position: relative;
        cursor: pointer;
      }
      .project-card img {
        transition: transform 0.7s ease;
        width: 100%;
        object-fit: cover;
      }
      .project-card:hover img { transform: scale(1.04); }
      
      .project-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%);
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .project-card:hover .project-overlay { opacity: 1; }
      
      /* ── Stats ── */
      .stat-number {
        font-family: 'Cormorant Garamond', Georgia, serif;
        font-weight: 300;
        font-size: 4rem;
        line-height: 1;
        color: var(--arte-blue);
      }
      
      /* ── Sector Cards ── */
      .sector-card {
        border: 1px solid var(--arte-border);
        transition: all 0.4s ease;
        background: #fff;
      }
      .sector-card:hover {
        border-color: var(--arte-blue-light);
        box-shadow: 0 8px 40px rgba(123,142,185,0.12);
        transform: translateY(-4px);
      }
      
      /* ── Divider ── */
      .arte-divider {
        width: 40px;
        height: 1px;
        background: var(--arte-blue);
        margin: 16px 0;
      }
      
      /* ── Form ── */
      .form-input {
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--arte-border);
        background: transparent;
        padding: 12px 0;
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        font-weight: 300;
        color: var(--arte-charcoal);
        outline: none;
        transition: border-color 0.3s;
      }
      .form-input:focus { border-color: var(--arte-blue); }
      .form-input::placeholder { color: #B0ACA8; font-size: 0.8rem; letter-spacing: 0.05em; }
      
      .form-label {
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--arte-mid);
        font-weight: 400;
      }
      
      /* ── Testimonial ── */
      .quote-mark {
        font-family: 'Cormorant Garamond', serif;
        font-size: 6rem;
        line-height: 0.5;
        color: var(--arte-blue-light);
        font-style: italic;
      }
      
      /* ── Process steps ── */
      .process-step-num {
        font-family: 'Cormorant Garamond', serif;
        font-size: 3.5rem;
        font-weight: 300;
        color: var(--arte-border);
        line-height: 1;
      }
      
      /* ── Footer ── */
      footer {
        background: var(--arte-charcoal);
        color: rgba(255,255,255,0.6);
      }
      
      /* ── Scroll animation ── */
      .fade-in {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.7s ease, transform 0.7s ease;
      }
      .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      /* ── Image aspect ratios ── */
      .aspect-4-3 { aspect-ratio: 4/3; }
      .aspect-3-4 { aspect-ratio: 3/4; }
      .aspect-16-9 { aspect-ratio: 16/9; }
      .aspect-1-1 { aspect-ratio: 1/1; }
      
      /* ── Horizontal rule ── */
      hr.arte { border: none; border-top: 1px solid var(--arte-border); }
      
      /* ── Filter buttons ── */
      .filter-active {
        border-color: #7B8EB9 !important;
        color: #7B8EB9 !important;
        background: rgba(123,142,185,0.10) !important;
      }
      .filter-inactive {
        border-color: #E8E4DF !important;
        color: #6B6B6B !important;
        background: transparent !important;
      }
      .filter-inactive:hover {
        border-color: #7B8EB9 !important;
        color: #7B8EB9 !important;
      }
      
      /* Mobile adjustments */
      @media (max-width: 768px) {
        .stat-number { font-size: 2.8rem; }
        .hero-section { min-height: 600px; }
      }
    </style>
  </head>
  <body>`
}

function footerHTML() {
  return `
  <footer>
    <div class="max-w-7xl mx-auto px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="mb-4">
            <div class="text-2xl font-light tracking-widest" style="color: #7B8EB9; font-family: 'Cormorant Garamond', serif; letter-spacing: 0.3em;">ARTé</div>
            <div class="text-xs tracking-widest" style="color: rgba(123,142,185,0.7); letter-spacing: 0.4em; font-size: 0.55rem;">THE LIVING STANDARD</div>
          </div>
          <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.4); max-width: 200px;">
            Bespoke furniture solutions for the world's most distinguished spaces.
          </p>
        </div>
        
        <!-- Navigation -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Navigation</h4>
          <ul class="space-y-3">
            <li><a href="/" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Home</a></li>
            <li><a href="/about" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">About Us</a></li>
            <li><a href="/projects" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Projects</a></li>
            <li><a href="/contact" class="text-xs tracking-wide hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">Contact</a></li>
          </ul>
        </div>
        
        <!-- Sectors -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Sectors</h4>
          <ul class="space-y-3">
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Luxury Hotels</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Serviced Apartments</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Corporate Offices</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Student Housing</li>
            <li class="text-xs tracking-wide" style="color: rgba(255,255,255,0.55);">Senior Living</li>
          </ul>
        </div>
        
        <!-- Contact -->
        <div>
          <h4 class="text-xs tracking-widest uppercase mb-6" style="color: rgba(255,255,255,0.3); letter-spacing: 0.25em;">Get In Touch</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="fas fa-envelope text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="mailto:enquiries@arte-living.com" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">enquiries@arte-living.com</a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-phone text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="tel:+85256061921" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">+852 5606 1921</a>
            </li>
            <li class="flex items-start gap-3">
              <i class="fab fa-whatsapp text-xs mt-1" style="color: #7B8EB9;"></i>
              <a href="https://wa.me/85256061921" target="_blank" rel="noopener" class="text-xs hover:text-white transition-colors" style="color: rgba(255,255,255,0.55);">WhatsApp Us</a>
            </li>

          </ul>
          <div class="flex gap-4 mt-8">
            <a href="#" class="w-8 h-8 border flex items-center justify-center transition-all hover:border-white" style="border-color: rgba(255,255,255,0.2);">
              <i class="fab fa-linkedin-in text-xs" style="color: rgba(255,255,255,0.55);"></i>
            </a>
            <a href="#" class="w-8 h-8 border flex items-center justify-center transition-all hover:border-white" style="border-color: rgba(255,255,255,0.2);">
              <i class="fab fa-instagram text-xs" style="color: rgba(255,255,255,0.55);"></i>
            </a>
          </div>
        </div>
      </div>
      
      <hr style="border-color: rgba(255,255,255,0.08);" class="mb-8">
      
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-xs" style="color: rgba(255,255,255,0.3);">© 2026 ARTé. All rights reserved. The Living Standard.</p>
        <p class="text-xs" style="color: rgba(255,255,255,0.2);">Bespoke Furniture | Contract Interiors | B2B Specialists</p>
      </div>
    </div>
  </footer>
  
  <script>
    // Scroll-based nav
    const nav = document.getElementById('main-nav');
    const isHeroPage = document.querySelector('.hero-section');
    
    function updateNav() {
      if (isHeroPage) {
        if (window.scrollY > 80) {
          nav.classList.add('scrolled');
          nav.classList.remove('hero-nav');
        } else {
          nav.classList.remove('scrolled');
          nav.classList.add('hero-nav');
        }
      } else {
        nav.classList.add('scrolled');
      }
    }
    
    updateNav();
    window.addEventListener('scroll', updateNav);
    
    // Hero bg parallax
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
      window.addEventListener('scroll', () => {
        heroBg.style.transform = 'scale(1.05) translateY(' + (window.scrollY * 0.15) + 'px)';
      });
      setTimeout(() => { heroBg.style.transform = 'scale(1) translateY(0)'; }, 100);
    }
    
    // Mobile menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    
    // Scroll fade-in
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    
    // Counter animation
    function animateCounter(el) {
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 1800;
      const start = performance.now();
      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }
    
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
  </script>
  </body>
  </html>
  `
}

function homePage() {
  return headHTML('Home', 'ARTé crafts bespoke furniture for luxury hotels, serviced apartments, offices, and student housing. The Living Standard.') + `

${navHTML('home')}

<!-- ══════════════════════════════════════════════
     HERO
══════════════════════════════════════════════ -->
<section class="hero-section">
  <div class="hero-bg"></div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-8 pb-20 w-full">
    <div class="max-w-2xl">
      <p class="section-label mb-6" style="color: rgba(255,255,255,0.65);">Bespoke Contract Furniture</p>
      <h1 class="heading-serif text-white mb-6" style="font-size: clamp(3rem, 6vw, 5.5rem);">
        Where Every<br>
        <em style="color: #A8B5D1;">Space Tells</em><br>
        a Story
      </h1>
      <p class="text-sm leading-relaxed mb-10" style="color: rgba(255,255,255,0.7); max-width: 420px; font-weight: 300;">
        From five-star hotel groups to a family designing their forever home, we partner with people who care deeply about the places they create. Developers, hospitality leaders, institutions, homeowners — different briefs, one shared standard. Furniture made to last, made to be lived with, made to feel like it always belonged there.
      </p>
      <div class="flex flex-wrap gap-4">
        <a href="/projects" class="btn-primary">
          View Our Work <i class="fas fa-arrow-right text-xs"></i>
        </a>
        <a href="/contact" class="btn-outline-white">
          Start a Project
        </a>
      </div>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
    <div class="text-xs tracking-widest" style="color: rgba(255,255,255,0.4); writing-mode: vertical-rl; font-size: 0.6rem; letter-spacing: 0.25em;">SCROLL</div>
    <div class="w-px h-12" style="background: rgba(255,255,255,0.25);"></div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     INTRO STRIP
══════════════════════════════════════════════ -->
<section style="background: var(--arte-charcoal);" class="py-8">
  <div class="max-w-7xl mx-auto px-8">
    <!-- Mobile: vertical left-aligned list, no orphan dots -->
    <!-- Desktop: single horizontal centred row with dot separators -->
    <div class="hidden md:flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Luxury Hotels</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Serviced Apartments</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Corporate Offices</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Student Housing</span>
      <span style="color: rgba(255,255,255,0.15);">·</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Senior Living</span>
    </div>
    <div class="flex md:hidden flex-col items-start gap-y-4">
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Luxury Hotels</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Serviced Apartments</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Corporate Offices</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Student Housing</span>
      <span class="text-xs tracking-widest uppercase" style="color: rgba(255,255,255,0.4); letter-spacing: 0.3em;">Senior Living</span>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     SECTORS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="max-w-2xl mb-16 fade-in">
      <p class="section-label mb-4">Our Expertise</p>
      <h2 class="heading-serif mb-6" style="font-size: clamp(2.2rem, 4vw, 3.5rem); color: var(--arte-charcoal);">
        Tailored for Every<br><em style="color: var(--arte-blue);">Sector's Standard</em>
      </h2>
      <p class="text-sm leading-relaxed" style="color: var(--arte-mid);">
        We understand that a five-star hotel lobby and a student common room demand entirely different solutions. ARTé's expertise spans the full spectrum — delivering appropriate quality, at the right value, every time.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style="background: var(--arte-border);">
      
      <!-- Luxury Hotels -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=GNWa9lB3h0kOONsP0VmaoO8R058LWMIeAEeJLur%2FoLhO%2B%2BbA7n4RlYuGntyMjFBaK%2FGc%2BGXITwvMLzoPlhXYwWPv5xnOR2Kj%2Fi%2FgoWrwJBpst2dlsMhuR9Y0YQ7%2BJdoW398C&u2=02wQXjxM51Kal9b4&width=2560" 
               alt="Luxury Hotel Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01</p>
        <h3 class="heading-serif text-xl mb-3">Luxury Hotels &<br>Resorts</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Mandarin Oriental, Four Seasons and peers demand furniture that embodies their brand. We deliver heirloom-quality pieces that elevate the guest experience and stand the test of time.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">5-Star Grade</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">FF&E Packages</span>
        </div>
      </div>
      
      <!-- Serviced Apartments -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=vDoYq9DYLf7TZ5SaO4Aa0Dj%2FOy3Bw6lRMl029trWMCmKXrTgKLWze7RiY%2FcPv2RF4mBD3s63%2FeLwra464hccrayfsNfq6GBQJWmoVNTz1tUw0sX65aEOlAbyfVcZSkx10zcrcW46qwy83IQl9%2FvWnhr6wrBr8l4%3D&u2=vqoHJXUlMlIYOvnm&width=2560" 
               alt="Serviced Apartment Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01</p>
        <h3 class="heading-serif text-xl mb-3">Serviced<br>Apartments</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          The discerning long-stay traveller expects hotel comfort with residential warmth. We furnish serviced apartments and branded residences with pieces that feel both curated and liveable.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Residential Feel</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Durability Focus</span>
        </div>
      </div>
      
      <!-- Corporate Offices -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=D%2BjO5IRrFzm726ACprdTAD3Ji8aoDy8%2F61TyTm56CcsP%2Byxh26ySw0E0j4%2B%2BKPw7HwWRznR%2BxZxGcb8ThRERqQXg3%2B43mG9GIVhps%2B9Hzsv0cLDezUQIugPS0tfUm243z3lPT4vARbjIG8Ey77ifQ1LKzGXyTw%3D%3D&u2=C9Sq6Z2fByU1MvH4&width=2560" 
               alt="Office Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 01 – 02</p>
        <h3 class="heading-serif text-xl mb-3">Corporate<br>Offices</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          From boardrooms to breakout spaces, we create working environments that reflect brand identity and support productivity — elegant, functional, and built to last.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Ergonomic</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Brand-Aligned</span>
        </div>
      </div>
      
      <!-- Student Housing -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=CpGy7xPPebVr8EbiUwe2hGPXpdFOVpe2NmQlrbJLsHt0Busbbsanip6E6g2dzxxll0994N%2BdwCNHnfRKkROXx0hYnlvASIKForDei1f%2F%2FMheeII0t1H4j2iFlVcZZJbWJetg52SXtY62gTY6E9mTv9BM5zBheXCX73ekTTUeG3UD7kMszJe6cMXMAC3ZluaWgfvlNAaw%2F94%3D&u2=QnIstrDIyYV%2F0oew&width=2560" 
               alt="Student Housing Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 02</p>
        <h3 class="heading-serif text-xl mb-3">Student<br>Housing</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Value and durability without compromising on design. We help student housing developers maximise ROI with smart, cost-efficient furniture packs that still look and feel genuinely good.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Value-Led</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">High Volume</span>
        </div>
      </div>
      
      <!-- Senior Living -->
      <div class="sector-card p-8 fade-in" style="background: var(--arte-cream);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=lk3ATvy9Xa9%2BG2POrLF%2BbhrI3CjI%2B1OA9qEfby40Fqg1%2F2HSe5korg84vVDhaiZgZVCTDbnNbVxlsLRdyScursV38C8zl%2BbbboHJsKz9m4C33cPveEGfnq%2BiS%2FGPtj2uJowcoppGrURXd7xdkwU5Vppt4QrL0Bfaw6QkF2vxwnEXaH4%3D&u2=Y5nU771aqxuMMOEQ&width=2560" 
               alt="Senior Living Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Tier 02</p>
        <h3 class="heading-serif text-xl mb-3">Senior &<br>Care Living</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          Thoughtfully designed for wellbeing, safety, and dignity. Our senior living collections balance practicality with warmth, creating homes where residents feel truly at ease.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Safety Spec</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: var(--arte-blue);">Comfort Focus</span>
        </div>
      </div>
      
      <!-- HNW Residential -->
      <div class="sector-card p-8 fade-in" style="background: linear-gradient(135deg, rgba(123,142,185,0.06) 0%, #fff 100%);">
        <div class="mb-6">
          <img src="https://sspark.genspark.ai/cfimages?u1=9CFsU6OrOGuEZ3ssLFewKB%2BHrG7SREMtMASkVtKOK8%2BJZRRAt7FtwOp46mJKqTv6tV9SVoZOOBTqv%2B8MPAFrzL7vVF26b5w9d38gEgKlYllhOhDw5X6poczp3TtJT%2BicONMtTTHnf1qLi661KbkAYnTbWjRrK9VBGeFhZ%2Fypo%2FhsP1TiaQ7ivH5ai6DniWpc30CRkU44%2F3u02RlxqroHTQfyE1%2BM5By9CtNWQgYtD%2BxN9kMm%2FALhJBrJOF5H85U5vL6OBmI8NoGmrl2%2B6wA%3D&u2=HedbCUn%2FhBx3RwBF&width=2560" 
               alt="Private Residence Furniture" class="w-full object-cover aspect-16-9">
        </div>
        <div class="w-8 h-px mb-4" style="background: var(--arte-blue);"></div>
        <p class="section-label mb-2">Private Clients</p>
        <h3 class="heading-serif text-xl mb-3">Private<br>Residences</h3>
        <p class="text-xs leading-relaxed mb-4" style="color: var(--arte-mid);">
          For high-net-worth individuals who expect nothing less than five-star hotel standards at home. Fully bespoke, deeply personal, uncompromisingly excellent.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.1); color: var(--arte-blue);">Fully Bespoke</span>
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.1); color: var(--arte-blue);">White Glove</span>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     STATS BANNER
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-charcoal);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="1000">0</span>+</div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Projects Globally</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="350">0</span></div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Skilled Employees</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="4">0</span></div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Hotel Brands Served</p>
      </div>
      
      <div class="fade-in">
        <div class="stat-number mb-2"><span data-target="10">0</span>+</div>
        <div class="arte-divider mx-auto"></div>
        <p class="text-xs tracking-widest uppercase mt-3" style="color: rgba(255,255,255,0.4); letter-spacing: 0.2em;">Years of Experience</p>
      </div>
      
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     FEATURED PROJECTS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 fade-in">
      <div>
        <p class="section-label mb-4">Portfolio</p>
        <h2 class="heading-serif" style="font-size: clamp(2.2rem, 4vw, 3.5rem); color: var(--arte-charcoal);">
          Selected<br><em style="color: var(--arte-blue);">Projects</em>
        </h2>
      </div>
      <a href="/projects" class="btn-outline self-start md:self-auto">
        View All Projects <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-12 gap-4">
      
      <!-- Large featured -->
      <div class="project-card md:col-span-7 fade-in">
        <div class="aspect-4-3 overflow-hidden relative">
          <img src="https://sspark.genspark.ai/cfimages?u1=AaAgbX1DdalH6YaJ%2BJS51XAx5nKb4ygbX7J8lAVYQcJxpZgMHd6Cdio0cAo%2B2Pg29JNaBnAzjpX5DrclcO60bmijR45XCPv7CPMrOrP%2F3ghO7fmFf6YMF%2FBD1zmUjJrc6e27zF2C9EvNxWR0HnY%2BEzLXqG6yesKF%2Fw%3D%3D&u2=zkxm1jJH7xMOgwyG&width=2560" 
               alt="Luxury Hotel Lobby Project" class="w-full h-full object-cover">
          <div class="project-overlay"></div>
          <div class="absolute bottom-0 left-0 right-0 p-6 z-10 opacity-0 transition-opacity duration-300" style="opacity: 0;" id="overlay1">
            <a href="/projects" class="text-xs tracking-widest uppercase text-white border-b pb-1" style="border-color: rgba(255,255,255,0.4);">View Project</a>
          </div>
        </div>
        <div class="p-6" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
          <div class="flex items-center justify-between">
            <div>
              <p class="section-label mb-1">Luxury Hotel</p>
              <h3 class="heading-serif text-xl">The Meridian Grand — London</h3>
            </div>
            <a href="/projects" class="w-10 h-10 border flex items-center justify-center transition-all hover:border-arte-blue" style="border-color: var(--arte-border);">
              <i class="fas fa-arrow-right text-xs" style="color: var(--arte-blue);"></i>
            </a>
          </div>
        </div>
      </div>
      
      <!-- Two stacked -->
      <div class="md:col-span-5 flex flex-col gap-4">
        
        <div class="project-card fade-in">
          <div style="height: 200px; overflow: hidden; position: relative;">
            <img src="https://sspark.genspark.ai/cfimages?u1=QcuwwmaEvzJP52UCQUHlhnMszdSp4A1v6%2FOOjR9G0jcwKfntn%2FePtoZVowjt87UZWD5OQlTY75oSTj0%2F3I%2F7Pvk4jT5Mz7xfOlXuCvTPaMODfR%2F%2FhnY07s7AGPjpAWn2ODw84FXUpHyX7QHcdhr2O0CNEADAQBRzfvVGGcQ9tWw%2FlJh1wUsP4YTemem3eEsYoD4%3D&u2=TufLGqi5vGC8MGk2&width=2560" 
                 alt="Office Project" class="w-full h-full object-cover">
            <div class="project-overlay"></div>
          </div>
          <div class="p-5" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
            <p class="section-label mb-1">Corporate Office</p>
            <h3 class="heading-serif text-lg">Apex Capital HQ — Singapore</h3>
          </div>
        </div>
        
        <div class="project-card fade-in">
          <div style="height: 200px; overflow: hidden; position: relative;">
            <img src="https://sspark.genspark.ai/cfimages?u1=%2FqBTjNtnJ%2Bsc5V15aESGpO03%2Bal3R8Pz%2FqAEXJgze9PIlbvIhziSn6ftuEI3FUxME5w4G%2Bqk0XjRgy1i0iEzzGZK%2Bvb68zJyMc%2BLef3q6Q%3D%3D&u2=1IflmvVyVUdkhOJo&width=2560" 
                 alt="Student Housing Project" class="w-full h-full object-cover">
            <div class="project-overlay"></div>
          </div>
          <div class="p-5" style="background: #fff; border: 1px solid var(--arte-border); border-top: none;">
            <p class="section-label mb-1">Student Housing</p>
            <h3 class="heading-serif text-lg">Collegiate Quarter — Manchester</h3>
          </div>
        </div>
        
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     TESTIMONIAL
══════════════════════════════════════════════ -->
<section class="py-24 md:py-28" style="background: var(--arte-cream);">
  <div class="max-w-4xl mx-auto px-8 text-center fade-in">
    <div class="quote-mark mb-4">"</div>
    <blockquote class="heading-serif mb-8" style="font-size: clamp(1.6rem, 3vw, 2.4rem); color: var(--arte-charcoal); font-style: italic; line-height: 1.4;">
      ARTé understood our brand language from day one. The pieces they delivered for our flagship property exceeded every expectation — both in craftsmanship and their ability to manage a project of this scale.
    </blockquote>
    <div class="arte-divider mx-auto mb-6"></div>
    <p class="text-xs tracking-widest uppercase" style="color: var(--arte-mid);">Director of Design — Five Star Hotel Group</p>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA BAND
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="flex flex-col md:flex-row items-center justify-between gap-8 fade-in">
      <div>
        <p class="text-xs tracking-widest uppercase mb-3" style="color: rgba(255,255,255,0.6);">Begin Your Project</p>
        <h2 class="heading-serif text-white" style="font-size: clamp(2rem, 3.5vw, 3rem);">
          Let's Create Something<br>Extraordinary Together
        </h2>
      </div>
      <a href="/contact" class="btn-outline-white flex-shrink-0">
        Start a Conversation <i class="fas fa-arrow-right text-xs"></i>
      </a>
    </div>
  </div>
</section>

${footerHTML()}`
}

function aboutPage() {
  return headHTML('About Us', 'ARTé is a bespoke contract furniture specialist with 15 years of experience supplying luxury hotels, serviced apartments, offices and student housing.') + `

${navHTML('about')}

<!-- ══════════════════════════════════════════════
     ABOUT HERO
══════════════════════════════════════════════ -->
<section class="pt-32 pb-20 md:pt-40 md:pb-28" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-3xl">
      <p class="section-label mb-5 fade-in">Our Story</p>
      <h1 class="heading-serif mb-8 fade-in" style="font-size: clamp(2.8rem, 5vw, 5rem); color: var(--arte-charcoal);">
        Crafting Spaces That<br><em style="color: var(--arte-blue);">Set the Standard</em>
      </h1>
      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 560px; font-size: 0.95rem;">
        ARTé is a full-service furniture manufacturer offering a true 'one-stop shop' — from in-house design and manufacturing through to warehousing, freight, and installation. With over a decade of experience and more than 1,000 projects completed globally, we are trusted by some of the world's most demanding clients.
      </p>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     BRAND STORY
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="fade-in">
        <img src="https://sspark.genspark.ai/cfimages?u1=JLPt2F7Jg2WCFVLkFWJjpfzXavqXnfrvfW55I1sCXHtNQiPPMyL39gstAAWxZCL6fQLob9zKq1%2FMOAbW89kqn3rciCz8KVKQEA%3D%3D&u2=WPqh8SZQvF8BMUs6&width=2560" 
             alt="ARTé Elegant Furniture" class="w-full object-cover" style="aspect-ratio: 4/5;">
      </div>
      
      <div class="fade-in">
        <p class="section-label mb-5">Who We Are</p>
        <h2 class="heading-serif mb-6" style="font-size: clamp(2rem, 3.5vw, 3rem); color: var(--arte-charcoal);">
          Where Artisanship Meets<br><em style="color: var(--arte-blue);">Commercial Precision</em>
        </h2>
        <div class="arte-divider"></div>
        <div class="mt-6 space-y-5 text-sm leading-relaxed" style="color: var(--arte-mid);">
          <p>
            ARTé is a full-service furniture manufacturer that delivers a comprehensive 'one-stop shop' experience — covering in-house design, manufacturing, warehousing, freight, and installation under one roof.
          </p>
          <p>
            Based in Foshan with a team of 350 skilled employees, we combine manufacturing strength with rigorous quality control to ensure every project is delivered on time, on spec, and to the highest standard.
          </p>
          <p>
            What sets us apart is our ability to calibrate. A flagship five-star hotel demands one standard; a purpose-built student accommodation block requires a different, equally considered, approach. We serve both — and everything in between.
          </p>
        </div>
        
        <div class="grid grid-cols-3 gap-6 mt-10">
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="1000">0</span>+</div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Projects Globally</p>
          </div>
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="350">0</span></div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Skilled Employees</p>
          </div>
          <div>
            <div class="stat-number mb-1" style="font-size: 2.2rem;"><span data-target="10">0</span>+</div>
            <p class="text-xs tracking-wide uppercase" style="color: var(--arte-mid);">Years Experience</p>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     TRACK RECORD
══════════════════════════════════════════════ -->
<section class="py-16" style="background: var(--arte-warm); border-top: 1px solid #E8E4DF; border-bottom: 1px solid #E8E4DF;">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-xl mb-10 fade-in">
      <p class="section-label mb-4">Track Record</p>
      <h2 class="heading-serif" style="font-size: clamp(1.8rem, 3vw, 2.5rem); color: var(--arte-charcoal);">
        Trusted by Leading<br><em style="color: var(--arte-blue);">Brands Worldwide</em>
      </h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Global Hotel Partners</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Partnered with leading international hotel brands including Hilton, Hyatt Regency, DoubleTree, and Sheraton — delivering FF&E solutions that meet the exacting standards of global hospitality operators.
        </p>
      </div>
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Landmark Overseas Projects</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Involved in significant international developments including Thames City in London and Malaysia's Opera House — demonstrating our capability to deliver complex, large-scale projects across borders.
        </p>
      </div>
      
      <div class="p-8" style="background: #fff; border: 1px solid #E8E4DF;">
        <div class="w-8 h-px mb-5" style="background: var(--arte-blue);"></div>
        <h3 class="heading-serif text-lg mb-3" style="color: var(--arte-charcoal);">Manufacturing Excellence</h3>
        <p class="text-xs leading-relaxed" style="color: #6B6B6B;">
          Based in Foshan — China's furniture manufacturing heartland — with 350 skilled employees and full in-house capabilities: design, production, QA, warehousing, freight, and installation.
        </p>
      </div>
      
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     VALUES
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-charcoal);">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="max-w-xl mb-16 fade-in">
      <p class="section-label mb-4" style="color: rgba(123,142,185,0.8);">Our Principles</p>
      <h2 class="heading-serif text-white" style="font-size: clamp(2.2rem, 4vw, 3.2rem);">
        The Values That<br><em style="color: var(--arte-blue-light);">Guide Every Project</em>
      </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px" style="background: rgba(255,255,255,0.06);">
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-gem text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Calibrated<br>Quality</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          We match material specification and craft to the project's purpose. Every brief receives exactly the right quality level — neither over-engineered nor under-served.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-pencil-ruler text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">True<br>Bespoke</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          We don't start from a catalogue. We start from your brand guidelines, your floor plans, and your vision. Every piece is designed specifically for its environment.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-clock text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Programme<br>Certainty</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          Opening dates are non-negotiable. Our project management infrastructure ensures on-time, on-spec, on-budget delivery — every time.
        </p>
      </div>
      
      <div class="p-8 fade-in" style="background: var(--arte-charcoal);">
        <div class="w-10 h-10 border flex items-center justify-center mb-6" style="border-color: rgba(123,142,185,0.3);">
          <i class="fas fa-handshake text-xs" style="color: var(--arte-blue);"></i>
        </div>
        <h3 class="heading-serif text-lg text-white mb-3">Long-Term<br>Partnership</h3>
        <p class="text-xs leading-relaxed" style="color: rgba(255,255,255,0.45);">
          Our best relationships span multiple projects and many years. We invest in understanding your business, so every subsequent project is faster and sharper.
        </p>
      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     DESIGN PHILOSOPHY
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: #ffffff;">
  <div class="max-w-7xl mx-auto px-8">
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      
      <!-- Image Column -->
      <div class="fade-in relative">
        <div style="position: relative; overflow: hidden; aspect-ratio: 4/5;">
          <img 
            src="https://sspark.genspark.ai/cfimages?u1=g0sKAoa%2B04FZpsWEMxvSSgrWgQbALS%2B%2FLNLwltCo%2Bj8iWL%2BTMe4n3ggjT%2BTgPRUePY8QJ7ydnH1vywXZsdV%2BopWXQnrPrGwA%2Fny7Fq3MbUuKil%2BafWiF6Dm6lYymV2zv4WJ38eEkXt73RjbKMCh6DZuUogrJJYMmp2kfCUok71sdXKxZ39GBvOEIcBlaH0k%3D&u2=HmFUJ7d8BqoZ0R3v&width=2560"
            alt="ARTé interior design philosophy — minimalist living space in cream tones"
            style="width: 100%; height: 100%; object-fit: cover; display: block;"
          />
          <div style="position: absolute; left: 0; top: 0; width: 4px; height: 100%; background: var(--arte-blue);"></div>
        </div>
        <div style="position: absolute; bottom: -1.5rem; right: 0; background: var(--arte-charcoal); padding: 1.5rem 2rem;">
          <p class="section-label" style="color: var(--arte-blue); margin-bottom: 0.25rem;">Our Craft</p>
          <p class="heading-serif text-white" style="font-size: 1.1rem;">Built to<br><em>Deliver</em></p>
        </div>
      </div>
      
      <!-- Text Column -->
      <div class="fade-in">
        <p class="section-label mb-4">Our Craft</p>
        <h2 class="mb-5" style="font-size: clamp(1.6rem, 2.8vw, 2.2rem); color: var(--arte-charcoal); line-height: 1.2; font-weight: 700; font-family: 'Inter', sans-serif;">
          Built to Deliver — <em style="font-style: italic;">Every Detail, Every Time</em>
        </h2>

        <hr style="border: none; border-top: 1px solid #e0dbd4; margin-bottom: 1.75rem;" />

        <div style="display: flex; flex-direction: column; gap: 1.5rem;">

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              We are, at heart, a furniture manufacturer. Design is part of what we do, but our real craft is turning our clients' designs into reality — built with precision, finished with care, delivered on time.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              Behind every piece is a factory, a team, and decades of know-how. Skilled people who take pride in their work. Engineers and project managers who understand that a great product is only half the promise — the other half is execution.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              That's where we stand apart. We don't just produce furniture. We deliver projects. Large, complex, multi-site projects — across cities, across continents — completed on schedule and to specification. From the first prototype to the final installation, we manage every stage so our clients don't have to worry.
            </p>
          </div>

          <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
            <div style="width: 2px; background: var(--arte-blue); flex-shrink: 0; margin-top: 0.3rem; height: 3rem;"></div>
            <p style="font-size: 0.95rem; line-height: 1.85; color: var(--arte-charcoal);">
              Wherever the project is in the world, we are ready. Same standards. Same discipline. Same result.
            </p>
          </div>

        </div>

        <div style="margin-top: 1.75rem; padding: 1.5rem 1.5rem; border-left: 3px solid var(--arte-blue); background: var(--arte-cream);">
          <p style="font-size: 0.95rem; line-height: 1.75; color: var(--arte-charcoal); font-style: italic;">
            "A beautiful design deserves a flawless build. Our job is to make sure it arrives — on time, on spec, and exactly as imagined."
          </p>
        </div>

      </div>
      
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PROCESS
══════════════════════════════════════════════ -->
<section class="py-24 md:py-32" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">

    <!-- Header -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 fade-in" style="align-items: end;">
      <div>
        <p class="section-label mb-4">How We Work</p>
        <h2 class="heading-serif" style="font-size: clamp(2.2rem, 4vw, 3.2rem); color: var(--arte-charcoal); line-height: 1.15;">
          From Brief to<br><em style="color: var(--arte-blue);">Built</em>
        </h2>
      </div>
      <div>
        <p style="font-size: 0.9rem; line-height: 1.85; color: var(--arte-mid); max-width: 520px;">
          We are a manufacturer. Most of our work is large B2B projects, and we respect the original designer's vision. Our job is to make it real — on time, on spec, anywhere in the world.
        </p>
        <p style="font-size: 0.9rem; line-height: 1.85; color: var(--arte-mid); max-width: 520px; margin-top: 1rem;">
          What makes that possible is communication. We sit between the sponsor and the contractor, and we keep everyone aligned from day one to handover. That is the role ARTé plays best — <strong style="color: var(--arte-charcoal); font-weight: 600;">the project manager who turns concept into reality.</strong>
        </p>
      </div>
    </div>

    <!-- Arrow Ribbon — Desktop -->
    <div class="hidden md:block mb-16 fade-in">
      <!-- Connecting line -->
      <div style="position: relative; display: flex; align-items: flex-start;">
        <!-- The continuous line sits behind the nodes -->
        <div style="position: absolute; top: 1.75rem; left: calc(10% + 1rem); right: calc(10% + 1rem); height: 1px; background: linear-gradient(to right, var(--arte-blue) 0%, rgba(123,142,185,0.25) 100%); z-index: 0;"></div>

        <!-- Step 1 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: #fff; font-weight: 500; letter-spacing: 0.05em;">01</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Listen</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Meet the property owner and designer. Understand the brief, budget, timeline, and standard expected. No assumptions.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 2 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">02</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Plan</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Translate design intent into a production plan. Drawings reviewed, materials sourced, samples approved before we cut a single piece.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 3 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">03</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Make</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Skilled craftspeople, tight QA at every stage, regular updates back to the design and project team.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 4 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">04</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Deliver</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Packing, shipping, customs, schedule — we handle the logistics. Wherever the site, the pieces arrive ready to install.</p>
        </div>

        <!-- Arrow -->
        <div style="padding-top: 1.4rem; color: rgba(123,142,185,0.5); font-size: 1rem; flex-shrink: 0;">›</div>

        <!-- Step 5 -->
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; z-index: 1;">
          <div style="width: 3.5rem; height: 3.5rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center; margin-bottom: 1.25rem;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--arte-blue); font-weight: 500; letter-spacing: 0.05em;">05</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.75rem;">Install</h3>
          <p style="font-size: 0.78rem; line-height: 1.7; color: var(--arte-mid); max-width: 140px;">Our local team joins yours on the ground. Phased installation, snagging resolved. Handover only when you are satisfied.</p>
        </div>

      </div>
    </div>

    <!-- Vertical Timeline — Mobile -->
    <div class="md:hidden mb-12 fade-in">
      <div style="position: relative; padding-left: 3rem;">
        <!-- Vertical line -->
        <div style="position: absolute; left: 1.6rem; top: 0.5rem; bottom: 0.5rem; width: 1px; background: linear-gradient(to bottom, var(--arte-blue), rgba(123,142,185,0.15));"></div>

        <!-- Step -->
        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: #fff;">01</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Listen</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Meet the property owner and designer. Understand the brief, budget, timeline, and standard expected. No assumptions.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">02</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Plan</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Translate design intent into a production plan. Drawings reviewed, materials sourced, samples approved before we cut a single piece.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">03</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Make</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Skilled craftspeople, tight QA at every stage, regular updates back to the design and project team.</p>
        </div>

        <div style="position: relative; margin-bottom: 2.25rem;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">04</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Deliver</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Packing, shipping, customs, schedule — we handle the logistics. Wherever the site, the pieces arrive ready to install.</p>
        </div>

        <div style="position: relative;">
          <div style="position: absolute; left: -1.85rem; top: 0; width: 2rem; height: 2rem; border-radius: 50%; background: #fff; border: 1.5px solid var(--arte-blue); display: flex; align-items: center; justify-content: center;">
            <span style="font-family: 'Cormorant Garamond', serif; font-size: 0.75rem; color: var(--arte-blue);">05</span>
          </div>
          <h3 style="font-family: 'Inter', sans-serif; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--arte-charcoal); margin-bottom: 0.4rem;">Install</h3>
          <p style="font-size: 0.8rem; line-height: 1.7; color: var(--arte-mid);">Our local team joins yours on the ground. Phased installation, snagging resolved. Handover only when you are satisfied.</p>
        </div>

      </div>
    </div>

    <!-- Closing quote -->
    <div class="fade-in" style="max-width: 680px; margin: 0 auto; text-align: center; padding-top: 2rem; border-top: 1px solid rgba(123,142,185,0.2);">
      <p class="heading-serif" style="font-size: clamp(1rem, 1.8vw, 1.25rem); color: var(--arte-charcoal); font-style: italic; line-height: 1.7;">
        "We don't just build furniture. We carry the project —<br>from the first conversation to the day the doors open."
      </p>
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8 text-center fade-in">
    <p class="text-xs tracking-widest uppercase mb-4" style="color: rgba(255,255,255,0.6);">From Property Owners to Designers — Trusted by Our Partners</p>
    <h2 class="heading-serif text-white mb-8" style="font-size: clamp(2rem, 3.5vw, 3rem);">
      Let's Build Something Together
    </h2>
    <a href="/contact" class="btn-outline-white">
      Get In Touch <i class="fas fa-arrow-right text-xs"></i>
    </a>
  </div>
</section>

${footerHTML()}`
}

function projectsPage() {
  const projects = [
    {
      title: 'The Meridian Grand',
      location: 'London, UK',
      locationKey: 'uk',
      sector: 'Luxury Hotel',
      tier: '5-Star Grade',
      scope: '320 bedrooms, lobby, F&B areas',
      img: 'https://sspark.genspark.ai/cfimages?u1=AaAgbX1DdalH6YaJ%2BJS51XAx5nKb4ygbX7J8lAVYQcJxpZgMHd6Cdio0cAo%2B2Pg29JNaBnAzjpX5DrclcO60bmijR45XCPv7CPMrOrP%2F3ghO7fmFf6YMF%2FBD1zmUjJrc6e27zF2C9EvNxWR0HnY%2BEzLXqG6yesKF%2Fw%3D%3D&u2=zkxm1jJH7xMOgwyG&width=2560',
    },
    {
      title: 'Apex Capital HQ',
      location: 'Hong Kong',
      locationKey: 'hk',
      sector: 'Corporate Office',
      tier: 'Premium Office',
      scope: '12 floors, boardrooms, breakout zones',
      img: 'https://sspark.genspark.ai/cfimages?u1=D%2BjO5IRrFzm726ACprdTAD3Ji8aoDy8%2F61TyTm56CcsP%2Byxh26ySw0E0j4%2B%2BKPw7HwWRznR%2BxZxGcb8ThRERqQXg3%2B43mG9GIVhps%2B9Hzsv0cLDezUQIugPS0tfUm243z3lPT4vARbjIG8Ey77ifQ1LKzGXyTw%3D%3D&u2=C9Sq6Z2fByU1MvH4&width=2560',
    },
    {
      title: 'Collegiate Quarter',
      location: 'Manchester, UK',
      locationKey: 'uk',
      sector: 'Student Housing',
      tier: 'Value Specification',
      scope: '850 study bedrooms + communal',
      img: 'https://sspark.genspark.ai/cfimages?u1=%2FqBTjNtnJ%2Bsc5V15aESGpO03%2Bal3R8Pz%2FqAEXJgze9PIlbvIhziSn6ftuEI3FUxME5w4G%2Bqk0XjRgy1i0iEzzGZK%2Bvb68zJyMc%2BLef3q6Q%3D%3D&u2=1IflmvVyVUdkhOJo&width=2560',
    },
    {
      title: 'Maison Lumière',
      location: 'Kuala Lumpur, Malaysia',
      locationKey: 'malaysia',
      sector: 'Serviced Apartments',
      tier: '5-Star Grade',
      scope: '140 fully furnished apartments',
      img: 'https://sspark.genspark.ai/cfimages?u1=vDoYq9DYLf7TZ5SaO4Aa0Dj%2FOy3Bw6lRMl029trWMCmKXrTgKLWze7RiY%2FcPv2RF4mBD3s63%2FeLwra464hccrayfsNfq6GBQJWmoVNTz1tUw0sX65aEOlAbyfVcZSkx10zcrcW46qwy83IQl9%2FvWnhr6wrBr8l4%3D&u2=vqoHJXUlMlIYOvnm&width=2560',
    },
    {
      title: 'Sunrise Wellbeing Village',
      location: 'Vancouver, Canada',
      locationKey: 'canada',
      sector: 'Senior Living',
      tier: 'Premium Care Spec',
      scope: '200 apartments + communal spaces',
      img: 'https://sspark.genspark.ai/cfimages?u1=lk3ATvy9Xa9%2BG2POrLF%2BbhrI3CjI%2B1OA9qEfby40Fqg1%2F2HSe5korg84vVDhaiZgZVCTDbnNbVxlsLRdyScursV38C8zl%2BbbboHJsKz9m4C33cPveEGfnq%2BiS%2FGPtj2uJowcoppGrURXd7xdkwU5Vppt4QrL0Bfaw6QkF2vxwnEXaH4%3D&u2=Y5nU771aqxuMMOEQ&width=2560',
    },
    {
      title: 'Nexus Tower Offices',
      location: 'Shenzhen, China',
      locationKey: 'china',
      sector: 'Corporate Office',
      tier: 'Premium Office',
      scope: 'Reception, 8 floors, executive suites',
      img: 'https://sspark.genspark.ai/cfimages?u1=pkixtz9WrUjaXNozkNCiMeVnX5benImBVXkoNjHbYGxT40qI8nY%2BfkDnfHFzHvgS8vRFfAvXgXwMgEnkbGf6iOr44giO2Pod0MNEaaduTNOH%2BXQUQ%2Bvxl5G2gReiCxM726AzujjdWg%3D%3D&u2=rhk3XtGlu285nbvX&width=2560',
    },
  ]

  const sectorMap: Record<string, string> = {
    'Luxury Hotel': 'hotel',
    'Corporate Office': 'office',
    'Student Housing': 'student',
    'Serviced Apartments': 'residential',
    'Senior Living': 'residential',
  }

  const cards = projects.map((p, i) => {
    const sectorKey = sectorMap[p.sector] || 'other'
    const locKey = (p as any).locationKey || 'other'
    return `
    <article class="project-card fade-in" data-sector="${sectorKey}" data-location="${locKey}" style="animation-delay: ${i * 0.1}s;">
      <div class="aspect-4-3 overflow-hidden relative">
        <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
        <div class="project-overlay"></div>
        <div class="absolute top-4 left-4 z-10">
          <span class="text-xs px-3 py-1 tracking-wider uppercase" style="background: rgba(123,142,185,0.85); color: #fff; font-size: 0.6rem; letter-spacing: 0.2em;">${p.sector}</span>
        </div>
      </div>
      <div class="p-6" style="background: #fff; border: 1px solid #E8E4DF; border-top: none;">
        <div class="arte-divider mb-4"></div>
        <h3 class="heading-serif text-xl mb-1">${p.title}</h3>
        <p class="text-xs mb-4" style="color: #6B6B6B;">
          <i class="fas fa-map-marker-alt text-xs mr-1" style="color: #7B8EB9;"></i> ${p.location}
        </p>
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs px-2 py-1" style="background: rgba(123,142,185,0.08); color: #7B8EB9;">${p.tier}</span>
        </div>
        <p class="text-xs" style="color: #6B6B6B;">${p.scope}</p>
      </div>
    </article>
  `
  }).join('')

  return headHTML('Projects', 'Browse ARTé\'s portfolio of bespoke furniture projects spanning luxury hotels, serviced apartments, offices, student housing and more.') + `

${navHTML('projects')}

<!-- ══════════════════════════════════════════════
     PROJECTS HERO
══════════════════════════════════════════════ -->
<section class="pt-32 pb-16 md:pt-40 md:pb-20" style="background: var(--arte-warm);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="max-w-2xl">
      <p class="section-label mb-5 fade-in">Our Portfolio</p>
      <h1 class="heading-serif mb-6 fade-in" style="font-size: clamp(2.8rem, 5vw, 5rem); color: var(--arte-charcoal);">
        Projects That<br><em style="color: var(--arte-blue);">Speak for Themselves</em>
      </h1>

      <!-- Selected projects notice -->
      <div class="fade-in mb-5" style="display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(123,142,185,0.1); border: 1px solid rgba(123,142,185,0.3); padding: 0.45rem 0.9rem;">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--arte-blue); flex-shrink: 0; display: inline-block;"></span>
        <span style="font-size: 0.65rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--arte-blue); font-family: 'Inter', sans-serif; font-weight: 500;">Selected Projects Only</span>
      </div>

      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 480px;">
        What you see here is a curated sample — not the full picture. We have completed over 1,000 projects across luxury hospitality, commercial, residential and social sectors, spanning multiple continents. We show selected work on this site; if you'd like to see more relevant to your brief, just ask.
      </p>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     FILTER BAR
══════════════════════════════════════════════ -->
<section style="background: #FAF9F7; border-bottom: 1px solid #E8E4DF;" class="sticky top-[72px] z-40">
  <div class="max-w-7xl mx-auto px-8 pt-4 pb-3">
    <!-- Sector row -->
    <div class="flex flex-wrap gap-3 items-center mb-3">
      <span class="text-xs tracking-widest uppercase" style="color: #6B6B6B; min-width: 4.5rem;">Sector:</span>
      <button onclick="setSector('all')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-active" data-sector-filter="all">All</button>
      <button onclick="setSector('hotel')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="hotel">Hotels</button>
      <button onclick="setSector('office')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="office">Offices</button>
      <button onclick="setSector('residential')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="residential">Residential</button>
      <button onclick="setSector('student')" class="filter-btn filter-sector text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-sector-filter="student">Student</button>
    </div>
    <!-- Divider -->
    <div style="height: 1px; background: #E8E4DF; margin-bottom: 0.65rem;"></div>
    <!-- Location row -->
    <div class="flex flex-wrap gap-3 items-center pb-1">
      <span class="text-xs tracking-widest uppercase" style="color: #6B6B6B; min-width: 4.5rem;">Location:</span>
      <button onclick="setLocation('all')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-active" data-location-filter="all">All</button>
      <button onclick="setLocation('china')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="china">China</button>
      <button onclick="setLocation('hk')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="hk">Hong Kong</button>
      <button onclick="setLocation('uk')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="uk">UK</button>
      <button onclick="setLocation('malaysia')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="malaysia">Malaysia</button>
      <button onclick="setLocation('canada')" class="filter-btn filter-location text-xs px-4 py-2 border tracking-wider uppercase transition-all filter-inactive" data-location-filter="canada">Canada</button>
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     PROJECTS GRID
══════════════════════════════════════════════ -->
<section class="py-16 md:py-24" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projects-grid">
      ${cards}
    </div>
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CTA
══════════════════════════════════════════════ -->
<section class="py-20" style="background: var(--arte-blue);">
  <div class="max-w-7xl mx-auto px-8 text-center fade-in">
    <p class="text-xs tracking-widest uppercase mb-4" style="color: rgba(255,255,255,0.6);">Your Project Could Be Next</p>
    <h2 class="heading-serif text-white mb-8" style="font-size: clamp(2rem, 3.5vw, 3rem);">
      Discuss Your Brief with Us
    </h2>
    <a href="/contact" class="btn-outline-white">
      Contact Our Team <i class="fas fa-arrow-right text-xs"></i>
    </a>
  </div>
</section>

<script>
let activeSector = 'all';
let activeLocation = 'all';

function applyFilters() {
  const cards = document.querySelectorAll('#projects-grid article');
  let visibleCount = 0;
  cards.forEach(card => {
    const sector = card.getAttribute('data-sector');
    const location = card.getAttribute('data-location');
    const sectorMatch = activeSector === 'all' || sector === activeSector;
    const locationMatch = activeLocation === 'all' || location === activeLocation;
    const show = sectorMatch && locationMatch;
    card.style.display = show ? '' : 'none';
    if (show) visibleCount++;
  });
  let emptyMsg = document.getElementById('no-projects-msg');
  if (!emptyMsg) {
    emptyMsg = document.createElement('p');
    emptyMsg.id = 'no-projects-msg';
    emptyMsg.style.cssText = 'color:#6B6B6B; font-size:0.85rem; grid-column:1/-1; padding:40px 0; text-align:center;';
    emptyMsg.textContent = 'No projects match this combination. More coming soon.';
    document.getElementById('projects-grid').appendChild(emptyMsg);
  }
  emptyMsg.style.display = visibleCount === 0 ? '' : 'none';
}

function setSector(filter) {
  activeSector = filter;
  document.querySelectorAll('.filter-sector').forEach(btn => {
    const isActive = btn.getAttribute('data-sector-filter') === filter;
    btn.classList.toggle('filter-active', isActive);
    btn.classList.toggle('filter-inactive', !isActive);
  });
  applyFilters();
}

function setLocation(filter) {
  activeLocation = filter;
  document.querySelectorAll('.filter-location').forEach(btn => {
    const isActive = btn.getAttribute('data-location-filter') === filter;
    btn.classList.toggle('filter-active', isActive);
    btn.classList.toggle('filter-inactive', !isActive);
  });
  applyFilters();
}
</script>

${footerHTML()}`
}

function contactPage() {
  return headHTML('Contact', 'Get in touch with ARTé to discuss your B2B furniture project — hotels, offices, student housing and more.') + `

${navHTML('contact')}

<!-- ══════════════════════════════════════════════
     CONTACT HERO
══════════════════════════════════════════════ -->
<section style="background: var(--arte-warm); overflow: hidden;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; min-height: 480px;">
    
    <!-- Left: Text -->
    <div style="padding: clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 4rem) clamp(3rem, 5vw, 5rem) clamp(2rem, 6vw, 5rem); display: flex; flex-direction: column; justify-content: center;">
      <p class="section-label mb-5 fade-in">Get In Touch</p>
      <h1 class="heading-serif mb-6 fade-in" style="font-size: clamp(2.4rem, 4vw, 4.2rem); color: var(--arte-charcoal); line-height: 1.1;">
        Let's Build<br><em style="color: var(--arte-blue);">Something</em><br>Together
      </h1>
      <p class="text-sm leading-relaxed fade-in" style="color: var(--arte-mid); max-width: 420px;">
        Whether you're a hotel group with a new opening, a developer planning a large residential scheme, or an individual seeking truly exceptional furniture — we'd love to hear from you.
      </p>
    </div>
    
    <!-- Right: Photo -->
    <div style="position: relative; overflow: hidden; min-height: 420px;">
      <img 
        src="https://sspark.genspark.ai/cfimages?u1=R3UY4ENbwTmy2hRh78BK2ZMhJf0iirp9I6aGepDXVh2dXIl%2Fcgj8GIu9snJ8WXTXzZH927U%2F1ABQI6VJt0sZCfoCqttxP1qj%2B5Kcrm8vXVq4OdWrTBq70pQ%2FPk%2FcakcDOR%2BLmbsgd2AvwKDq3AXDgw%3D%3D&u2=tLGz5GVswlVdey0x&width=2560"
        alt="Bespoke luxury bedroom interior — ARTé Living"
        style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center;"
      />
      <!-- Subtle gradient blending left edge into cream -->
      <div style="position: absolute; inset: 0; background: linear-gradient(to right, var(--arte-warm) 0%, transparent 18%); pointer-events: none;"></div>
    </div>
    
  </div>
</section>

<!-- ══════════════════════════════════════════════
     CONTACT LAYOUT
══════════════════════════════════════════════ -->
<section class="py-16 md:py-24" style="background: var(--arte-cream);">
  <div class="max-w-7xl mx-auto px-8">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <!-- Contact Form -->
      <div class="fade-in">
        <p class="section-label mb-6">Send an Enquiry</p>
        
        <form id="contact-form" class="space-y-8">
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label class="form-label block mb-2">First Name *</label>
              <input type="text" name="firstName" placeholder="Your first name" class="form-input" required>
            </div>
            <div>
              <label class="form-label block mb-2">Last Name *</label>
              <input type="text" name="lastName" placeholder="Your last name" class="form-input" required>
            </div>
          </div>
          
          <div>
            <label class="form-label block mb-2">Company / Organisation *</label>
            <input type="text" name="company" placeholder="Hotel group, developer, or company name" class="form-input" required>
          </div>
          
          <div>
            <label class="form-label block mb-2">Email Address *</label>
            <input type="email" name="email" placeholder="your@company.com" class="form-input" required>
          </div>
          
          <div>
            <label class="form-label block mb-2">Phone Number</label>
            <input type="tel" name="phone" placeholder="+44 (0) 20..." class="form-input">
          </div>
          
          <div>
            <label class="form-label block mb-2">Project Type *</label>
            <select name="projectType" class="form-input" required style="cursor: pointer;">
              <option value="" disabled selected>Select sector...</option>
              <option value="luxury-hotel">Luxury Hotel / Resort</option>
              <option value="serviced-apartment">Serviced Apartments</option>
              <option value="office">Corporate Office</option>
              <option value="student-housing">Student Housing</option>
              <option value="senior-living">Senior / Care Living</option>
              <option value="private-residence">Private Residence</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label class="form-label block mb-2">Estimated Number of Units / Rooms</label>
            <input type="text" name="scale" placeholder="e.g. 200 bedrooms, 5 floors..." class="form-input">
          </div>
          
          <div>
            <label class="form-label block mb-2">Tell Us About Your Project *</label>
            <textarea name="message" rows="5" placeholder="Share your vision, timeline, and any specific requirements..." class="form-input resize-none" required style="border-bottom: 1px solid var(--arte-border);"></textarea>
          </div>
          
          <div>
            <button type="submit" class="btn-primary w-full justify-center" id="submit-btn">
              Send Enquiry <i class="fas fa-arrow-right text-xs"></i>
            </button>
          </div>
          
          <p class="text-xs" style="color: var(--arte-mid);">We respond to all enquiries within one business day.</p>
          
        </form>
        
        <!-- Success message -->
        <div id="success-msg" class="hidden p-6 border mt-4" style="border-color: var(--arte-blue); background: rgba(123,142,185,0.06);">
          <div class="flex items-start gap-3">
            <i class="fas fa-check-circle mt-0.5" style="color: var(--arte-blue);"></i>
            <div>
              <p class="text-sm font-medium mb-1" style="color: var(--arte-charcoal);">Enquiry Received</p>
              <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">Thank you for getting in touch. A member of our team will contact you within one business day.</p>
            </div>
          </div>
        </div>
        
      </div>
      
      <!-- Info Sidebar -->
      <div class="fade-in">
        
        <!-- Direct Contact -->
        <div class="p-8 mb-6" style="background: var(--arte-warm); border: 1px solid var(--arte-border);">
          <p class="section-label mb-6">Direct Contact</p>
          
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 border flex items-center justify-center flex-shrink-0" style="border-color: var(--arte-blue);">
                <i class="fas fa-envelope text-xs" style="color: var(--arte-blue);"></i>
              </div>
              <div>
                <p class="form-label mb-1">Email</p>
                <a href="mailto:enquiries@arte-living.com" class="text-sm hover:underline" style="color: var(--arte-charcoal);">enquiries@arte-living.com</a>
              </div>
            </div>
            
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 border flex items-center justify-center flex-shrink-0" style="border-color: var(--arte-blue);">
                <i class="fas fa-phone text-xs" style="color: var(--arte-blue);"></i>
              </div>
              <div>
                <p class="form-label mb-1">Phone / WhatsApp</p>
                <a href="tel:+85256061921" class="text-sm hover:underline" style="color: var(--arte-charcoal);">+852 5606 1921</a>
                <div class="mt-1">
                  <a href="https://wa.me/85256061921" target="_blank" rel="noopener"
                     class="inline-flex items-center gap-1.5 text-xs px-3 py-1 transition-all"
                     style="background: rgba(37,211,102,0.1); color: #25D366; border: 1px solid rgba(37,211,102,0.3); border-radius: 2px;">
                    <i class="fab fa-whatsapp text-sm"></i> Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
            

          </div>
        </div>
        
        <!-- What to Expect -->
        <div class="p-8" style="border: 1px solid var(--arte-border);">
          <p class="section-label mb-6">What Happens Next</p>
          <div class="space-y-5">
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">01</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Initial Response</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">We review your brief and respond within one business day to confirm receipt and next steps.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">02</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Discovery Call</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">A 30-minute call with our project team to understand your vision, budget, and timeline in depth.</p>
              </div>
            </div>
            <div class="flex gap-4">
              <span class="heading-serif text-xl flex-shrink-0" style="color: var(--arte-blue);">03</span>
              <div>
                <p class="text-xs font-medium tracking-wide mb-1" style="color: var(--arte-charcoal);">Proposal</p>
                <p class="text-xs leading-relaxed" style="color: var(--arte-mid);">A tailored proposal including concept direction, programme outline, and indicative investment range.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  </div>
</section>

<script>
document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin text-xs mr-2"></i> Sending...';
  btn.disabled = true;
  
  const data = {};
  new FormData(this).forEach((v, k) => data[k] = v);
  
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if (result.success) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('success-msg').classList.remove('hidden');
    }
  } catch(err) {
    btn.innerHTML = 'Send Enquiry <i class="fas fa-arrow-right text-xs"></i>';
    btn.disabled = false;
  }
});
</script>

${footerHTML()}`
}

export default app
