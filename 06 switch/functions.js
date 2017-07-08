/**
 * Created by pp on 7/6/2017.
 */
var data = 10;
var string_1 = "Nombre full:" + " Jose Augusto";
var bool_1 = 5>4;



function Saber () {

    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);
    var result = num1 + num2;
    switch (result) {
        case 10:
            document.getElementById("text1").innerHTML = "la suma es igual a 10";
            break;
        case 20:
            document.getElementById("text1").innerHTML = "la suma es igual a 20";
            break;
        default:
            document.getElementById("text1").innerHTML = "la suma no es ni 10 ni 20";
            break;
    }
}