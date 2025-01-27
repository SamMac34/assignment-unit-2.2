// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Create a variable called name and set it to the string value 'Dane'.
// We check if the variable name is the 'Mary', if it is we console.log 'Hi, Mary!'. If the 
// variable name is not Mary, which it isn't, then we console.log 'How do you do?'.
// 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Create a variable called secret.
// Create a variable called code and set it to 123 as a number.
// We check if code is the number 123. Code is the number 123 so the value of secret will be set to super and the value of code will be 
// set to (code * 2).  Code is now set to the number 246.
// Check if code is greater than 250.  Code is less than 250 so secret will not be set to 'duper'.
// Console.log(secret) will be 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// Create a variable called isStudent and set the boolean value to true.
// Create a variable called age and set it to the number 34.
// Create a variable called zip and set it to the number 55407.
// Check if both the variable isStudent is equal to true and also if the variable zip is greater than 80000. If both
// are true then console.log 'You're a student on the West Coast!'. Zip is not greater than 80000 so we move to the next statement.
// Check if the variable isStudent is false or if the variable age is less than 30.  If either of these are true, then console.log 'What are your hobbies?'.  Neither
// are true so we move to the next statement.
// Check if variable isStudent is true.  It is, so console.log will run 'Welcome to Prime'
// If none of the above conditionals had been true, then console.log would have run 'How about the weather?'.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo values are reversed.
// Should be colorOne = 'blue'; colorTwo = 'red';
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Missing second line of code, need to add code: colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Asks if either part of conditional is true.  Should ask if both parts of conditional are true, use && in place of ||.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - Conditional is written backwards.  Should be if(age >= minAge).
//FIX - Code blocks for if/else are reversed.  'no entry' and 'entry' should be switched.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

