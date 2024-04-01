const brandList = document.querySelector('.brand-list');
const brandListBody = brandList.querySelector('.brand-list__body');
const showAllBtn = brandList.querySelector('.show-all-btn');


showAllBtn.addEventListener('click', () => {

    if (!showAllBtn.classList.contains('show-all-btn--open')) {
        showAllBtn.classList.add('show-all-btn--open');
        brandListBody.classList.add('brand-list__body--extended');
        showAllBtn.textContent = 'Скрыть';
    } else {
        showAllBtn.classList.remove('show-all-btn--open');
        brandListBody.classList.remove('brand-list__body--extended');
        showAllBtn.textContent = 'Показать всё';
    }
});

const slider = new Swiper('.brand-list__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 1.2,
    spaceBetween: '16px',


    breakpoints: {
        767: {
            slidesPerView: 2,
            enabled: true,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: '0',
            enabled: false,
        },

    },
});