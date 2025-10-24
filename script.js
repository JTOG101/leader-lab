// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// CTA click event placeholder for GA4 (after you add gtag)
document.querySelectorAll('[data-cta]').forEach(el=>{
  el.addEventListener('click', ()=>{
    if (window.gtag) gtag('event','cta_click', { cta: el.dataset.cta });
  });
});
