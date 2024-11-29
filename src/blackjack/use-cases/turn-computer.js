import { getCard, valueCard, createCardHTML } from "./";


/**Funcion que permite que la computadora ejecute su comportamiento
 * 
 * @param {Number} pointsMinim 
 * @param {HTMLElement} pointsHTML
 * @param {HTMLElement} divCardComputer
 * @param {Array<String>} deck 
 */
export const turnComputer = (pointsMinim, pointsHTML, divCardComputer, deck = []) => {

    if (!pointsMinim) throw new Error('Puntos minimos son necesarios');
    if (!deck) throw new Error('El Deck es necesario');

    let pointsComputer = 0;

    do {
        const card = getCard(deck);

        pointsComputer = pointsComputer + valueCard(card);
        pointsHTML.innerText = pointsComputer;


        const imgCard = createCardHTML(card)
        divCardComputer.append(imgCard);

        if (pointsMinim > 21) {
            break;
        }

    } while ((pointsComputer < pointsMinim) && (pointsMinim <= 21));

    setTimeout(() => {
        if (pointsComputer === pointsMinim) {
            alert('Nadie gana :(');
        } else if (pointsMinim > 21) {
            alert('Computadora gana')
        } else if (pointsComputer > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100);
}

