/**
 * Created by pp on 7/6/2017.
 */
var arr = ["Peter","Nick","John"];

var names = new Array();

function Plus(){

    var name1 = document.getElementById("campo1").value;

    names.push(name1);

    document.getElementById("campo1").value = "";
}

function ShowArr() {
    document.getElementById("text1").innerHTML = "Esto es un ejemplo de arreglo " + arr;

    document.getElementById("text2").innerText = "";

    for (var j = 0; j < names.length; j++){
        if (j == 0){
            document.getElementById("text2").innerHTML += names[j];
        }else document.getElementById("text2").innerHTML += ", " + names[j];
    }
}