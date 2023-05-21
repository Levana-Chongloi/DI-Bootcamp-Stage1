//#1

function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
//funcOne()
//Answer: inside the funcOne function 3

// #1.2 What will happen if the variable is declared with const instead of let ?
//Answer: caught SyntaxError: Identifier 'a' has already been declared


//#2
const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcThree()
// funcTwo()
// funcThree()
//Answer: inside the funcThree function 5

//#2.2 What will happen if the variable is declared with const instead of let ?
//Answer: inside the funcThree function 0

//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
// funcFour()
// funcFive()
//Answer: inside the funcFive function hello

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
// funcSix()
// Answer: inside the funcSix function test
 
// #4.2 What will happen if the variable is declared with const instead of let ?
//Answer: No matter which variable we declare as constant (or even both at a time), the result is always "test"

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
//Answer: in the if block 5

// #5.2 What will happen if the variable is declared with const instead of let ?
//Answer: when declaring the variable "const a = 5", we get two prompts one after the other as shown below in order:
//  1. in the if block 5
//  2. outside of the if block 2

     