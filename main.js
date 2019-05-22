//same function logic, only operations are different

/* function add(value1,value2){
    let result=value1+value2;
    return result*12;
}
let resultAdd = add(2,5)
console.log(resultAdd);

function sub(value1,value2){
    let result=value1-value2;
    return result*12;
}
let resultSub = sub(8,5);
console.log(resultSub); */

//call back function

function callBackDemo(value1,value2,funcOperation){ //created function as a parameter
    let result = funcOperation(value1,value2); //call the function which is undefined yet
    return result*12;

}
let result = callBackDemo(5,2,function(value1,value2){//defined the undefined function
    return value1 + value2;
});
console.log(result);

