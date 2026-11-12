//grade calculation
let mark=90;
if(mark>=90){
    console.log("Grade A");
}
else if(mark>=70){
    console.log("Grade B");
}
else if(mark>=50){
    console.log("Grade C");
}
else if(mark>=35){
    console.log("Grade D")
}
else{
    console.log("Fail")
}

//Login validation

let username="dhivya";
let password="1234";
if(username==="dhivya" && password==="1234"){
    console.log("Login successfull");
}
else{
    console.log("Invalid username and password");
}

//electricity bill
let units=300;
let bill;
if(units<=100){
    bill=units * 2;
}
else if(units<=200){
    bill=units * 3;
}
else{
    bill=units * 5;
}
console.log("Electricity bill:Rs."+bill);

// Employee Bonus
let salary=30000;
let experience=5;
if(experience>=5){
    let bonus=salary * 0.10;
    console.log("bonus: Rs."+bonus);
}
else{
    console.log("No bonus");
}

//largest of three
let a=20;
let b=30;
let c=45;
if(a>b && a>c){
    console.log("Largest Number is A");
}
else if(b>a && b>c){
    console.log("Largest number of B");
}
else if(c>a && c>b){
    console.log("Largest number of C");
}
else{
    console.log("Some numbers are equal");
}

//shopping discount

let amount=1000;
if(amount>=5000){
    console.log("you got 30% discount");
}
else if(amount>=4000){
    console.log("you got 20% discount");
}
else if(amount>=3000){
    console.log("you got 10% discount");
}
else if(amount>=2000){
    console.log("you got 5% discount");
}
else{
    console.log("No discount");
}

//ATM Withdrawal

let balance=10000;
let withdraw=3000;
if(withdraw>0 && withdraw <=balance){
    console.log("withdrawal successfull");
}
else{
    console.log("Insufficient balance");
}

//Driving License

let age=20;
let testpassed=true;

if(age>=18 && testpassed==true){
    console.log("Eligible for driving License");
}
else{
    console.log("Not eligible for driving license");
}

//stock management
let stock=10;
let required=5;
if(stock>0 && stock >= required){
    console.log("Stock available");
}
else{
    console.log("out of stock");
}

// Scholarship eligibility

let mark=84;
let familyincome=150000;
if(mark>=85 && familyincome<=200000){
    console.log("Eligible for scholarship");
}
else{
    console.log("Not Eligible for scholarship");
}