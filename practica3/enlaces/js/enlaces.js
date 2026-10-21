// Añadir la clase "externo" a todos los enlaces cuyo href contiene "://"
document.querySelectorAll('a[href*="://"]').forEach(a => a.classList.add('externo'));
