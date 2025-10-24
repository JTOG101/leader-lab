// year
document.getElementById('year').textContent = new Date().getFullYear();
// (Optional) placeholder for GA4 click events later
document.querySelectorAll('[data-cta]').forEach(el=>{
 el.addEventListener('click', e=>{
   // window.gtag && gtag('event','cta_click',{cta: el.dataset.cta}); // will work after GA is added
 });
});
