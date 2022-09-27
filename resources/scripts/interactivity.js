var graficoPag13 = document.getElementById( 'graficoPag13');
var graficoPag13Com = document.getElementById( 'graficoPag13Com');
var btnInfografico13 = document.getElementById('infograficoPg13');
var acu = 0
var transferidorAngulo = document.getElementById( 'transferidorAngulo');
var transferidorAnguloCom = document.getElementById( 'transferidorAnguloCom');
var btn_idContainer091 = document.getElementById('_idContainer091');
var img126_pg203 = document.getElementById( 'img126_pg203');
var img126_pg203Com = document.getElementById( 'img126_pg203Com');
var circuloBranco = document.getElementById( 'circuloBranco');
var circuloBrancoCom = document.getElementById( 'circuloBrancoCom');
var img135_pg214b = document.getElementById( 'img135_pg214b');
var img135_pg214bCom = document.getElementById( 'img135_pg214bCom');
var circunferencia = document.getElementById( 'circunferencia');
var circunferenciaCom = document.getElementById( 'circunferenciaCom');
var tangentesExt = document.getElementById( 'tangentesExt');
var tangentesExtCom = document.getElementById( 'tangentesExtCom');
var primeiraRoleta = document.getElementById( 'primeiraRoleta');
var primeiraRoletaCom = document.getElementById( 'primeiraRoletaCom');


function interactivity(el1, el2, el3) {
    if (acu == 0) {
        el1.style.display = 'none'
        el2.style.display = 'block'
        acu++;
    } else if (acu > 0) {
        el1.style.display = 'block'
        el2.style.display = 'none'
        acu = 0
    }
}
function sequencial(el1, el2, el3, el4) {
    if (acu == 0) {
        el1.style.display = 'none'
        el2.style.display = 'block'
        el3.style.display = 'none'
        acu++;
    } else if (acu == 1) {
        el1.style.display = 'none'
        el2.style.display = 'none'
        el3.style.display = 'block'
        acu = 2
    } else if (acu == 2 ) {
        el1.style.display = 'block'
        el2.style.display = 'none'
        el3.style.display = 'none'
        acu = 0
    }
}
