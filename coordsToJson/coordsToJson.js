var a = {
    "Ё": "YO",
    "Й": "I",
    "Ц": "TS",
    "У": "U",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "Щ": "SCH",
    "З": "Z",
    "Х": "H",
    "Ъ": "'",
    "ё": "yo",
    "й": "i",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "щ": "sch",
    "з": "z",
    "х": "h",
    "ъ": "'",
    "Ф": "F",
    "Ы": "I",
    "В": "V",
    "А": "a",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "Э": "E",
    "ф": "f",
    "ы": "i",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "э": "e",
    "Я": "Ya",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "И": "I",
    "Т": "T",
    "Ь": "'",
    "Б": "B",
    "Ю": "YU",
    "я": "ya",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "и": "i",
    "т": "t",
    "ь": "'",
    "б": "b",
    "ю": "yu"
};

function transliterate(word) {
    return word.split('').map(function (char) {
        return a[char] || char;
    }).join("");
}

var fs = require('fs');

var file = 'coords.txt';

var coords = {
    federalDistrictList: []
};

var districts = {};

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var tmp = data.split('\n');
    for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] == '' || tmp[i].length < 3) {
            continue;
        }
        tmp[i] = tmp[i]
            .replace(/,/gmi, '.')
            .replace(/\r/gmi, '');
        var d = tmp[i].split('\t');
        var name = transliterate(d[1]);

        if (districts[name] === undefined) {
            districts[name] = {
                name: name,
                rectangles: [{
                    rectangleNumber: 1,
                    coordinates: [d[3], d[4], d[5], d[6]].join(',')
                }]
            }
        } else {
            districts[name].rectangles.push({
                rectangleNumber: districts[name].rectangles.length + 1,
                coordinates: [d[3], d[4], d[5], d[6]].join(',')
            })
        }
    }

    for (var i in districts) {
        if (i !== '' && districts.hasOwnProperty(i)) {
            coords.federalDistrictList.push(districts[i]);
        }
    }

    fs.writeFileSync('coords.json', JSON.stringify(coords, null, 4), 'utf-8');
});