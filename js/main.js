const projectsSlider = new Swiper(".projects__slider", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 130,
    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev",
    },
    pagination: {
        el: ".projects__pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 4000,
    //     disableOnInteraction: false,
    // },
    // breakpoints: {
    //     768: { slidesPerView: 2 },
    //     1424: { slidesPerView: 1 },
    // }
});
