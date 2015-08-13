$(function () {
    var pics = $('.member_avatar');
    VK.init({
        apiId: 4996717 // ID вашего приложени€ VK
    });

    var membersGroups = []; // массив участников группы
    getMembers(86646022);

    function getMembers(group_id) {
        //VK.Api.call('groups.getById', {group_id: group_id, fields: 'photo_50,members_count', v: '5.27'}, function (r) {
        //    if (r.response) {
        //        $('.group_info')
        //            .html('<img src="' + r.response[0].photo_50 + '"/><br/>'
        //            + r.response[0].name
        //            + '<br/>”частников: ' + r.response[0].members_count);
        //        getMembers20k(group_id, r.response[0].members_count); // получаем участников группы и пишем в массив membersGroups
        //    }
        //});

        VK.Api.call('groups.getMembers', {
            'group_id': group_id,
            'v': '5.37',
            'sort': 'id_asc',
            'count': '1000',
            'offset': 0
        }, function (r) {
            if (r.response) {
                var items = r.response.items, i = 0;
                for (var i = 0; i < items.length; i++) {
                    (function (i) {
                        setTimeout(function () {
                            VK.Api.call('users.get', {user_ids: items[i], fields: 'photo_200'}, function (r) {
                                if (r.response) {
                                    var link = r.response[0]['photo_200'];
                                    if (link) {
                                        $('<img src="' + link + '">').hide().prependTo(pics).fadeIn('slow');
                                    } else {
                                        console.log(link == undefined);
                                    }
                                }
                            });
                        }, 333 * i);
                    })(i);
                }
            }
        })
    }

    function getMembers20k(group_id, members_count) {
        var code = 'var members = API.groups.getMembers({"group_id": ' + group_id + ', "v": "5.27", "sort": "id_asc", "count": "1000", "offset": ' + membersGroups.length + '}).items;' // делаем первый запрос и создаем массив
            + 'var offset = 1000;' // это сдвиг по участникам группы
            + 'while (offset < 25000 && (offset + ' + membersGroups.length + ') < ' + members_count + ')' // пока не получили 20000 и не прошлись по всем участникам
            + '{'
            + 'members = members + "," + API.groups.getMembers({"group_id": ' + group_id + ', "v": "5.27", "sort": "id_asc", "count": "1000", "offset": (' + membersGroups.length + ' + offset)}).items;' // сдвиг участников на offset + мощность массива
            + 'offset = offset + 1000;' // увеличиваем сдвиг на 1000
            + '};'
            + 'return members;'; // вернуть массив members

        VK.Api.call("execute", {code: code}, function (data) {
            if (data.response) {
                //        for (var i = 0; i < data.response.length; i++) {
                //            (function (i) {
                //                setTimeout(function () {
                //                    VK.Api.call('users.get', {user_ids: data.response[i], fields: 'photo_200'}, function (r) {
                //                        if (r.response) {
                //                            console.log(r);
                //                        }
                //                    });
                //                }, 500)
                //            })(i);
                //        }
                //
                //
                membersGroups = membersGroups.concat(JSON.parse("[" + data.response + "]")); // запишем это в массив
                console.log(membersGroups);
                $('.member_ids').html('«агрузка: ' + membersGroups.length + '/' + members_count);
                if (members_count > membersGroups.length) // если еще не всех участников получили
                    setTimeout(function () {
                        getMembers20k(group_id, members_count);
                    }, 333); // задержка 0.333 с. после чего запустим еще раз
                //else // если конец то
                //    alert('”ра тест закончен! ¬ массиве membersGroups теперь ' + membersGroups.length + ' элементов.');
            } else {
                //alert(data.error.error_msg); // в случае ошибки выведем еЄ
            }
        });
    }
});