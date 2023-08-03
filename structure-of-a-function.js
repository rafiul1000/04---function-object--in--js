// structure of a function

function functionName (Parameters){
    functionBody;
    return;
}

var returnvalue = functionName(ParametersValue);

// structure of a function


function bringShingara(money){
    var shingaraPrice = 10;
    var quantity = money / shingaraPrice;
    return quantity;
}

var myTaka = 1000;
var shingaras = bringShingara(myTaka);
console.log('Eating shingara', shingaras);



function bringByke(money){
    var bykePrice = 50000;
    var numberOfByke = money / 50000;
    return numberOfByke;
}

var totalMoney = 500000;
var bykeGiven = bringByke(totalMoney);
// console.log('byke koyta anso: ', bykeGiven);