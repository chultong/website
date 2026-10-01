(() => {
  const header = document.querySelector('.site-header');
  const progress = document.querySelector('.scroll-progress span');
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const main = document.querySelector('main');
  const footer = document.querySelector('.site-footer');
  const navLinks = [...document.querySelectorAll('[data-nav-link]')];
  const sections = [...document.querySelectorAll('[data-nav-section]')];
  const desktop = window.matchMedia('(min-width: 961px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const navGroups = [...document.querySelectorAll('.nav-group')];
  const mobileToggles = [...document.querySelectorAll('.mobile-submenu-toggle')];
  const tabs = [...document.querySelectorAll('.market-tab')];
  const panels = [...document.querySelectorAll('.market-panel')];

  const setDisclosure = (trigger, open) => {
    const panel = document.getElementById(trigger.getAttribute('aria-controls'));
    trigger.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    const label = trigger.getAttribute('aria-label');
    if (label) trigger.setAttribute('aria-label', label.replace(open ? '열기' : '닫기', open ? '닫기' : '열기'));
  };

  const closeDropdowns = (except = null) => {
    navGroups.forEach((group) => {
      if (group !== except) setDisclosure(group.querySelector('[data-dropdown-trigger]'), false);
    });
  };

  navGroups.forEach((group) => {
    const trigger = group.querySelector('[data-dropdown-trigger]');
    const panel = group.querySelector('.nav-dropdown');
    let restoringFocus = false;

    trigger.addEventListener('focus', () => {
      if (!desktop.matches || restoringFocus) return;
      closeDropdowns(group);
      setDisclosure(trigger, true);
    });

    group.addEventListener('pointerenter', (event) => {
      if (!desktop.matches || event.pointerType !== 'mouse') return;
      closeDropdowns(group);
      setDisclosure(trigger, true);
    });

    group.addEventListener('pointerleave', () => {
      if (!group.contains(document.activeElement)) setDisclosure(trigger, false);
    });

    group.addEventListener('focusout', (event) => {
      if (!group.contains(event.relatedTarget)) setDisclosure(trigger, false);
    });

    group.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' && !event.target.closest('.nav-dropdown')) {
        event.preventDefault();
        closeDropdowns(group);
        setDisclosure(trigger, true);
        panel.querySelector('a').focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        restoringFocus = true;
        setDisclosure(trigger, false);
        trigger.focus();
        restoringFocus = false;
      }
    });
  });

  document.addEventListener('pointerdown', (event) => {
    if (!event.target.closest('.nav-group')) closeDropdowns();
  });

  const closeMenu = (returnFocus = false) => {
    setDisclosure(menuButton, false);
    header.classList.remove('menu-active');
    document.body.classList.remove('menu-open');
    main.inert = false;
    footer.inert = false;
    mobileToggles.forEach((button) => setDisclosure(button, false));
    if (returnFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    if (!mobileMenu.hidden) {
      closeMenu(true);
      return;
    }
    closeDropdowns();
    setDisclosure(menuButton, true);
    header.classList.add('menu-active');
    document.body.classList.add('menu-open');
    main.inert = true;
    footer.inert = true;
    mobileMenu.querySelector('a').focus();
  });

  document.querySelector('.mobile-menu-close').addEventListener('click', () => closeMenu(true));

  mobileToggles.forEach((button) => {
    button.addEventListener('click', () => {
      setDisclosure(button, button.getAttribute('aria-expanded') !== 'true');
    });
  });

  document.addEventListener('keydown', (event) => {
    if (mobileMenu.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key !== 'Tab') return;
    const items = [...mobileMenu.querySelectorAll('a, button')]
      .filter((element) => element.getClientRects().length > 0);
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  desktop.addEventListener('change', () => {
    closeMenu();
    closeDropdowns();
  });

  const activateTab = (tab) => {
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.panel === tab.dataset.target;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex;
      if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') nextIndex = 0;
      if (event.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex === undefined) return;
      event.preventDefault();
      activateTab(tabs[nextIndex]);
      tabs[nextIndex].focus();
    });
  });

  const showTarget = (hash, { focus = false, smooth = false } = {}) => {
    const target = document.getElementById(hash.slice(1));
    if (!target) return false;
    const panel = target.closest('.market-panel');
    if (panel) activateTab(tabs.find((tab) => tab.dataset.target === panel.dataset.panel));
    target.querySelectorAll('.will-reveal').forEach((element) => element.classList.remove('will-reveal'));
    target.classList.remove('will-reveal');
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: smooth && !reducedMotion.matches ? 'smooth' : 'instant', block: 'start' });
      if (focus) {
        if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      }
    });
    return true;
  };

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const hash = link.getAttribute('href');
    if (!hash?.startsWith('#') || hash.length < 2 || !document.getElementById(hash.slice(1))) return;
    event.preventDefault();
    closeDropdowns();
    closeMenu();
    if (window.location.hash !== hash) history.pushState(null, '', hash);
    showTarget(hash, { focus: true, smooth: true });
  });

  window.addEventListener('hashchange', () => showTarget(window.location.hash));
  window.addEventListener('popstate', () => showTarget(window.location.hash || '#top'));
  if (window.location.hash) showTarget(window.location.hash);

  let scrollScheduled = false;
  const updateScrollState = () => {
    scrollScheduled = false;
    const scrollTop = window.scrollY;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    header.classList.toggle('scrolled', scrollTop > 24);
    progress.style.transform = 'scaleX(' + (scrollable > 0 ? Math.min(1, scrollTop / scrollable) : 0) + ')';
    const point = scrollTop + header.offsetHeight + Math.min(160, window.innerHeight * 0.2);
    const current = document.body.dataset.page || sections.filter((section) => section.offsetTop <= point).at(-1)?.dataset.navSection;
    navLinks.forEach((link) => {
      const active = link.dataset.navLink === current;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', new URL(link.href).pathname === window.location.pathname ? 'page' : 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const scheduleScrollUpdate = () => {
    if (scrollScheduled) return;
    scrollScheduled = true;
    requestAnimationFrame(updateScrollState);
  };
  updateScrollState();
  window.addEventListener('scroll', scheduleScrollUpdate, { passive: true });
  window.addEventListener('resize', scheduleScrollUpdate, { passive: true });

  if ('IntersectionObserver' in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('will-reveal');
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -32px 0px', threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach((element) => {
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('will-reveal');
      observer.observe(element);
    });
  }

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('.copy-status');
  copyButton?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyButton.dataset.email);
      copyStatus.textContent = '이메일 주소를 복사했습니다.';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('.contact-email'));
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent = '선택된 주소를 복사해주세요.';
    }
  });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
