/*DIFFERENCE BETWEEN THE VAR AND LET KEYWORDS */
var catName = "Quincy";
//let catName = "Quincy";
var quote;
//let quote

var catName = "Beau";
// let catName = "Beau"

// let keyword allows only once to be declared
// var can be used multiple times which not a good practise

/*COMPARE SCOPES OF THE VAR AND LET KEYWORDS */

function checkScope(){
    "use strict"; // this check unassigned variable using let and const
    // let i = "function scope"
    if(true){
        var i = "block scope"; // changing var to let this does not work
        console.log("Block scope i is: ",i);
    }
    console.log("Function scope i is: ", i);
    return i

}
checkScope();

/*DECLARE A READ-ONLY VARIABLE WITH THE CONST KEYWORD */

function printManyTimes(str){
    "use strict";

    const SENTENCE = str + " is cool"; // const is read only, use capitals variable name while dealing with const

    for(let i = 0; i < str.length; i += 2){
        console.log(SENTENCE);
    }
}

printManyTimes("freeCodeCamp");

/*MUTATE AN ARRAY DECLARED WITH CONST */

const s = [3,4,6];

function editInPlace(){
    "use strict";

    //s = [4,3,2]; // this does not work because of const
    s[0] = 4;
    s[1] = 3;
    s[2] = 6;

}

editInPlace();
console.log(s);

/*PREVENT OBJECT MUTATION */

function freezeObj(){
    "use strict";
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    //Object.freeze(MATH_CONSTANTS); this lets to freeze the values and not changing them

    try {
        MATH_CONSTANTS.PI = 43;
    } catch ( ex ) {
        console.log(ex);
    }

    return MATH_CONSTANTS
}

const PI = freezeObj();
console.log(PI);

/*USE ARROW FUNCTIONS TO WRITE CONCISE ANONYMOUS FUNCTIONS */
/*var magic = function() {
    return new Date();
}*/ // this can be written as below

const magic = () => new Date();

/* WRITE ARROW FUNCTIONS WITH PARAMETERS */

const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1,2], [3,4,6]));

/*WRITE HIGHER ORDER ARROW FUNCTIONS */

const realNumberArray = [4,5.6,-9.7, 3.14, 42, 8.44, -4];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;

};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

/* */