$(document).ready(function () {
  setImageInGellery();
});

function setImageInGellery() {
  var imgEl = $('.sm-gl-img');
  var mainImg = $('.main-img img');

  imgEl.click(function (e) {
    var mainSrc = mainImg.attr('src');
    var thisSrc = $(this).children('img').attr('src');
    mainImg.attr('src', thisSrc);
    $(this).children('img').attr('src', mainSrc);
  })
}