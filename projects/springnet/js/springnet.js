$(function () {
    function getDistance(A, B) {
        var x1 = A.offset().left;
        var y1 = A.offset().top;
        var x2 = B.offset().left;
        var y2 = B.offset().top;

        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    $('.dot').draggable({
        drag: function () {
            var id = '' + $(this).attr('id');
            var x = $(this).offset().left;
            var y = $(this).offset().top;
            $('#input' + id.replace('dot', '') + '-x').val(x);
            $('#input' + id.replace('dot', '') + '-y').val(y);
        },
        stop: function () {
            var d = getDistance($('#dot1'), $('#dot2'));
            $('#distance').val(d);
            if (d > 250) {
                $('#dot1').animate({
                    left: '+= ' + d
                }, 2500, function () {

                });
            }
        }
    });
});