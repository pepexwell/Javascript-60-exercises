/**
 * Created by pp on 7/6/2017.
 */
var data = 10;
var string_1 = "Nombre full:" + " Jose Augusto";
var bool_1 = 5>4;



function Saber () {

    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    if(num1+num2 > 10){
        document.getElementById("text1").innerText = "la suma es mayor que 10";

    }
    else{
        document.getElementById("text1").innerHTML = "la suma es menor o igual a 10";
    }

}