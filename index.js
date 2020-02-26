$('.nav-link').click(function(){
  if($(this).text() === 'Menu'){
    window.scrollTo(0, $('.'+$(this).text().toLowerCase()).offset().top- ( window.innerHeight/8 ))
  }else{
    window.scrollTo(0, $('.'+$(this).text().toLowerCase()).offset().top)
  }
})
$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    slidesPerView: 'auto',
    loopedSlides: 3,
    centeredSlides : true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
  })
});