var os = require('os');
var time = require("./Time.js");
// Funckja pobierajaca dane środowiska
function getOsInfo() {
    var type = os.type();
    console.log(type);
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    } else if (type === 'Linux') {
        // Nic nie rób. nazwa jest ok.
    } else {
        type = 'Typ nieznany';
    }
    var release = os.release();
    var uptime = os.uptime();
    console.log('System: ' + type);
    console.log('Release: ' + release);
    console.log('CPU: ' + os.cpus()[0]['model']);
    console.log('Uptime: ~', time.convert(uptime) );
    console.log('User name:', os.userInfo().username);
    console.log('Home dir:', os.userInfo().homedir);
}

exports.print = getOsInfo;