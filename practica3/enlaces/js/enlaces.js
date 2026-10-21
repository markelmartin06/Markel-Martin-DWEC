// Seleccionar todos los enlaces cuyo href contiene "://"
const externos = document.querySelectorAll('a[href*="://"]');
// Pintar cada enlace externo de naranja
externos.forEach(enlace => {
     enlace.style.color = 'orange';
});
