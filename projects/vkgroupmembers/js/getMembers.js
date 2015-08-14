VK.init({
    apiId: 4996717 // ID ������ ���������� VK
});

if (navigator.userAgent.indexOf("Safari") > -1) {
    var items = [3377, 6617, 18529, 60233, 60452, 65098, 67234, 86472, 141547, 154438, 172116, 180181, 216428, 246230, 258423, 267839, 268381, 304866, 311522, 395419, 447428, 452398, 470743, 479738, 512734, 540228, 682709, 685148, 725078, 744416, 787817, 831630, 850622, 861414, 867423, 880520, 960002, 962702, 1016778, 1020064, 1024461, 1032201, 1095400, 1148019, 1164420, 1179980, 1182722, 1284335, 1314853, 1373302, 1376725, 1469064, 1491526, 1495432, 1577995, 1639639, 1649523, 1667774, 1672776, 1723594, 1737048, 1759151, 1776417, 1779402, 1791201, 1875343, 1889472, 1896774, 1934498, 1967096, 2006691, 2010551, 2037135, 2050781, 2170285, 2184026, 2250193, 2255053, 2287470, 2323933, 2330825, 2351587, 2381740, 2498999, 2740358, 2829938, 2877663, 2884166, 2906149, 3042330, 3061395, 3169437, 3235591, 3256193, 3287302, 3348576, 3451739, 3678457, 3686619, 3691264, 3730079, 3781889, 3808296, 3810413, 3897829, 3900178, 3914052, 4018265, 4056680, 4091004, 4567060, 4607160, 4910143, 5190354, 5287253, 5401804, 5466453, 5493531, 5637589, 5680812, 5919000, 6226863, 6576556, 6584842, 6763649, 6802762, 7265079, 7347951, 7352828, 7358682, 7620447, 7739196, 7852901, 8018932, 8830736, 8982980, 9751721, 9807152, 9954770, 10154131, 10253004, 10594019, 10857565, 10931622, 11091814, 11986548, 12042398, 12321895, 12816981, 13067774, 13083112, 13276221, 13396476, 14420174, 14927488, 14957835, 15035918, 15415563, 15751806, 16537533, 16675198, 16719816, 17186947, 18073998, 20188501, 20230184, 23642848, 24078056, 25397138, 27367098, 31769545, 32443325, 33206976, 33947746, 35220207, 35998607, 37892005, 40477301, 41436071, 42285142, 43765095, 44928868, 47102962, 49671787, 53794799, 56529154, 57402796, 62281480, 62608442, 64527423, 65630626, 66807024, 72135700, 74494287, 79070121, 80611471, 80663811, 83115464, 84098018, 84177728, 85000979, 87398778, 90911909, 90919760, 101250785, 116905088, 123044917, 123633980, 124681665, 126981750, 134070809, 134205009, 134346055, 137052640, 141861258, 143710185, 145744714, 146301115, 166420903, 177013142, 181432283, 193134863, 193452985, 211855598, 212269842, 215612125, 231672911, 233194027, 246169196, 251416220, 252931536, 254724481, 286512607];
    for (var i = 0; i < items.length; i++) {
        (function (i) {
            setTimeout(function () {
                VK.Api.call('users.get', {user_ids: items[i], fields: 'photo_200'}, function (r) {
                    if (r.response) {
                        var link = r.response[0]['photo_200'];
                        if (link) {
                            $('<img src="' + link + '">').hide().prependTo($('.member_avatar')).fadeIn('slow');
                        }
                    }
                });
            }, 333 * i);
        })(i);
    }
} else {
    VK.Api.call('groups.getMembers', {
        'group_id': 86646022,
        'v': '5.37',
        'sort': 'id_asc',
        'count': '1000',
        'offset': '0'
    }, function (r) {
        if (r.response) {
            var items = r.response.items;
            for (var i = 0; i < items.length; i++) {
                (function (i) {
                    setTimeout(function () {
                        VK.Api.call('users.get', {user_ids: items[i], fields: 'photo_200'}, function (r) {
                            if (r.response) {
                                var link = r.response[0]['photo_200'];
                                if (link) {
                                    $('<img src="' + link + '">').hide().prependTo($('.member_avatar')).fadeIn('slow');
                                }
                            }
                        });
                    }, 333 * i);
                })(i);
            }
        }
    });
}