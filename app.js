/* //declare and define function, input output machines 
//we can pass in arguments or parameters
function test(message) {
    console.log(message);
}
//run the function 
test("Test");

//String ""
const string = "String";
//declaring a variable, defining a variable
test(string);

//Number/Integer
const integer = 99;
test(integer);

//Boolean true or false
const boolean = true;
test(boolean);
let truthy = true;
let falsey = false;


function add(number, number2){
    console.log(number+number2)
}
//need to convert a String to a Number
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a, b);

function add(x, y){
    return x + y;
}
const sum = add
 */
function bmicalculator(height, weight){
    return ((weight/(height*height))*10000);
}
let username = (prompt("Enter your Name"))
let userweight = Number(prompt("Enter your weight in kg"))
let userheight = Number(prompt("Enter your height in cm"));
const user = bmicalculator(userheight, userweight)
console.log(name)
console.log(user)
