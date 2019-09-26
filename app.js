'use strict';
/* Problem 1
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11." */

function sum(a, b) {
  var resultSum = a + b;
  var resultString = 'The sum of '+ a + ' and ' + b + ' is ' + resultSum + '.';
  return [resultSum, resultString];
}

testSum(4, 7);

/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45." */

function multiply(c, d) {
  var resultProduct = c * d;
  var resultProductString = 'The product of ' + c + ' and ' + d +' is ' + resultProduct + '.';
  return [resultProduct, resultProductString];
}

testMultiply(5,9);

/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT: Do not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created.*/

function sumAndMultiply(a, b, c) {
  var sum_of_A_B = sum(a, b)[0];
  var sum_of_three = sum(sum_of_A_B, c)[0];
  var sumThreeString = a + ' and ' + b + ' and ' + c + ' sum to ' + sum_of_three + '.';

  var product_A_B = multiply(a, b)[0]; //45
  var product_of_three = multiply(product_A_B, c)[0];
  var productThreeString = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + product_of_three + '.';

  return [sum_of_three, product_of_three, sumThreeString, productThreeString];
}

testSumAndMultiply(4,7,5);

/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT: Do not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. */

function sumArray(sumArr) { 
  var array_idx0 = sumArr[0];
  var array_idx1 = sumArr[1];
  var array_idx2 = sumArr[2];

  var sum_index_0_and_1 = sum(array_idx0, array_idx1)[0];
  var sum_index_0_1_and_3 = sum(sum_index_0_and_1, array_idx2)[0];
  
  var sumArrayString = sumArr[0] + ',' + sumArr[1] + ',' + sumArr[2] + ' was passed in as an array of numbers, and '+ sum_index_0_1_and_3 + ' is their sum.';

  return [sum_index_0_1_and_3, sumArrayString];
}

var array = [2, 3, 4]; 
testSumArray(array);

/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT: Do not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.*/

function multiplyArray(multArr) {
  var array_idx0 = multArr[0];
  var array_idx1 = multArr[1];
  var array_idx2 = multArr[2];

  var mult_index_0_and_1 = multiply(array_idx0, array_idx1)[0];
  var mult_index_0_1_and_3 = multiply(mult_index_0_and_1, array_idx2)[0];

  var multArrayString = 'The numbers ' + multArr[0] + ',' + multArr[1] +',' + multArr[2] + ' have a product of ' + mult_index_0_1_and_3 + '.';
  return [mult_index_0_1_and_3, multArrayString];
}
var array = [2, 3, 4]; 
testMultiplyArray(array);

/* Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT: Do not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length. */

function multiplyAnyArray(dynamicArray) {
  var resultProduct = dynamicArray.reduce(function(a, b){
    return multiply(a, b)[0];
  });
  var resultString = 'The numbers ' + dynamicArray + ' have a product of ' + resultProduct + '.';
  return [resultProduct, resultString];
}

var testDynamicArray = [1,2,3,4,5];
testMultiplyAnyArray(testDynamicArray);
