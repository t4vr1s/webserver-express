const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
  const palabras = texto.split(' ');
  palabras.forEach((palabra, index) => {
    palabras[index] =
      palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
  });
  return palabras.join(' ');
});
