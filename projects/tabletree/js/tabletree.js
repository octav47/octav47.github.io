(function ($) {
    $.fn.tableTree = function (options) {
        var maxLevel = 0;

        var tree = options.tree || 'none';

        /*
         * options = {
         *   tree is Array
         *   table is jQuery object
         *   initUid is integer
         *   maxLevel is integer
         *   prop is string
         * }
         */

        function dfs(options) {
            var tree = options.tree;
            var table = options.table;
            var initUid = options.initUid;
            var prop = options.prop;

            var d = {};

            var uid = initUid || 10000;

            var tbody = table.find('tbody');

            function _dfs(root, level, parentUid) {
                if (level > maxLevel) {
                    maxLevel = level;
                }
                if (root.hasOwnProperty('subLevel')) {
                    var subLevels = root.subLevel;
                    for (var i in subLevels) {
                        uid++;
                        if (!d.hasOwnProperty(parentUid)) {
                            d[parentUid] = [];
                        }
                        d[parentUid].push(uid);
                        var tr = $('<tr data-uid="' + uid + '" data-parent="' + parentUid + '" data-level="' + level + '" class="tr-closed" style="display: none;"></tr>');
                        tr.append('<td style="padding-left:' + (level * 30) + 'px">' + subLevels[i].name + '</td>');
                        //var sum = 0;
                        for (var j in subLevels[i][prop]) {
                            tr.append('<td>' + parseFloat(subLevels[i][prop][j]).toFixed(1) + '</td>');
                            //sum += subLevels[i][prop][j];
                        }
                        //if (sum == 0) {
                        //    emptyRows.push(uid);
                        //}
                        tbody.append(tr);
                        _dfs(subLevels[i], level + 1, uid);
                    }
                }
            }

            for (var j in tree) {
                uid++;
                var tr = $('<tr data-uid="' + uid + '" data-level="0" class="tr-closed"></tr>');
                tr.append('<td>' + tree[j].name + '</td>');
                for (var i in tree[j][prop]) {
                    tr.append('<td>' + parseFloat(tree[j][prop][i]).toFixed(1) + '</td>');
                }
                tbody.append(tr);
                _dfs(tree[j], 1, uid);
            }

            return d;
        }

        // table is jQuery object
        // TODO
        function isCorrectTable(table) {

        }

        if (tree == 'none') {

        } else {
            var a = dfs({
                tree: tree,
                table: this,
                initUid: 10000,
                prop: 'prop'
            });
            console.log(a);
        }
    };
})(jQuery);