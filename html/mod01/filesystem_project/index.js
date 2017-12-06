var file = './mountain.jpg';
var textFile = './plik.txt';
var fs = require('fs');
var StatMode = require('stat-mode');
var colors = require('colors');

/*
fs.stat(file, function (err, stats) {
    var statMode = new StatMode(stats);
    console.log("Uprawnienia: " + statMode.toString());
    console.log("Katalog: ",statMode.isDirectory().toString());
    var directory = statMode.isDirectory
    console.log("Czy jest to katalog? " + (directory === true) ? "Tak" : "Nie");
});

fs.readFile(textFile, 'utf-8', function(err,data) {
    console.log('Dane przed zapisem: '.blue);
    console.log(data);
    // Zamiana funkcji writeFile na appendFile
    fs.appendFile(textFile,'\nA tak wyglądają po zapisie', function(err) {
        if (err) throw err;
        console.log('Zapisano!'.blue);
        fs.readFile(textFile,'utf-8',function(err,data) {
            console.log('Dane po zapisie'.blue) ;
            console.log(data);
        });
    });
});
// Zostanie wykonana najpierw.
fs.appendFile(textFile,'\nTekst, który zostanie zapisany w pliku txt', function(err) {
    if (err) throw err;
    console.log("Wykonano ;-)");
});
*/
console.log('Dane procesu: '.yellow,process.argv);
if (process.argv.length <= 2) {
    console.log('Przetwarzanie informacji o katalogu dla pliku: '.blue, __filename);
    process.exit(-1);
}

var path = process.argv[2];
console.log('Ścieżka listowania: '.yellow, path);

fs.readdir(path, function(err, items) {
//    console.log('Elementy katalogu'.red,items);
    for (var i=0; i<= items.length; i++) {
        console.log(items[i]);
//        console.log(typeof(items[i]));
        var fileInDirectory = items[i];
        if (items[i] !== undefined) {
/*           fs.stat(items[i], function (err, stats) {
                var statMode = new StatMode(stats);
//                console.log("Uprawnienia: " + statMode.toString());
//                console.log("Katalog: ",statMode.isDirectory().toString());
                var directory = statMode.isDirectory
//                console.log("Czy jest to katalog? " + (directory === true) ? "Tak" : "Nie");
                var data = '\n' + fileInDirectory + ': uprawnienia: ' + statMode.toString() + '; katalog: ' + ((directory === true) ? "Tak" : "Nie");
               console.log('Dane do zapisania',data);
              
               
            });*/
            
            fs.appendFile(textFile,'\n' + items[i], function(err) {
                if (err) throw err;
                console.log('Zapisano!'.blue);
            });
        }

    } // Koniec pętli for
    
});

// Zostanie wykonana najpierw.
fs.writeFile(textFile,'Pliki w katalogu', function(err) {
    if (err) throw err;
    console.log("Wykonano ;-)");
});

fs.readFile(textFile,'utf-8',function(err,data) {
    console.log('Dane po zapisie'.blue) ;
    console.log(data);
 });