/**
 * Metoda konwertuje sekundy na godziny / minuty
 * @param integer value 
 * @returns string
 */
function convertSeconds(value) {
    var time = "";
    var hours = Math.floor(value / 3600);
    var minutes = Math.floor((value - (hours * 3600)) / 60);
    var seconds = Math.floor(value % 60);
    // console.log('Hours: ' + hours);
    // console.log('Minutes: ' + minutes);
    // console.log('Seconds: ' + seconds);
    time = ((hours > 0) ? hours + " godz. " : "" ) + ((minutes > 0) ? minutes + " min. " : "") + ((seconds > 0) ? ((seconds.toString().length === 1) ? "0" + seconds : seconds) : "00") + " sek.";
    // console.log('Czas: ' + time);
    return time;
}

exports.convert = convertSeconds;