var fs = require('fs');

var file = 'hola_input.txt';

var words = {};

var map = {};

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var tmp = data.split('\n');
    for (var i = 0; i < tmp.length; i++) {
        var word = tmp[i].toLowerCase();
        word = word.replace(/'s/, '');
        words[word] = word;

        var letters = word.split('');
        dfs(letters.slice(0, letters.length - 1), map);
    }

    fs.writeFile('hola_output.txt', JSON.stringify(map), function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('written');
    });
});

function dfs(letters, next) {
    if (letters.length != 0) {
        var firstLetter = letters.splice(0, 1);
        if (!next[firstLetter]) {
            next[firstLetter] = [];
        } else {
            next[firstLetter].push()
        }
        dfs(letters, next[firstLetter]);
    } else {
        next.end = 'e';
    }
}