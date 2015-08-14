var pics = ['06472', '06776', '04870', '06149', '06274', '06534', '05992'];
var links = {
    '06472': 'http://vk.com/octav',
    '06776': 'http://vk.com/id3348576',
    '04870': 'http://vk.com/id1889472',
    '06149': 'http://vk.com/id137052640',
    '06274': 'http://vk.com/id143710185',
    '06534': 'http://vk.com/id470743',
    '05992': 'http://vk.com/id3808296'
};

function setInfo(data) {
    $('#current-number').html(data.id);
    $('#current-name').html(data.name);
    $('#search-result .story').first().html('»стори€ выступлени€ по классике и старой системе ƒнƒ:<br><br>' + data.story_classic +
    '<br><br>»стори€ выступлени€ по новой системе ƒнƒ:<br><br>' + data.story_dnd);
    $('.current-class').html(data.class_classic + ' / ' + data.class_dnd);
}

function setAdditionalInfo(id) {
    if (pics.indexOf(id) > -1) {
        $('#pic').attr('src', 'http://radio-hustle.com/dancers/pics/' + id + '.jpg');
    } else {
        $('#pic').attr('src', 'http://radio-hustle.com/dancers/pics/no_avatar.jpg');
    }
    if (links.hasOwnProperty(id)) {
        var currentNameSelector = $('#current-name');
        var html = currentNameSelector.html();
        currentNameSelector.html('<a href="' + links[id] + '">' + html + '</a>');
    }
}