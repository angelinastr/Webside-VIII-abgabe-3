$(document).ready(function() {

let element = $('.header-image');
let win = $(window);

  win.on('scroll', function () {
  let top = win.scrollTop() / 2;
  console.log(win.scrollTop());

  element.css('transform', 'rotate(' + top + 'deg)');
});


})
