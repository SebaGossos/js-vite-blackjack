/**
 * RETORNA EL VALOR DE LA CARTA SEGUN LOS REGLAMENTOS DEL JUEGO
 * @param {String} carta AH O 10S O 2D, etc.
 * @returns {Number} El valor de la carta Ejemplo: 11 o 10 o 3, etc.
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
