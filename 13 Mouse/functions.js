/**
 * Created by pp on 7/6/2017.
 */
var arr = ["Peter","Nick","John"];

var names = new Array();

function MessageA(valor){
    document.getElementById("text1").innerHTML = "Has pulsado soble la caja " + valor.id;
    document.getElementById("text2").innerHTML = "Has pulsado soble la caja " + valor.style.background;
}