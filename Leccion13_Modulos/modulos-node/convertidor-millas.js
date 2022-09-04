/*Funcion para convertir las millas en kilometros*/

function convierteMillas(millas) {
  return Math.round(millas * 1.60934);
}

const ejemplo = 'test';
/*Exportar modulos en node*/

module.exports.convierteMillas = convierteMillas;

/* La segunda forma de exportar un modulo*/

module.exports.convierteKm = function (millas) {
  return Math.round(millas / 1.60934);
};
