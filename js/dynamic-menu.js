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

        self.external = element.external || false;

        self.target = '';
        if (self.external) {
            self.target = '_blank';
        }
        if (element.target !== undefined) {
            self.target = element.target;
        }

        if (self.external) {
            self.href = element.href;
        } else {
            self.href = (element.href === '#') ? '#' : element.href + '.html';
        }

        self.active = (element.href == currentLocation);

        self.title = element.title;

        self.icon = element.icon;

        self.text = element.text;

        self.child = element.child || [];

        self.toHTML = function () {
            var liClass = (self.active) ? ' class="active"' : '';

            var childHTML = '';

            var externalLinkIcon = (self.external) ? ' <i class="fa fa-external-link"></i>' : '';

            var target = (self.target != '') ? ' target="' + self.target + '"' : '';

            if (self.child.length != 0) {
                childHTML = '<ul>';
                for (var i = 0; i < self.child.length; i++) {
                    childHTML += (new MenuElement(self.child[i])).toHTML();
                }
                childHTML += '</ul>';
            }

            return '<li ' + liClass + '>' +
                '<a href="' + self.href + '" title="' + self.title + '"' + target + '>' +
                '<i class="fa fa-lg fa-fw fa-' + self.icon + '"></i> ' +
                '<span class="menu-item-parent">' + self.text + '</span>' +
                externalLinkIcon +
                '</a>' +
                childHTML +
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