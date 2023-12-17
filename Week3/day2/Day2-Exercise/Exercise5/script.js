typeof(15)
// Prediction: number
// Actual:number


typeof(5.5)
// Prediction: float (because it comes with the decimal point)
// Actual: number

typeof(NaN)
// Prediction: number (it stands for 'not a number' but data type used to hold is a numeric type)
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string


typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual:

"hamburger" + "s"
// Prediction: hamburgers (string concetenation)
// Actual:hamburgers

"hamburgers" - "s"
// Prediction:
// Actual:

"hamburgers" - "s"
// Prediction: error (since it does not represent an expression)
// Actual: NaN

"1" + "3"
// Prediction:13 (both numbers are inside a string, so instead of addition, a string concatenation will occur)
// Actual: 13

"1" - "3"
// Prediction:NaN (since it is a string)
// Actual: -2

"johnny" + 5
// Prediction:johnny5
// Actual:johnny5

"johnny" - 5
// Prediction: NaN
// Actual:NaN

99 * "hello"
// Prediction:NaN
// Actual:NaN

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false