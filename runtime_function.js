/*The function takes another function as a parameter and calculates 
its runtime in milliseconds*/
function calRuntime(fcn,value){
  const t1 = Date.now();
  fcn(value);
  const t2 = Date.now();
  return t2 - t1;
}

/*example function used to test calRuntime()*/
function doStuff(value){
  num = value;
  for(let i=0;i<10000000;i++){
    num *= num;
  }
}

//check console to see what it outputs
console.log(calRuntime(doStuff,2));
