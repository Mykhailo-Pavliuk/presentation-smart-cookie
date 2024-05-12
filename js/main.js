const requirementsAllowedBtn = document.querySelector('.requirements__allowed-show span');
const requirementsAllowedHidden = document.querySelectorAll('.requirements__allowed-item--hidden');

requirementsAllowedBtn.addEventListener('click', () => {
	requirementsAllowedHidden.forEach(item => item.classList.remove('requirements__allowed-item--hidden'));
	requirementsAllowedBtn.parentElement.style.display = 'none';
});

const practiceCardsCount = 4;
let practiceCardPos = 3;
let practiceCardMin = 3;
let practiceMargin = 33;
const practiceCardPrevBtn = document.querySelector('.cards-nav__prev');
const practiceCardNextBtn = document.querySelector('.cards-nav__next');
const practiceCards = document.querySelector('.cards');

practiceCardPrevBtn.addEventListener('click', () => {
	if (practiceCardPos > practiceCardMin) {
		practiceCardPos--;
		practiceCards.style.marginLeft = '-' + (practiceMargin * (practiceCardPos - practiceCardMin)) + 'vw';
	}
});

practiceCardNextBtn.addEventListener('click', () => {
	if (practiceCardPos < practiceCardsCount) {
		practiceCardPos++;
		practiceCards.style.marginLeft = '-' + (practiceMargin * (practiceCardPos - practiceCardMin)) + 'vw';
	}
});

window.addEventListener('resize', resize);

function resize() {
	const browserWidth = window.innerWidth;

	practiceCardPrevBtn.click();
	practiceCardPrevBtn.click();
	practiceCardPrevBtn.click();

	practiceCardPos = 3;
	practiceCardMin = 3;
	practiceMargin = 33;

	if (browserWidth <= 1199) {
		practiceCardPos = 3;
		practiceCardMin = 3;
		practiceMargin = 33;
	}
	if (browserWidth <= 1024) {
		practiceCardPos = 2;
		practiceCardMin = 2;
		practiceMargin = 49.55;
	}
	if (browserWidth <= 540) {
		practiceCardPos = 1;
		practiceCardMin = 1;
		practiceMargin = 96.14;
	}
}

const tabsBtns = document.querySelectorAll('.tabs__nav-item');

tabsBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		let id = btn.dataset.tab;
		
		document.querySelectorAll('.tabs__nav-item').forEach(btn => btn.classList.remove('tabs__nav-item--active'));
		document.querySelectorAll('.tabs__content div').forEach(tab => tab.classList.remove('active'));
		btn.classList.add('tabs__nav-item--active');
		document.querySelector('#tab_' + id).classList.add('active');
	});
});

const practiceMoreBtns = document.querySelectorAll('.card__link');
const modalContainer = document.querySelector('.modal__container');

practiceMoreBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		let practiceCardContent = btn.parentElement.querySelector('.card__content');
		
		if (practiceCardContent.innerHTML.length <= 10) return;
		document.body.classList.add('body--modal');
		modalContainer.style.display = 'flex';
		modalContainer.querySelector('.modal__center').innerHTML = practiceCardContent.innerHTML;

		let modalCloseBtn = modalContainer.querySelector('.modal__center').querySelector('.modal__close');
		modalCloseBtn.addEventListener('click', () => {
			modalContainer.querySelector('.modal__center').innerHTML = '';
			modalContainer.style.display = 'none';
			document.body.classList.remove('body--modal');
		});
	});
});

onload = (event) => {
	resize();
	document.querySelector('.tabs__nav-item:first-child').click();
};