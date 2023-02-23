


var color = 'red';
var maxAttemp = 5;

for (var i = 1; i <= maxAttemp; i++){
    var answer = prompt('Rangni top N 0 urinish' + i);
    console.log(color);
    if(answer == null){
        break;
    }

    else if( answer != color){
        continue;
    }

    else{
        document.write ('<p> Tabriklaymiz siz' + i + 'Urunishda topdingiz')
        break
    }

}

document.write('<p> O`yin tugadi');


