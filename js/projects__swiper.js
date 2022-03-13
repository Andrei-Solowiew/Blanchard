let slider = new Swiper(".projects__swiper", {
  // Optional parameters
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row",
  },
  spaceBetween: 50,
  navigation: {
    nextEl: ".projects-button-next",
    prevEl: ".projects-button-prev",
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
      slidesPerGroup: 3,
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


