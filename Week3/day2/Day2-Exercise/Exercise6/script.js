5 + "34"
// Prediction: 534 (5 is a number and 34 is a string)
// Actual: 534

5 - "4"
// Prediction: NaN (5 is a number and 4 is a string)
// Actual: 1

10 % 5
// Prediction:0 (calculate the modulo)
// Actual: 0

5 % 10
// Prediction:5 (calculate the modulo)
// Actual:

"Java" + "Script"
// Prediction:JavaScript (string concatenation)
// Actual: JavaScript

" " + " "
// Prediction:blank (we use quotations with no value to add space)
// Actual: blank

" " + 0
// Prediction: 0 (blank/space with 0)
// Actual: 0

true + true
// Prediction: error since it is not a number or string to add
// Actual: 2 (true converts to 1 as a number, so 1+1=2)

true + false
// Prediction: 0 (error since it is not a number or string to add)
// Actual: 1 (true converts to 1 and false converts to 0, so 1+0=1)

false + true
// Prediction:1 (false converts to 0 as number, and true converts to 1 as number, so 0+1=1)
// Actual: 1

false - true
// Prediction:-1 (false converts to 0, and true to 1, so 0-1=-1)
// Actual: -1

!true
// Prediction:false (logical expression is "not true" which equals "false")
// Actual:false

3 - 4
// Prediction: -1 (subtraction of 3 from -4 is -1)
// Actual: -1

"Bob" - "bill"
// Prediction: NaN (string subtracts string gives NaN as output)
// Actual: NaN
