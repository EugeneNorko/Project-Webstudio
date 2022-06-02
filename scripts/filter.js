const refs = {
    cardWrapp: document.querySelector('[data-filter-set]'),
    filterButtons: document.querySelectorAll('.filter-set__button'),
    cardSet: document.querySelectorAll('.portfolio-set__item'),
}

refs.cardWrapp.addEventListener('click', onFilterButtonClick);

function onFilterButtonClick(e) {
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    const currentButton = e.target;
    const currentFilter = e.target.getAttribute('data-filter');
    changeActiveBtn(currentButton);
    if (currentFilter === 'all') {
        showAllCard();
        return;
    }

    refs.cardSet.forEach(card => {
        const cardType = card.getAttribute('data-card-type');
        card.classList.remove('hide');
        if (cardType !== currentFilter) {
            card.classList.add('hide');
        }
    })
}

function changeActiveBtn(btn) {
    refs.filterButtons.forEach(button => {
        if (button.classList.contains('js-active')) {
            button.classList.remove('js-active');
        }
    })
    btn.classList.add('js-active');
}

function showAllCard() {
    refs.cardSet.forEach(card => {
        card.classList.remove('hide');
    })
}