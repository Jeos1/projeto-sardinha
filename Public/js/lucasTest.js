let target1Value;
let target1 = document.getElementById("target1");
target1.addEventListener('input',()=>{
  target1Value = target1.valueAsNumber;
  console.log(target1Value);
})