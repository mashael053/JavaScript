

// Question number one ////


let length = 13
let weidth = 13 

let result = length * weidth
console.log("The area of the rectangle is:" + result );


// Question number two //

let temperature = 25 
let Fahernhight = (temperature  * 9/5) + 32;
console.log(`${temperature}°C is ${Fahernhight} °F`)
let Celsius =  (temperature  - 32) * 5/9
console.log(`${temperature}°F is ${Celsius} °C`)



// Question number three //


const DataDay = new Date();
let hours = DataDay.getHours()
let Seconds = DataDay.getSeconds()

let hoursAll = hours * 60 * 60 
console.log(hours +  "   Hours  "  +   hoursAll + "    Seconds")


// question number four //

let degree = 95;

if(degree >= 95) { 
   console.log("degree is +A");

}else if(degree >= 90 ){
   console.log("degree is A");
}else if(degree >= 85){
   console.log("degree is +B");
}
else if(degree >= 80){
    console.log("degree is B");
 }
else if(degree >= 75 ){
    console.log("degree is +c");
 }
else if(degree >= 60 ){
    console.log("degree is c");
 }
else if(degree >=  55 ){
    console.log("degree is +D");
 }
 else if(degree >=  50 ){
    console.log("degree is D");
 }
 else{
    console.log("degree is F")
 }









