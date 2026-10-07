let x = 7

if(x == 7){
    console.log("True")
}else{
    console.log("False")
}

//write an if statement to check whether x is even or odd
if(x%2 == 0){
    console.log("Even")
}else{
    console.log("Odd")
}


let student_score = Number(prompt("Enter student score"))
let attendance = Number(prompt("Enter attendance"))


if(student_score > 90){
    if (attendance > 80){
        console.log("Excellent student")
    }else{
        console.log("Good score but attendance needs improvement")
    }
}else{
    if(attendance > 80){
        console.log("Poor score but good attendance")
    }else{
        console.log("Poor score and poor attendance")
    }
}


///use a ternary operator to write a program that checks
//whether a number is even or odd
let number = Number(prompt("Enter a random number"))
let check_even = number%2==0 ? "Even" : "Odd"
console.log(check_even)


//using a ternary operator write a program that checks whether a 
//person is eligible to get a driver's license -> assume 
//minimum age to get one to be 18 years -take user input
//of age

let age = Number(prompt("Enter your age"))
let verify_driver = age >= 18 ? "valid" : "Invalid"
console.log(verify_driver)