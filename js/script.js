



var swiper3 = new Swiper(".hero-banner", {
  loop: true,
    grabCursor: true,
    effect: "creative",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
  });