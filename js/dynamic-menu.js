(function () {
    'use strict';

    var currentLocation = window.location.href.split('/').reverse()[0].replace('.html', '');
    if (currentLocation == '') {
        currentLocation = 'index';
    }

    var nav = $('#left-panel').find('> nav');

    var ul = $('<ul></ul>');

    function MenuElement(element) {
        var self = this;

        self.href = element.href;

        self.active = (element.href == currentLocation);

        self.title = element.title;

        self.icon = element.icon;

        self.text = element.text;

        self.toHTML = function () {
            var liClass = (self.active) ? ' class="active"' : '';
            return '<li ' + liClass + '>' +
                '<a href="' + self.href + '.html" title="' + self.title + '">' +
                '<i class="fa fa-lg fa-fw fa-' + self.icon + '"></i> ' +
                '<span class="menu-item-parent">' + self.text + '</span>' +
                '</a>' +
                '</li>';
        }
    }

    var elements = window.menuElements;

    var w = '';
    for (var i = 0; i < elements.length; i++) {
        var element = new MenuElement(elements[i]);
        w += element.toHTML();
    }

    ul.html(w);

    nav.append(ul);
})();