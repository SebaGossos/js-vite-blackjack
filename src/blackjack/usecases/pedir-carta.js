/**
 * RETORNA 1 CARTA DEL DOCK Y LA ELIMINA
 * @param {Array<string>} deck Ejemplo: ['A♥', '2♥', '3♥']
 * @returns {String} Ejemplo: '3♥'
 */

// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {


    if ( !deck || deck.length === 0 ) {
        throw new Error('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}
