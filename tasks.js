//-------------------Q1-------------------:
/*
The following statements are representing variables declarations.
Each statement has an error you need to fix it.
Please run the code listed down in a console. 
Add the right declarations in the  [write your code here] section.


Note: in order to see the errors in the console, please:
 1.uncomment the statements one by one.
 2.run your liver-server on index.html page.
*/

// let let = "";
// let "name" = Josh;
// let first project = "Hello World";
// let true = 1;
// let y 5;
// let sum == 40;
// let x, = "foo";
// let remainder = 10 % 2 =0;


let =" ";
let name = "Josh";
let First_project ="Hello World";
let y = 5;
let sum = 40;
let x = "froo";
let remainder = (100%2);

//-------------------Q2.1-------------------:
//Declare a variable called boolean and assign it a value of true.

//let boolean = true


//-------------------Q2.2-------------------:
// Change the value of the Boolean variable in the previous question to be false.


let boolean = false 


//-------------------Q3-------------------:
/*
print your Full Name
1.  Declare 3 variables called
    -firstName
    -lastName  
    -fullName
2.  assign your personal information as values, and print your full name on console
Note:
    - The result should have the format of: : "Hello, I am (your full name)"
*/


   let firstName = "Bledar" ;
    let lastName = "Sharavolli" ;
    let fullName =firstName+ " " +lastName ;
    print = "Hello i am"+" "+ fullName



//-------------------Q4-------------------:
/*
One Awesome Message
 1. Create the following variables:
     - firstName1
     - interest
     - hobby
 2. Create a variable named awesomeMessage and set it to an awesome message using
     string concatenation and the variables above.
 3. Log the awesomeMessage variable to the console.

 Notes:
 - The `awesomeMessage` should have the format of:
   Hi, my name is _____. I love _____. In my spare time, I like to _______.
   */


   let firstName1 = "Bledi"
   let interest = "Traveling"
   let  hobby = "do Acting"
   awesomeMessage =  "Hi, my name is"+ " " + firstName1 +"." +" I love "+" " +interest +" " +"In my spare time, I like to"+" "+ hobby+" "+".";
  +console.log(awesomeMessage)

//-------------------Q5-------------------:
/*
Calculate your age in 2030
Want to find out how old you'll be? Calculate it!
1.  Store your birth year in a variable.
2.  Store a future year (2030) in a variable.
3.  Calculate your age for that year based on the stored values.

For example, if you were born in 1990, then in 2030 you'll be  40 .

Notes:
 - The result should have the format of:
 "I will be  NN in YYYY".
*/


let myBirthday = 1991 ;
let futureYear = 2030 ;
let willBe = futureYear - myBirthday ;
+console.log("I will be"+" " + willBe +" " +"in 2030" ) 


//-------------------Q6-------------------:
/*
1. Uncomment the expressions below the these instructions.
2. Find out the results of the following expressions.
3. Double check your answer on console.
4. Replace null or ??? with your answer.
*/

let result = 15 - 6 * 2 + 8 / 4;
 //result = 5;

 let convert = 2 + "1";
 //convert = 21;

 let sum1 = 5 + 4 + "2";
 //sum1 = 92;

 let quotient = 20 / 4;
 //quotient = 5 ;

 let remainder1 = 8 % 3;
// remainder1 = 2 ;

 let exponent = 2 ** 8;
// exponent = 256;

 let n = 2;
 n += 5; 
 // n = 7 ;
   n *= 2; 
 //m = 4
 let r = 3;
  const s = r++; 
  // r = 4 ;
   // s = 3;

let a = 3;
 const b = ++a; // a = 4, b = 4//

 let j = 7;
 j **= "hello"; // j = NaN

 let signedIn;
 console.log(signedIn);// udefined 

//-------------------Q7-------------------:
// Fill in the null,and uncomment the expression  (4 expressions)

/*Complete the expression by filling in the missing number.
 The expression should equal 20.*/
 1 + 1 + 2 + 3 + 5 + 8;

/*Complete the expression by filling in the missing number.
The expression should equal true.*/
 10 == 10;

/*Complete the expression by filling in the missing operator.
 The expression should equal 37.*/

 12-1-5 * 5;

/*Complete the expression by filling in the missing operator.
 The expression should equal 2.*/

 3 * 4 % 5;

//-------------------Q8-------------------:
/*Write an expression that uses at least 3 different arithmetic operators.
The expression should equal 36.
Hint: +, -, *, /, and % are possible arithmetic operators
*/

 
+console.log(6*6+0)
+console.log(36/6*6)
+console.log(3.6*10)


//-------------------Q9-------------------:
//  What does typeof() method return in javaScript?
// inform the type of the valuable it can be number boolean string undefined
// Uncomment the expressions below and replace null with your answer

 let result1 = typeof 5;
// result1 = number;
let result2 = typeof -5;
// result2 = number;
let result3 = typeof true;
// result3 = boolean;
 let result4 = typeof "SHA";
// result4 = string;
 let num;
 let result5 = typeof num;
// result5 = undefined;

// Note: you can check the resources section in README file.

//-------------------Q10-------------------:
/*
 The Temperature Converter:
  1.  Store a celsius temperature into a variable.
  2.  Convert it to fahrenheit and output "NN°C is NN°F".
  3.  Now store a fahrenheit temperature into a variable.
  4.  Convert it to celsius and output "NN°F is NN°C."

    Note : check the resource part in README file to see the
    conversion equation.
*/


let celsius = +prompt("insert temperature celsius");
let fahrenheit = (celsius*9/5)+32 ;
print = fahrenheit + "NN°F"





//-------------------Q11-------------------:
/*
1.  Create a variable called bill and assign it 
    the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!).
2.  Next, create a variable called tip and assign it the result
    of multiplying bill by a 16% tip rate.
3.  Finally, add the bill and tip together and store it into a variable called total.
4.  Print the total to the JavaScript console.
*/


bill = 10.25 +3.99 + 7.15
tip = 26% bill
total = bill +tip 



//-------------------Q12-------------------:
// Given that
let float = 4.5;
//  Replace null with your answer in the next expressions.

let integer = parseInt(float);
integer = null;

let roundDown = Math.floor(float);
roundDown = 5;

let roundedUp = Math.ceil(float);
roundedUp = 5;

let power = Math.pow(3, 3);
power = null;

/*-------------------Good Luck--------------------------*/
