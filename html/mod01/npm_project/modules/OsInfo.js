var os = require('os');
var time = require("./Time.js");
var colors = require('colors');

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
    console.log(colors.grey('System: ') + type);
    console.log(colors.red('Release: ') + release);
    console.log(colors.blue('CPU: ') + os.cpus()[0]['model']);
    console.log(colors.green('Uptime: ~'), time.convert(uptime) );
    console.log(colors.cyan('User name:'), os.userInfo().username);
    console.log(colors.yellow('Home dir:'), os.userInfo().homedir);
}

exports.print = getOsInfo;