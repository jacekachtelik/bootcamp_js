var OSinfo = require('./modules/OsInfo');

var eventEmitter = require('events').EventEmitter;
var emitter = new eventEmitter();
emitter.on('beforeCommand', function(instruction){
    console.log("You wrote: " + instruction + " to execute command");
});

emitter.on('afterCommand', function() {
   console.log("Finished command") ;
});

// Proces obsługi interakcji z użytkownikiem z poziomu konsoli
process.stdin.setEncoding("utf-8");
process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand',instruction);
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/hello':
                process.stdout.write('Hello ;-)\n');
                break;
            case '/getOsInfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
                break;
        }
        emitter.emit('afterCommand');
    }
});