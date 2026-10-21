(() => {
  'use strict';
  const root = document.querySelector('.profile-site');
  if (!root) return;
  const sidebar = document.querySelector('.sidebar .profile_box');
  const sidebarNav = document.createElement('nav');
  sidebarNav.className = 'editorial-nav';
  sidebarNav.setAttribute('aria-label', 'Profile sections');
  const seen = new Set();
  document.querySelectorAll('.masthead a[href]').forEach(link => {
    const url = new URL(link.href, location.href);
    if (!url.hash || link.textContent.trim() === 'Homepage' || seen.has(url.hash)) return;
    seen.add(url.hash);
    const item = link.cloneNode(true);
    if (item.textContent.trim() === 'Educations') item.textContent = 'Education';
    sidebarNav.appendChild(item);
  });
  if (sidebar) sidebar.appendChild(sidebarNav);
  document.querySelectorAll('.greedy-nav button').forEach(button => button.setAttribute('aria-label', 'Open navigation menu'));
  const panels = Array.from(root.querySelectorAll('[data-view]'));
  const views = {'about-me':'home', '-news':'home', '-educations':'education', '-publications':'publications', '-experience':'research', '-research-experience':'research', '-honors-and-awards':'honors'};
  function render(moveFocus) {
    const anchor = decodeURIComponent(location.hash.slice(1));
    const view = views[anchor] || 'home';
    panels.forEach(panel => { panel.hidden = panel.dataset.view !== view; });
    document.documentElement.classList.add('spotlight-ready');
    document.querySelectorAll('.masthead a[href], .editorial-nav a[href]').forEach(link => {
      const target = new URL(link.href, location.href).hash.slice(1);
      const active = target === (anchor || 'about-me') || (views[target] === view && view !== 'home');
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (moveFocus) {
      const target = anchor === '-news' ? document.getElementById('-news') : panels.find(panel => !panel.hidden);
      const heading = target && (target.querySelector('h1') || target);
      if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({preventScroll:true}); }
      if (anchor === '-news') target.scrollIntoView({block:'start'});
      else window.scrollTo({top:0, behavior:'instant'});
    }
  }
  // Capture navigation before the theme's legacy smooth-scroll handler.
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.target || link.hasAttribute('download')) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || url.pathname !== location.pathname || !views[url.hash.slice(1)]) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    if (url.hash !== location.hash) history.pushState(null, '', url.hash);
    render(true);
  }, true);
  window.addEventListener('hashchange', () => render(true));
  window.addEventListener('popstate', () => render(true));
  render(false);
})();
