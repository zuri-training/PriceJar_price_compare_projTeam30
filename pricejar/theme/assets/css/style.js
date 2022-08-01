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



function listShow(e) {
  var $gridCont = $('.grid-containers');
  e.preventDefault();
  $gridCont.hasClass('list-view') ? $gridCont.removeClass('list-view') : $gridCont.addClass('list-view');
}
function gList(e) {
  var $gridCont = $('.grid-containers')
  e.preventDefault();
  $gridCont.removeClass('list-view');
}

$(document).on('click', '.btn-griid', gridList);
$(document).on('click', '.btn-liist', showList);