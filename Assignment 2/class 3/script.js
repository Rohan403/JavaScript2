var number1 = "";
var number2 = "";
var operator = "";
function contcatNumber(single_digit){
    if(operator == ""){
        number1 = number1 + single_digit;
        display(number1);
    }else{
        number2 = number2 + single_digit;
        display(number2);
    }
   
}
function add(num1,num2){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    var sum = num1 + num2;
    return sum;
}
function mul(num1,num2){
    var mul = num1 * num2;
    return mul;
}
function display(num){
        var para = document.getElementById('output');
        para.innerText = num; 
}
function deleteLastDigit(){
    if(operator == ""){
        number1 = number1.slice(0 ,-1);
        display(number1);
    }else{
        number2 = number2.slice(0 ,-1);
        display(number2);
    } 
}
function clearAll(){
   number1= "";
   display(number1);
}
function setOperator(new_operator){
    operator = new_operator;
}
function equals(){
    if(operator == "+"){
        number1 = add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }else if(operator == "*"){

    }
}