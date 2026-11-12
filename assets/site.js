// Language: the visitor's pick, else the browser's (Indonesian for id-*, English otherwise). Loaded in <head> so the
// other language never flashes.
(() => {
  const root = document.documentElement;
  const set = l => { root.lang = l; root.dataset.lang = l; };
  set(localStorage.getItem('lang') || (navigator.language.toLowerCase().startsWith('id') ? 'id' : 'en'));
  document.addEventListener('click', e => {
    if (!e.target.closest('.pill')) return;
    const l = root.lang === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', l);
    set(l);
  });
})();
