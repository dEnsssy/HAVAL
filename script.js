//burgerMenu
let burgerBtn = document.querySelector(".header__content-top-mobile-burger");
let phoneHeaderMobile = document.querySelector(
    ".header__content-top-mobile-phone"
);
let navigationMenuMobile = document.querySelector(
    ".header__content-navigation-mobile"
);
let linksFromNavMenuMobile = document.querySelectorAll(
    ".header__content-navigation-mobile-link"
);
//надо,чтобы при модалке закрывалась менюшка
let btnFromNavMenuMobile = document.querySelector(
    ".header__content-navigation-mobile-btn"
);

burgerBtn.addEventListener("click", () => {
    if (burgerBtn.classList.contains("active-burger")) {
        burgerBtn.classList.remove("active-burger");
        phoneHeaderMobile.style.display = "block";
        navigationMenuMobile.classList.remove("active-menu");
        document.querySelector("body").style.overflow = "scroll";
    } else {
        burgerBtn.classList.add("active-burger");
        phoneHeaderMobile.style.display = "none";
        navigationMenuMobile.classList.add("active-menu");
        document.querySelector("body").style.overflow = "hidden";
    }
});
linksFromNavMenuMobile.forEach((link) => {
    link.addEventListener("click", () => {
        burgerBtn.classList.remove("active-burger");
        phoneHeaderMobile.style.display = "block";
        navigationMenuMobile.classList.remove("active-menu");
        document.querySelector("body").style.overflow = "scroll";
    });
});
btnFromNavMenuMobile.addEventListener("click", () => {
    burgerBtn.classList.remove("active-burger");
    phoneHeaderMobile.style.display = "block";
    navigationMenuMobile.classList.remove("active-menu");
    document.querySelector("body").style.overflow = "scroll";
});

//Swipers
var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 100,
    loop: true,
    // centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        768: {
            spaceBetween: 40,
        },
        1180: {
            slidesPerView: 6,
            spaceBetween: 100,
        },
    },
});

let carsColorSwiper = document.querySelectorAll(
    ".models__cars-card-images .mySwiper2"
);

carsColorSwiper.forEach((card) => {
    var swiper = new Swiper(card, {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "</span>";
            },
        },
    });
});

// lazy-loading ?

document.addEventListener("DOMContentLoaded", function () {
    const lazyBackgrounds = document.querySelectorAll(".lazy-loading");

    if ("IntersectionObserver" in window) {
        let lazyBackgroundObserver = new IntersectionObserver(function (
            entries,
            observer
        ) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    let lazyBackground = entry.target;
                    if (window.innerWidth >= 1180) {
                        lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bg}')`;
                    } else {
                        lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bgmob}')`;
                    }
                    lazyBackground.classList.remove("lazy-loading");
                    lazyBackgroundObserver.unobserve(lazyBackground);
                }
            });
        });

        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackgroundObserver.observe(lazyBackground);
        });
    } else {
        // Фолбэк для браузеров, которые не поддерживают IntersectionObserver
        lazyBackgrounds.forEach(function (lazyBackground) {
            lazyBackground.style.backgroundImage = `url('${lazyBackground.dataset.bg}')`;
            lazyBackground.classList.remove("lazy-loading");
        });
    }
});

// Яндекс.Карты

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.576396, 37.695096], // Координаты
        zoom: 15,
    });

    // метка
    var myPlacemark = new ymaps.Placemark(
        [55.576396, 37.695096],
        {
            balloonContent: "г. Москва, 27 км МКАД (внешняя сторона)",
        },
        {
            iconLayout: "default#image",
            iconImageHref: "../img/PC/mapPin.png",
            iconImageSize: [65, 85], // Размер изображения
            iconImageOffset: [-25, -85], // Смещение изображения
        }
    );

    myMap.geoObjects.add(myPlacemark);
}

//select2
$(document).ready(function () {
    $("select").select2();
});

// configurations h3 information
let infoConfig = document.querySelector(".configurations__info");
$("#mySelect1").on("select2:select", function (e) {
    var selectedElement = e.params.data;
    infoConfig.textContent = selectedElement.text;
});
//configuration list

let btnsForOpenConfig = document.querySelectorAll(
    ".configurations__list-item-config"
);

btnsForOpenConfig.forEach((btn) => {
    btn.addEventListener("click", () => {
        let fullItemOfList = btn.closest(".configurations__list-content");
        let settingForThisModel = fullItemOfList.querySelector(
            ".configurations__list-item-info"
        );
        settingForThisModel.classList.toggle("disableArrow");
        btn.querySelector(
            ".configurations__list-item-config-arrow"
        ).classList.toggle("activeArrowList");
    });
});

// fancybox

$(document).ready(function () {
    // Инициализация FancyBox
    $("[data-fancybox]").fancybox({
        buttons: ["slideShow", "fullScreen", "thumbs", "close"],
        loop: true,
    });

    $(".btn-to-success").on("click", function () {
        var nextModal = $(this).data("next");
        console.log(1);
        // Закрыть текущее модальное окно
        $.fancybox.close();

        // Открыть новое модальное окно через короткую задержку
        setTimeout(function () {
            $.fancybox.open({
                src: nextModal,
                type: "inline",
            });
        }, 3); // задержка 300 миллисекунд
    });
});
