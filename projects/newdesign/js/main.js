var movementStrength = 25;
var height = movementStrength / $(window).height();
var width = movementStrength / $(window).width();
$('.wrapper').mousemove(function (e) {
    var pageX = e.pageX - ($(window).width() / 2);
    var pageY = e.pageY - ($(window).height() / 2);
    var newvalueX = width * pageX * -1 - 250;
    var newvalueY = height * pageY * -1 - 500;
    $('.wrapper').css('background-position', newvalueX + 'px     ' + newvalueY + 'px');
});