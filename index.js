// new Vue({
//   el: '#app',
//   data: function() {
//     return { visible: false }
//   }
// })

// function scrollToForm(target) {
//   // document.querySelector('.'+target).scrollIntoView({behavior: 'smooth'});
//   window.scrollTo(0, $('.'+target).offset().top);
// }
$('.nav-link').click(function(){
  window.scrollTo(0, $('.'+$(this).text().toLowerCase()).offset().top)
  // scrollToForm($(this).text().toLowerCase())
})
