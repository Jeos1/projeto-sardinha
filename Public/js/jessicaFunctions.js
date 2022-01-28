function compareLowerAndHigherIndexTargetValue (valueOfALowerIndexTarget , valueOfAHigherIndexTarget)
{
    if(valueOfALowerIndexTarget >= valueOfAHigherIndexTarget) {
        return true;
    }else {
        return false;
    }
}

function warnIfLowerIndexTargetValueIsGreaterThanHigher(comparedResult) {
    if (comparedResult == true) {
        return "Erro: valor do alvo de índice inferior está maior que o valor do alvo de índice superior";
    }else {
        return "ok";  
    }
}

function WarnIfTheLowerElementIsGreaterThenHigher (CompareIndex)  {
    Let MyArray [num1, num2, num3]

    for(num=0; num < MyArray -1; num++){
        if (MyArray [1] > MyArray [num + 1])
        message = “Erro: há um alvo de índice inferior com valor maior que um alvo de índice superior”
       }else 
       message = "OK"
}

let message;
let comparedResult = compareLowerAndHigherIndexTargetValue (3,4);
message = warnIfLowerIndexTargetValueIsGreaterThanHigher (comparedResult);
alert (message);
