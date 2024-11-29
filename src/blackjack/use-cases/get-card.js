/**
* Esta funcion permite obtener una carta y quitarla del deck
* @param {Array<String>} deck Ejemplo: [... 2C,3C,4C]
* @returns {String} Ejemplo: 2C
*/

export const getCard = (deck) => {

    if (deck.length === 0) {
        throw 'No hay cartas en el deck';
    }
    const card = deck.pop();
    return card;
}

