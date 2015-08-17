(function () {

    var RadioAPI = {};

    if (!window.RadioAPI) {
        window.RadioAPI = RadioAPI;
    }

    RadioAPI.getUser = function (userID) {
        var userIDString = userID + '';
        while (userIDString.length < 5) {
            userIDString = '0' + userIDString;
        }
        var user = {};

        var xmlhttp;

        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
                if(xmlhttp.status == 200){
                    var ajaxResponse = JSON.parse(xmlhttp.response);
                    ajaxResponse.story_classic = ajaxResponse.story_classic.replace(/<br><br>/gmi, ';');
                    ajaxResponse.story_dnd = ajaxResponse.story_classic.replace(/<br><br>/gmi, ';');
                    return ajaxResponse;
                }
                else if(xmlhttp.status == 400) {
                    alert('There was an error 400')
                }
                else {
                    alert('something else other than 200 was returned')
                }
            }
        };

        xmlhttp.open('GET', 'http://octav47.github.io/projects/radiohustle/ajax/' + userIDString + '.json', true);
        xmlhttp.send();
    }

})();