var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  
  breakpoints: {   
    320: {
      width: 240,
      spaceBetween: 24
    },
    768: {
      enabled: false,
      width: 224, 
      spaceBetween: 0
    }, 
    1440: {
      enabled: false,
      width: 240,
      spaceBetween: 0
    }  
  }
});