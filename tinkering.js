/*function multiply(a, b){
return a*b;
}

const result = multiply(2, 4);

console.log(result);*/

/*
var number = 15;
if (number % 2 === 0) {
  console.log("even");
} else {
console.log("odd");
}*/

/*
var musicians = 2;
if (musicians <= 0){
  console.log("not a group");
} else if (musicians == 1){
  console.log("solo");
} else if (musicians == 2){
  console.log("duet");
} else if (musicians == 3){
  console.log("trio");
} else if (musicians == 4){
  console.log("quartet");
}else {
  console.log("this is a large group");
}
*/

/*var room = "billiards room";
var suspect = "Mr. Parkes";

var weapon = " ";
var solved = false;

if (room == "dining room") {
  weapon = "knife";
  if (suspect == "Mr. Parkes")
  solved = true;
} else if (room == "billiards room") {
  weapon = "pool stick";
  if (suspect == "Mrs. Sparr")
  solved = true;
} else if (room == "gallery") {
  weapon = "trophy";
  if (suspect == "Mrs. Van Cleve")
  solved = true;
} else if (room == "ballroom") {
  weapon = "poison";
  if (suspect == "Mr. Kalehoff")
  solved = true;
} else {
  console.log(" ");
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!");
}*/


/*let balance = -15;
let isActive = true;
let checkBalance = true;

if (checkBalance === true) {
  // Cases when account is active. Now, the balance could be <, =, or > zero
  if (isActive === true && balance > 0) {
      console.log("Your balance is $" + balance.toFixed(2) + ".");
  }
  else if (isActive === true && balance === 0){
      console.log("Your account is empty.");
  } 
  else if (isActive === true && balance < 0){
      console.log("Your balance is negative. Please contact bank.");
  }
  // Case when account is NOT active
  else if (isActive === false) {
      console.log("Your account is no longer active.");
  }  
} 
else {
console.log("Thank you. Have a nice day!");
}*/

/*var flavor = "vanilla";
var vessel = "bowl";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings ==="peanuts")) {
console.log("I would like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
} */

var shirtWidth = 24; // size L (large)
var shirtLength = 31; // size L (large)
var shirtSleeve = 8.88; // size L (large)

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  size = "S";
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  size = "M";
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)){
  size = "L";
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
  size = "XL";
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)){
  size = "2XL";
}else if (shirtWidth >= 28 && shirtLength >= 34  && shirtSleeve > 10.13 ){
  size = "3XL";
} else {
  size = "NA"
}
console.log(size);