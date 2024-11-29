
/**
 * funcion para crear una carta HTML
 * @param {String} card 
 */
export const createCardHTML = (card) => {
    if (!card) throw new Error('Necesito la card como argumento')
    // <img class="card" src="assets/cards/2C.png">
    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${card}.png`; //3H, JD
    imgCard.classList.add('carta');
    return imgCard
};