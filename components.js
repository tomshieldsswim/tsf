// Shared components for TSF site
// Called on every page: Components.init()

const Components = {
  nav: (activePage = '') => `
    <nav>
      <a href="index.html" class="nav-logo">
        <span class="nav-logo-name">Tom Shields Foundation</span>
        <span class="nav-logo-tag">Building Resilience · Changing Minds · Saving Lives</span>
      </a>
      <ul class="nav-links">
        <li class="nav-dropdown">
          <a href="blog.html" ${activePage==='blog'?'class="active"':''}>Resources ▾</a>
          <div class="nav-dropdown-menu">
            <a href="blog.html#athletes">🏊 Athletes</a>
            <a href="blog.html#coaches">🎽 Coaches</a>
            <a href="blog.html#parents">👨‍👩‍👧 Parents</a>
            <a href="blog.html#schools">🏫 Schools & Organizations</a>
          </div>
        </li>
        <li><a href="story.html" ${activePage==='story'?'class="active"':''}>Tom's Story</a></li>
        <li><a href="mission.html" ${activePage==='mission'?'class="active"':''}>Our Mission</a></li>
        <li><a href="events.html" ${activePage==='events'?'class="active"':''}>Events</a></li>
        <li><a href="blog.html" ${activePage==='blog'?'class="active"':''}>Blog</a></li>
        <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
        <li><a href="donate.html" class="nav-cta">Donate</a></li>
      </ul>
    </nav>
    <style>
      .nav-dropdown { position: relative; }
      .nav-dropdown-menu {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: var(--navy);
        border-top: 2px solid var(--red);
        min-width: 220px;
        z-index: 200;
        padding: 8px 0;
      }
      .nav-dropdown:hover .nav-dropdown-menu { display: flex; flex-direction: column; }
      .nav-dropdown-menu a {
        padding: 12px 20px;
        font-size: 13px;
        color: rgba(255,255,255,0.6) !important;
        text-decoration: none;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 10px;
        transition: background 0.15s, color 0.15s;
        text-transform: none !important;
      }
      .nav-dropdown-menu a:hover {
        background: rgba(255,255,255,0.05);
        color: white !important;
      }
    </style>
  `,

  footer: () => `
    <footer>
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html" class="nav-logo-name">Tom Shields Foundation</a>
          <span class="nav-logo-tag">Building Resilience · Changing Minds · Saving Lives</span>
          <p>A California 501(c)(3) nonprofit delivering mental health education to youth athletes through community swim events and workshops.</p>
          <p style="font-size:11px;color:rgba(255,255,255,0.2);">Santa Cruz, CA · staff@tomshieldsfoundation.org</p>
        </div>
        <div class="footer-col">
          <h4>Foundation</h4>
          <ul>
            <li><a href="mission.html">Our Mission</a></li>
            <li><a href="story.html">Tom's Story</a></li>
            <li><a href="mission.html#workshop">The Workshop</a></li>
            <li><a href="contact.html">Board & Leadership</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Get Involved</h4>
          <ul>
            <li><a href="events.html">Swim-a-Thons</a></li>
            <li><a href="events.html">Charity Meets</a></li>
            <li><a href="donate.html">Donate</a></li>
            <li><a href="contact.html">Book a Workshop</a></li>
            <li><a href="contact.html">Sponsor an Event</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="blog.html">For Coaches</a></li>
            <li><a href="blog.html">For Parents</a></li>
            <li><a href="contact.html">Crisis Resources</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Tom Shields Foundation. All rights reserved.</p>
        <span class="footer-501">Federal Tax ID pending · California 501(c)(3)</span>
      </div>
    </footer>
  `,

  init: (activePage = '') => {
    document.getElementById('nav-placeholder').innerHTML = Components.nav(activePage);
    document.getElementById('footer-placeholder').innerHTML = Components.footer();
  }
};
