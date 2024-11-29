import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} typesCard Ejemplo ['C', 'D', 'H', 'S'];
 * @param {Array<String>} typesSpecial Ejemplo ['A', 'J', 'Q', 'K'];
 * @returns {Array<String>} retorna un arreglo de cartas
 */
export const createDeck = (typesCard, typesSpecial) => {
    if (!typesCard || typesCard.length <= 0) throw new Error('Tipos de carta es obligatorio como arreglo de string')
    if (!typesSpecial || typesSpecial.length <= 0) throw new Error('Tipos de carta especiales es obligatorio como arreglo de string')

    let deck = []
    for (let i = 2; i <= 10; i++) {
        for (let tipo of typesCard) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of typesCard) {
        for (let esp of typesSpecial) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

