 function calculateArea(myRadius) {
    return myRadius * myRadius * Math.PI;
}
var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:"));
var area = calculateArea(myRadius);
alert("A circle with a " + myRadius + " centimeter radius has an area of " + area + " centimeters.");
     

var speed = function(distance, time) {
    return distance / time;
}
var distance = prompt('What distance do you want to travel (in km)');
distance = parseInt(distance);
var time = prompt('how much time do you plan to drive? (in hour)');
time = parseInt(time);
d = speed(distance, time);
alert("You traveled "+d+" km/h");



function calculateDollars(myDollars, myEuro) {
    return myDollars * myEuro;
}
var myDollars = prompt("Enter the amount of dollars :");
myDollars = parseInt(myDollars);
var myEuro = 0.89;

alert("Receive " + myDollars + " euros for this course.");
     


