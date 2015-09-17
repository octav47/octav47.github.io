/*
 Radio Hustle API v0.2.1
 */

(function () {

    var RadioAPI = {},
        host = 'http://radio-hustle.com/dancers_old/ajax/';

    if (!window.RadioAPI) {
        window.RadioAPI = RadioAPI;
    }

    function reformatJSON(ajaxResponse) {
        function filterNotNull(element) {
            return element != '';
        }
        ajaxResponse.story_classic = ajaxResponse.story_classic.split('<br><br>').filter(filterNotNull);
        ajaxResponse.story_dnd = ajaxResponse.story_dnd.split('<br><br>').filter(filterNotNull);
        return ajaxResponse;
    }

    RadioAPI.getUser = function (userID, async, callBackSuccess, callBackError) {
        var userIDString = userID + '';
        while (userIDString.length < 5) {
            userIDString = '0' + userIDString;
        }

        var xmlhttp;

        callBackSuccess = callBackSuccess || function (a) {
                console.log(a);
            };

        callBackError = callBackError || function (a) {
                console.log(a);
            };

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        if (!async) {
            xmlhttp.open('GET', host + userIDString + '.json', false);
            xmlhttp.send();

            if (xmlhttp.status == 200) {
                var ajaxResponse = JSON.parse(xmlhttp.response);
                ajaxResponse = reformatJSON(ajaxResponse);
                return ajaxResponse;
            }
            else if (xmlhttp.status == 400) {
                callBackError(xmlhttp);
            }
            else {
                callBackError(xmlhttp);
            }
        } else {
            xmlhttp.open('GET', host + userIDString + '.json', true);
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                    if (xmlhttp.status == 200) {
                        var ajaxResponse = JSON.parse(xmlhttp.response);
                        ajaxResponse = reformatJSON(ajaxResponse);
                        callBackSuccess(ajaxResponse);
                    }
                    else if (xmlhttp.status == 400) {
                        callBackError(xmlhttp);
                    }
                    else {
                        callBackError(xmlhttp);
                    }
                }
            };
            xmlhttp.send();
        }
    }

})();