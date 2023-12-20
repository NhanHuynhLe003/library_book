const widthWindow = this.window.innerWidth;
if (widthWindow < 576) {
  swiper2 = new Swiper(".new_book-swiper", {
    slidesPerView: 3,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else if (widthWindow < 768) {
  swiper2 = new Swiper(".new_book-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  swiper2 = new Swiper(".new_book-swiper", {
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

window.addEventListener("resize", function () {
  const widthWindow = this.window.innerWidth;
  if (widthWindow < 576) {
    swiper2 = new Swiper(".new_book-swiper", {
      slidesPerView: 3,
      spaceBetween: 10,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (widthWindow < 768) {
    swiper2 = new Swiper(".new_book-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    swiper2 = new Swiper(".new_book-swiper", {
      slidesPerView: 5,
      spaceBetween: 10,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

var swiper1 = new Swiper(".advertise-swiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swipe3 = new Swiper(".comment-slide-swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swipe4 = new Swiper(".slogan-slide-swiper", {
  autoplay: {
    delay: 2000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
