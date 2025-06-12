async function setLanguage(lang) {
  const response = await fetch(`lang/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    }
  });

  localStorage.setItem('lang', lang); // guardar selección
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'es';
  setLanguage(savedLang);

  document.querySelectorAll('[data-lang-switch]').forEach(button => {
    button.addEventListener('click', () => {
      const lang = button.getAttribute('data-lang-switch');
      setLanguage(lang);
    });
  });
});
