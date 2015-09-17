var judges = $('#judges');
var competitors = $('#competitors');
var createTable = $('#create-table');
var submit = $('#submit');
var table = $('#table');

var test = $('#test');

var results = {
    dancers: {},
    maxT: 0,
    isCorrect: false
};

createTable.on('click', function () {
    table.find('tbody').empty();
    results = {
        dancers: {},
        maxT: 0,
        isCorrect: false
    };

    var jc = judges.val() * 1;
    var cc = competitors.val() * 1;

    if (jc && cc) {
        for (var i = 0; i < cc; i++) {
            var w = '<tr>';
            for (var j = 0; j < jc; j++) {
                w += '<td>';
                var selectW = '<select>';
                for (var k = 0; k < cc; k++) {
                    selectW += '<option data-cc="' + (i + 1) + '" data-jc="' + (j + 1) + '" value="' + (k + 1) + '">' + (k + 1) + '</option>';
                }
                selectW += '</select>';
                w += selectW + '<td>';
            }
            w += '</tr>';
            table.find('tbody').append(w);
        }
        results.maxT = jc;
    }
});

submit.on('click', function () {
    var res = {};
    var majority = Math.ceil(judges.val() * 1 / 2);
    var isMajorityOdd = (majority + 1) % 2;

    var options = $('select option:selected');
    options.each(function (i, v) {
        var ccInd = $(v).attr('data-cc') * 1;
        var jcInd = $(v).attr('data-jc') * 1;
        if (!results.dancers.hasOwnProperty(ccInd)) {
            results.dancers[ccInd] = [];
        }
        if (!res.hasOwnProperty(ccInd)) {
            res[ccInd] = {};
        }
        results.dancers[ccInd].push($(v).val());
    });

    results.isCorrect = true;

    var currentPlaces = [1];
    if (results.isCorrect) {
        for (var k = 0; k < results.maxT; k++) {
            for (var d in results.dancers) {
                res[d]['round_' + k] = {
                    count: 0,
                    localSum: 0
                };
                var dancerPoints = results.dancers[d];
                for (var i = 0; i < dancerPoints.length; i++) {
                    if (currentPlaces.indexOf(parseInt(dancerPoints[i])) > -1) {
                        res[d]['round_' + k].count++;
                        res[d]['round_' + k].localSum += dancerPoints[i] * 1;
                    }
                }
            }
            console.log(res);
            var winners = [];
            for (var i in res) {
                var round = res[i]['round_' + k];
                if (isMajorityOdd) {
                    if (round.count >= majority) {
                        winners.push(i);
                    }
                } else {
                    if (round.count > majority) {
                        winners.push(i);
                    }
                }
            }
            console.log(winners);
            if (winners.length == 1) {
                for (var i = 0; i < winners.length; i++) {
                    delete results.dancers[winners[i]];
                    delete res[winners[i]];
                }
            }
            currentPlaces.push(currentPlaces[currentPlaces.length - 1] + 1);
        }
    }
});

test.on('click', function () {
    judges.val(3);
    competitors.val(3);
    createTable.click();
    var data = [0, 1, 0, 2, 0, 1, 1, 2, 2];
    setTimeout(function () {
        var selects = $('select');
        selects.each(function (i, v) {
            $($(v).find('option')[data[i]]).prop('selected', true);
        })
    }, 250);
})