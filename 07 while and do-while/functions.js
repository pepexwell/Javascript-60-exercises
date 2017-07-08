/**
 * Created by pp on 7/6/2017.
 */
var data = 10;
var string_1 = "Nombre full:" + " Jose Augusto";
var bool_1 = 5>4;




function Saber () {

    var num1 = parseInt(document.getElementById("campo1").value);
    var num2 = parseInt(document.getElementById("campo2").value);

    var i  = 0;
    if (num2 > num1){
        i = num2 - num1;
    }else{
        i = num1 - num2;
    }

    var dif = "";
    while(i>0){
       dif += i + " ";
       i--;
    }
    document.getElementById("text1").innerHTML = dif;

    var dif1 = "";
    do{
        dif1 += i +" ";
        i++;
    }while (i<num2)
    document.getElementById("text2").innerHTML = dif1;
}