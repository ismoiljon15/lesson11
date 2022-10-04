console.log("Function type");


// 1. function decleration
demo()
function demo(){
    console.log("function decleration");
}




// 2. function expression
const demo1 = function(){
    console.log("function expression");
}
demo1()





// 3. arrow function ES6
const demo2 = () => {
    console.log("arrow function");
}
demo2()



// a va b = parametrlar
function add( a, b ){
    console.log(a + b);
}

// argument deyiladi
add(5 , 6 )








function decr(){
    let x = 15
    let y = true
    let z = "salom"

    return x + z 
    console.log("salom");
    console.log("salom");
    console.log("salom");
    console.log("salom");
    console.log("salom");
}


console.log( decr() );






const fizzbuzz = document.querySelector(".fizzbuzz")
let num = 15

if( typeof(num) !== "number" ){
    fizzbuzz.innerHTML = "son emas"
}else if( num % 3 === 0 && num % 5 === 0){
    fizzbuzz.innerHTML = "fizzbuzz"
}else if( num % 3 === 0){
    fizzbuzz.innerHTML = "fizz"
}else if( num % 5 === 0){
    fizzbuzz.innerHTML = "buzz"
}else{
    fizzbuzz.innerHTML = num
}















































