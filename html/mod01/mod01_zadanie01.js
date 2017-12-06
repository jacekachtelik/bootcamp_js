// Wyświetlenie możliwych właściwości
// console.log(process.env);
// Pobranie wersji
// console.log(process.versions);  

// 1. Pobranie numeru wersji NodeJS:
var nodeVersion = process.versions.node;
var message = "";
if (nodeVersion !==  null) {
     message = "Wesja NodeJS to: " + nodeVersion;
} else {
    message = "Błąd pobrania numeru wersji NodeJS";
}   
console.log(message);

// 2. Pobranie języka środowiska uruchomieniowego
var nodeLanguage = process.env.LANG;
// console.log(nodeLanguage);
// console.log(typeof(nodeLanguage));
var language = "";
// Pobranie z wartości: znaku kropki (przed kodowaniem)
var position = nodeLanguage.search(/\./); // wykorzystanie regex
// Pobranie wartości samego języka
envCoding = nodeLanguage.substring(position + 1,nodeLanguage.length);
nodeLanguage = nodeLanguage.substring(0,position);
// console.log(nodeLanguage);
// console.log(position);
// console.log(envCoding);
message = ""; // ponowne wprowadzenie do jednej zmiennej
switch (nodeLanguage) {
    case 'pl_PL':
        message = "Język środowiska to Polski";
        break;
    case 'en_GB':
        message = "Environment language is British English";
        break;
    case 'en_US':
        message = "Environment language is US English";
        break;
    case 'de_GE':
        message = "Environment language is German";
        break;
    case 'fr_FR':
        message = "Environment language is French";
        break;        
    default:
        break;
}
message += ". Kodowanie to: "+envCoding;
console.log(message);