function addStyles(element, cssObj) {
  Object.keys(cssObj).forEach((key) => {
    element.style[key] = cssObj[key];
  });
}

function changeMenu() {
  const menuWrapper = document.querySelector('.btn-group-vertical');

  addStyles(menuWrapper, {
    flexDirection: 'row',
    alignItems: 'center',
  });

  const menuOptions = menuWrapper.querySelectorAll('button');
  menuOptions.forEach((menuOption) => {
    addStyles(menuOption, {
      whiteSpace: 'nowrap',
      borderRadius: '4px',
      marginRight: '5px',
    });
  });
}

function changeHeader() {
  const headerWrapper = document.querySelector('.jumbotron');

  addStyles(headerWrapper, {
    backgroundColor: '#6c757d',
    marginTop: '20px',
    textAlign: 'right',
    color: '#fff',
  });

  const learnMoreBtn = headerWrapper.querySelector('.btn-primary');
  addStyles(learnMoreBtn, {
    backgroundColor: '#28a745',
    borderColor: '#28a745',
  });
}

function changeCards() {
  // Cada item nesse array representa a futura posição de cada card
  // com base na versão default, então o card 'animais' vai pra posição 2,
  // 'tecnologia' pra 4 e assim sucessivamente.
  const cardsNewOrderPosition = [2, 4, 3, 1];
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    const title = card.querySelector('.card-title').innerText;

    if (title.includes('Animais')) {
      const goSomeWhereBtn = card.querySelector('.btn-primary');

      addStyles(goSomeWhereBtn, {
        backgroundColor: '#28a745',
        borderColor: '#28a745',
      });
    }

    addStyles(card.parentNode, { order: cardsNewOrderPosition[index] });
  });
}

function changeList() {
  const listGroup = document.querySelector('.list-group');

  const activeItem = listGroup.querySelector('.active');
  if (activeItem) activeItem.classList.remove('active');

  listGroup.insertAdjacentHTML(
    'beforeend',
    '<li class="list-group-item active">Quarto item</li><li class="list-group-item">Quinto item</li>'
  );
}

changeMenu();
changeHeader();
changeCards();
changeList();
