// online exam
let mark=80;
if(mark>=90){
    console.log("Grade A");
}
else if(mark>=70){
    console.log("Grade B");
}
else if(mark>50){
    console.log("Grade C");
}
else if(mark>=35){
    console.log("Just Pass");
}
else{
    console.log("Fail");
}

//employee attendance and salary

let attendance =24;
let salary =25000;
if(attendance>=26){
    salary=salary+2000;
    console.log("Full salary + Bonus: Rs."+salary);
}
else if(attendance>=22){
    console.log("Full Salary: Rs."+salary);
}
else if(attendance>=18){
    salary =salary * 0.80;
    console.log("80% salary :Rs."+salary);
}
else{
    salary =salary*0.50;
    console.log("50% salary:Rs."+salary);
}


//Banl Loan Eligibility

let salary=45000;
let age=25;
if(salary>=50000 && age>=21){
    console.log("Loan Eligible");
}
else if(salary>=30000 && age>=21){
    console.log("partially Eligible");
}
else{
    console.log("Loan Not Eligible");
}

//E commerce order

let orderAmount=1500;
let deliveryCharge;
if(orderAmount>=2000){
    deliveryCharge =0;
    console.log("Free delivery");
}
else if(orderAmount>=1000){
    deliveryCharge =50;
    console.log("Delivery Charge: Rs."+deliveryCharge);
}
else{
    deliveryCharge =100;
    console.log("Delivery Charge: Rs."+deliveryCharge);
}

let totalAmount = orderAmount +deliveryCharge;

//electricity bill

let units=350;
let bill;

if(units<=100){
    bill=units*2;
}
else if (units <= 200) {
    bill = units * 3;
}
else if (units <= 300) {
    bill = units * 5;
}
else {
    bill = units * 7;
}
if (bill > 1000) {
    bill = bill + 100;
}
console.log("Electricity Bill: Rs." + bill);