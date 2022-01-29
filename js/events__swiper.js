const swiper = new Swiper(".events__container", {
  // Optional parameters
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row",
  },
  spaceBetween: 20,
  pagination: {
    el: ".events__container .events-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".events-button-next",
    prevEl: ".events-button-prev",
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 1,
      },
      spaceBetween: 30,
    },

    1024: {
      slidesPerView: 3,
      grid: {
        rows: 1,
      },
      spaceBetween: 50,
    },
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
  },
});
