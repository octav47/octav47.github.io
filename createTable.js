// ??? ?????? da.json

var fs = require('fs')

// ???? ??? ? - 500, ??? ? -1000 ??? ? 1500 ??? ? 2000
var init = {
    'E': 500,
    'D': 500,
    'C': 1000,
    'B': 1500,
    'A': 2000,
}

var header = '?????;?????;???;????;?????;????;2013-09-14 EDM;2013-09-14 CBAM;2013-09-28Kr EDM;2013-10-06Kr EDM;2013-10-12Spb NmM;2013-10-12Spb NVM;2013-10-12Spb IM;2013-10-12Spb AM;2013-10-12Spb ProM;2013-10-20RnD EDM;2013-10-26 EDM;2013-10-26 DCBM;2013-10-26 CBAM;2013-11-02Kr EDM;2013-11-02Kr CBAM;2013-11-09Bar EDM;2013-11-09Bar CBAM;2013-11-09 EDM;2013-11-09 DCM;2013-11-09 CBAM;2013-11-24Spb EDM;2013-11-24Spb DCM;2013-11-24Spb AM;2013-11-30Min EDM;2013-11-30Min DCM;2013-11-30Min CBAM;2013-11-30Nvs EDM;2013-11-30Nvs CBAM;2013-12-08Kr EDM;2013-12-14 EDM;2013-12-14 CBM;2013-12-14 BAM;2014-01-04Kr NmM;2014-01-04Kr NVM;2014-01-04Kr IM;2014-01-04Kr AM;2014-01-04Kr ProM;2014-01-18 NmM;2014-01-18 NVM;2014-01-18 IM;2014-01-18 AM;2014-01-18 ProM;2014-01-25 EDM;2014-01-25 CBM;2014-01-25 BAM;2014-02-08 EDM;2014-02-08 CBAM;2014-02-16Kr EDM;2014-02-22Min EDM;2014-02-22Min DCM;2014-02-22Min CBAM;2014-02-22Nvs NmM;2014-02-22Nvs NVM;2014-02-22Nvs IM;2014-02-22Nvs AM;2014-03-01 EDM;2014-03-01 DCM;2014-03-01 CBAM;2014-03-09Kr EDM;2014-03-1'

var input = '3615;A;??????? ????? ??????????;????????;5561,486781;??????;;83,25475228;;;;;;;67,33475239;;;;;;;;;;;;;;;;;;;;;;;;;;;;49,48196235;;;;;97,5256227;;;120,7650824;;;;;;;;;;;;;;;;;;;44,64814142;;;;;;;;;;163,5570005;;;;;68,3266778;;;;;;;;;;205,2420497;;;;;;;169,5345039;;;;;;;;;;;;;;;;;;;;;0;;;;;;;;;;;;;121,3709147;;;;;;;82,50828889;;;;;;;;;;;;;;;;;;;;;;;;;355,839206;;;;;;;;;;;;619,5292447;;;;;;;;;;;;;342,8858931;;;;;;;;;;;;;;;;413,485741;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;556,1969476;;;;;;;;;;;'

function getDancerData (input) {
    var data = {}
    var split = input.split(';')

    var id = split[0]
    var cls = split[1]
    var fio = split[2]
    var club = split[3]
    var total = split[4]

    var t = init[cls]

    var k = 0

    for (var i = 6; i < split.length; i++) {
        if (split[i] != '') {
            t = parseFloat(split[i].replace(',', '.'))
            data[k] = t
        } else {
            data[k] = ''
        }
        k++
    }

    return data
}

var json = {}

var file = 'm.txt'
fs.readFile('./test/' + file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err)
    }
    var tmp = data.split('\n'), w = '{"data": ['
    var tds = '['
    var tde = ']'
    for (var i = 0; i < tmp.length; i++) {
        var opl = tmp[i].split(';')
        if (opl.length > 1) {
            w += '' + tds +
                '"' + (i + 1) + '",' +
                '"' + opl[0] + '",' +
                '"' + getClass(opl[1]) + '",' +
                '"' + opl[2] + '",' +
                '"' + opl[3] + '",' +
                '"' + parseFloat(opl[4].replace(',', '.')).toFixed(2) + '"' +
                tde + ((i === tmp.length - 1) ? '' : ',') + ''
        }
    }
    w += ']}'
    fs.writeFile('./test/discofoxan/' + file, w, function (err) {
        if (err) {
            return console.log(err)
        }

        console.log('written')
    })
})

function getClass (c) {
    switch (c) {
        case 'E':
        case 'D':
            return 'BG'
        case 'C':
            return 'RS'
        case 'B':
            return 'M'
        case 'A':
            return 'S'
        case 'Ch':
            return 'Ch'
        default:
            return ''
    }
}
