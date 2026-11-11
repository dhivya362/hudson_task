// grade system

let mark=30;
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
    console.log("Just Pass");
}
else{
    console.log("Fail");
}

//Shopping amount

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


// Find largest three numbers

let a=15;
let b=40;
let c=30;
if(a>b && a>c){
    console.log("A is Largest");
}
else if(b>a && b>c){
    console.log("B is Largest");
}
else if(c>a && c>b){
    console.log("C is Largest");
}
else{
    console.log("Some numbers are equal");
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

//login form
let username="dhivya";
let password="1234";
if(username==="dhivya" && password==="1234"){
    console.log("Login successfull");
}
else{
    console.log("Invalid username and password");
}