
function leastShow(e) {
  var $gridCont = $('.grid-containerz');
  e.preventDefault();
  $gridCont.hasClass('list-viewz') ? $gridCont.removeClass('list-viewz') : $gridCont.addClass('list-viewz');
}
function greedList(e) {
  var $gridCont = $('.grid-containerz')
  e.preventDefault();
  $gridCont.removeClass('list-viewz');
}

$(document).on('click', '.btn-greed', greedList);
$(document).on('click', '.btn-least', leastShow);


const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = '#801b4b';
  btn.style.color = 'white';
});

const btnn = document.getElementById('btnn');

btnn.addEventListener('click', function onClick() {
  btnn.style.backgroundColor = '#801b4b';
  btnn.style.color = 'white';
});