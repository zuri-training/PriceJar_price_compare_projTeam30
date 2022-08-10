
//new deals
function showList(e) {
  var $gridCont = $('.grid-container');
  e.preventDefault();
  $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
}
function gridList(e) {
  var $gridCont = $('.grid-container')
  e.preventDefault();
  $gridCont.removeClass('list-view');
}

$(document).on('click', '.btn-grid', gridList);
$(document).on('click', '.btn-list', showList);



//top deals
function listShow(e) {
  var $gridCont = $('.grid-containers');
  e.preventDefault();
<<<<<<< HEAD
<<<<<<< HEAD
  $gridCont.hasClass('list-views') ? $gridCont.removeClass('list-views') : $gridCont.addClass('list-views');
=======
  $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
>>>>>>> 113443751e7132b0b294df84db685278a2e26bb9
=======
  $gridCont.hasClass('list-views') ? $gridCont.removeClass('list-views') : $gridCont.addClass('list-views');
>>>>>>> 4a6f097ef043a5e6c9b68297f0b78ca8a9d38ea4
}
function gList(e) {
  var $gridCont = $('.grid-containers')
  e.preventDefault();
  $gridCont.removeClass('list-views');
}

$(document).on('click', '.btn-griid', gList);
$(document).on('click', '.btn-liist', listShow);


//exclusive deals

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

