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

function warnIfTheLowerElementIsGreaterThenHigher(arrayNumber) {
    for(let i = 0;i < arrayNumber.length - 1;i++){
      if (arrayNumber[i] > arrayNumber[i + 1]) {
        return "Erro: há um alvo de índice inferior com valor maior que um alvo de índice superior";
      }
    }
    return "Ok";
  }
  
  let targetValuesOk  = [30, 32, 34, 45];
  let targetValuesNOk = [30, 40, 32, 50];
  
  let message = warnIfTheLowerElementIsGreaterThenHigher(targetValuesNOk);
  
  console.log(message);
  
let message;
let comparedResult = compareLowerAndHigherIndexTargetValue (3,4);
message = warnIfLowerIndexTargetValueIsGreaterThanHigher (comparedResult);
alert (message);
