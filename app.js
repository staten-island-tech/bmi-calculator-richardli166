//declare and define function, input output machines 
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
const integer = 98;
test(integer);

//Boolean true or false
const boolean = true;
test(boolean);

function add(number, number2){
    console.log(
    number+number2
    )
}
let a = Number(prompt("enter a number"));
let b = Number(prompt("enter another number"));
add(a, b);
