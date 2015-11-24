(function ($) {

    $.fn.tsorter = function (options) {

        var self = this,
            def = {
                target: undefined,
                excluded: [],
                cellParser: function (index, element) {
                    return element;
                },
                eventHandler: function (e) {

                }
            };

        var settings = $.extend({}, def, options);

        var zSort = function zSort(tuple, localSettings) {
            function zo(a, b, order) {
                if (order == 1) {
                    if (a < b) {
                        return -1;
                    }

                    if (a > b) {
                        return 1;
                    }

                    return 0;
                } else {
                    if (a > b) {
                        return -1;
                    }

                    if (a < b) {
                        return 1;
                    }

                    return 0;
                }
            }

            var table = localSettings.table,
                index = localSettings.index,
                order = localSettings.order,
                parser = localSettings.parser || function (index, element) {
                        return element;
                    };
            tuple.sort(function (A, B) {
                var a = parser(index, $($(A).find('td')[index]).html());
                var b = parser(index, $($(B).find('td')[index]).html());
                return zo(a, b, order);
            });
            $.each(tuple, function (index, row) {
                table.children('tbody').append(row);
            });
        };

        var init = function init() {
            var thead = self.find('thead'),
                target = settings.target || self;

            thead.find('th').each(function (i, v) {
                var $v = $(v);
                if (settings.excluded.indexOf(i) == -1) {
                    $(v).append('<i class="fa fa-sort" style="float: right;" rel="sort-icon"></i>')
                        .attr('data-sort', 'unsorted');
                } else {
                    $v.attr('data-sort', 'excluded');
                }
            });

            thead.find('th').on('click', function (e) {
                var index = e.target.cellIndex;
                thead.find('th i[rel=sort-icon]')
                    .removeClass('fa-sort-asc')
                    .removeClass('fa-sort-desc')
                    .addClass('fa-sort');

                var $this = $(this),
                    dataSort = $this.attr('data-sort');
                if (dataSort != 'excluded') {
                    if (dataSort == 'unsorted' || dataSort == 'asc') {
                        $this.find('i[rel=sort-icon]')
                            .removeClass('fa-sort')
                            .removeClass('fa-sort-asc')
                            .addClass('fa-sort-desc');
                        $this.attr('data-sort', 'desc');
                        zSort(self.find('tbody tr').get(), {
                            table: target,
                            index: index,
                            order: 0,
                            parser: settings.cellParser
                        });
                    } else {
                        $this.find('i[rel=sort-icon]')
                            .removeClass('fa-sort-desc')
                            .addClass('fa-sort-asc');
                        $this.attr('data-sort', 'asc');
                        zSort(self.find('tbody tr').get(), {
                            table: target,
                            index: index,
                            order: 1,
                            parser: settings.cellParser
                        });
                    }
                }
            });

            return this;
        };

        return init();

    };
})(jQuery);