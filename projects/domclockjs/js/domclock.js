(function ($) {
    $.fn.clock = function (options) {
        var defaults = {
            type: 'standard',
            standard: {
                style: {
                    container: {
                        width: '200px',
                        border: '1px solid #000000',
                        borderRadius: '100px'
                    }
                }
            }
        };
        options = $.extend({}, defaults, options);

        var self = this;

        function pxToInt(px) {
            return parseInt(px.replace('px', ''));
        }

        function preload(options) {
            var container;
            switch (options.type) {
                case 'standard':
                    container = $('<div class="clock-container-standart"></div>');
                    container.css('width', options.standard.style.container.width);
                    container.css('height', options.standard.style.container.width);
                    container.css('border', options.standard.style.container.border);
                    container.css('border-radius', options.standard.style.container.borderRadius);
                    var bigArrow = $('<div class="clock-big-arrow"></div>');
                    bigArrow.css('width', Math.ceil(pxToInt(options.standard.style.container.width) * 0.02));
                    bigArrow.css('height', Math.ceil(pxToInt(options.standard.style.container.width) * 0.37));
                    bigArrow.css('top', Math.ceil(pxToInt(options.standard.style.container.width) * 0.5));

                    var smallArrow = $('<div class="clock-small-arrow"></div>');
                    var secondsArrow = $('<div class="clock-seconds-arrow"></div>');

                    container.append(bigArrow);
                    container.append(smallArrow);
                    container.append(secondsArrow);

                    self.append(container);
                    break;
                case 'digit':
                    container = $('<div class="clock-container-digit"></div>');
                    var digit = '<div class="clock-digit"></div>';
                    for (var i = 0; i < 6; i++) {
                        container.append(digit);
                    }
                    var digits = container.find('> .clock-digit');
                    digits.each(function (i, v) {
                        for (var i = 0; i < 7; i++) {
                            $(v).append('<div class="clock-digit-element"></div>');
                        }
                    });

                    self.append(container);
                    break;
            }
        }

        options.setDigitalValue = function (digit, value) {
            switch (value) {
                case 0:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 1:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'none');
                    break;
                case 2:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 3:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 4:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'none');
                    break;
                case 5:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 6:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 7:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'none');
                    break;
                case 8:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                case 9:
                    digit.find('.clock-digit-element:nth-child(1)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(2)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(3)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(4)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(5)').css('display', 'none');
                    digit.find('.clock-digit-element:nth-child(6)').css('display', 'block');
                    digit.find('.clock-digit-element:nth-child(7)').css('display', 'block');
                    break;
                default:
                    break;
            }
        };

        function init(options) {
            preload(options);
            setInterval(function () {
                var now = new Date();
                var hours = now.getHours();
                var minutes = now.getMinutes();
                var seconds = now.getSeconds();
                switch (options.type) {
                    case 'standard':
                        hours = (hours >= 12) ? hours - 12 : hours;
                        $('.clock-big-arrow').css('transform', 'rotate(' + (-180 + 30 * hours) + 'deg)');
                        $('.clock-small-arrow').css('transform', 'rotate(' + (-180 + 6 * minutes) + 'deg)');
                        $('.clock-seconds-arrow').css('transform', 'rotate(' + (-180 + 6 * seconds) + 'deg)');
                        break;
                    case 'digit':
                        var a = [];
                        var hoursString = hours.toString();
                        if (hoursString.length == 1) {
                            hoursString = '0' + hoursString;
                        }
                        var minutesString = minutes.toString();
                        if (minutesString.length == 1) {
                            minutesString = '0' + minutesString;
                        }
                        var secondsString = seconds.toString();
                        if (secondsString.length == 1) {
                            secondsString = '0' + secondsString;
                        }
                        a = [hoursString[0], hoursString[1], minutesString[0], minutesString[1], secondsString[0], secondsString[1]];
                        var b = self.find('.clock-digit');
                        for (var i = 0; i < b.length; i++) {
                            options.setDigitalValue($(b[i]), parseInt(a[i]));
                        }
                }

            }, 1000);
        }

        init(options);
    };
})(jQuery);