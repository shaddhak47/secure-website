/* main.js — no inline scripts; loaded as an external file to comply with CSP */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     1. Update copyright year dynamically
  ------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     2. Populate the security checklist in the About section
  ------------------------------------------------------------------ */
  const checklistItems = [
    'HTTPS enforced via 301 redirect',
    'TLS certificate (Let\'s Encrypt via Netlify)',
    'Content Security Policy (CSP)',
    'HTTP Strict Transport Security (HSTS)',
    'X-Frame-Options: DENY',
    'X-Content-Type-Options: nosniff',
    'Referrer-Policy configured',
    'Permissions-Policy restricts APIs',
    'No inline scripts or styles',
    'External resources blocked by CSP',
  ];

  const listEl = document.getElementById('checklist');
  if (listEl) {
    checklistItems.forEach(function (item) {
      const li = document.createElement('li');
      const check = document.createElement('span');
      check.className = 'check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✔';
      const text = document.createTextNode(item);
      li.appendChild(check);
      li.appendChild(text);
      listEl.appendChild(li);
    });
  }

  /* ------------------------------------------------------------------
     3. Smooth active-link highlighting on scroll
  ------------------------------------------------------------------ */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-list a[href^="#"]');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (link) {
              link.classList.toggle(
                'active',
                link.getAttribute('href') === '#' + entry.target.id
              );
            });
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
