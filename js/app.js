// SELECT THE CARD BUTTONS AND THE MODAL INNER AND OUTER ELEMENTS
const cardButtons = document.querySelectorAll('.card button'); // selects all buttons within elements with the class 'card'
const modalInner = document.querySelector('.modal-inner'); // selects the element with the class 'modal-inner'
const modalOuter = document.querySelector('.modal-outer'); // selects the element with the class 'modal-outer'

// DEFINE THE HANDLE CARD BUTTONS CLICK FUNCTION
function handleCardButtonsClick(e) {
    // SELECT THE BUTTON AND CARD THAT WAS CLICKED
    const button = e.currentTarget; // the button that was clicked
    const card = button.closest('.card'); // the closest element with the class 'card' to the button that was clicked

    // SELECT THE CARD'S TITLE, IMAGE SOURCE, AND DESCRIPTION
    const cardTitle = card.querySelector('h2').textContent; // the title of the card
    const imgSrc = card.querySelector('img').src; // the image source of the card
    const desc = card.dataset.description; // the description of the card (from the 'data-description' attribute)

    // UPDATE THE MODAL INNER WITH THE CARD'S IMAGE AND DESCRIPTION
    modalInner.innerHTML = `
        <img width="600" height="600" src="${imgSrc.replace('200', '600')}" alt="${cardTitle}" />
        <p>${desc}</p>
    `;

    // ADD THE 'OPEN' CLASS TO THE MODAL OUTER TO DISPLAY IT
    modalOuter.classList.add('open');
}

// DEFINE THE CLOSE MODAL FUNCTION
function closeModal() {
    // REMOVE THE 'OPEN' CLASS FROM THE MODAL OUTER TO HIDE IT
    modalOuter.classList.remove('open');
}

// ADD AN EVENT LISTENER TO THE MODAL OUTER TO CLOSE THE MODAL WHEN CLICKED OUTSIDE THE MODAL INNER
modalOuter.addEventListener('click', function(e) {
    // CHECK IF THE USER CLICKED OUTSIDE THE MODAL INNER
    const isOutside = !e.target.closest('.modal-inner'); // Make a boolean, to know if isOutside is true or false

    // IF THE USER CLICKED OUTSIDE THE MODAL INNER, CLOSE THE MODAL
    if (isOutside) {
        closeModal();
    }
});

// ADD AN EVENT LISTENER TO THE WINDOW TO CLOSE THE MODAL WHEN THE 'ESCAPE' KEY IS PRESSED
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// LOOP THROUGH EACH CARD BUTTON AND ADD AN EVENT LISTENER TO IT
cardButtons.forEach(button => button.addEventListener('click', handleCardButtonsClick));