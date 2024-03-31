const brandList = document.querySelector('.brand-list');
const brandListBody = brandList.querySelector('.brand-list__body');
const showAllBtn = brandList.querySelector('.show-all-btn');


showAllBtn.addEventListener('click', () => {

    if (showAllBtn.getAttribute('short')) {
        showAllBtn.setAttribute('short', '');
        brandListBody.style.height = 'auto';
        showAllBtn.textContent = 'Скрыть';
        showAllBtn.style.width = '94px';
    } else {
        showAllBtn.setAttribute('short', 'true');
        brandListBody.style.height = '';
        showAllBtn.textContent = 'Показать всё';
        showAllBtn.style.width = '';
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