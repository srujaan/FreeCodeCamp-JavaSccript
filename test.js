/*function phoneticLookUp(vallee){
    var res = "";

    var looup = {
        "alpha": "adams",
        "bravo": "boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "easy"
    }

    res = looup[vallee];
    return res;
}

console.log(phoneticLookUp("alpha"));*/


//var names = ["Homer", "Bart", "Maggie"];

/*function list(){
    var ans = "";

    var names = ["Homer", "Bart", "Maggie"];
    if (names.length > 2){
        return s
    }
    return ans
}
console.log(list()); */
/*function openOrSenior(data){
    // ...
    var arr = [];
    for (var i = 0; i< data.length; i++){
      arr[i] = 'Open';
      if(data[i][0] >= 55 && data[i][1] >7 ){
        arr[i] = 'Senior';
      }
    }
    return arr;
  }

console.log(openOrSenior('45', '2')); */



/*function alphabetPosition(text) {
    var res = [];
    
    return text;
}

console.log(alphabetPosition("ldagg"))*/

var empty = '';
for(i = 0; i < 9; i++) {
    empty = empty + i;
}

console.log(empty);

let nullSet = '';
for(var h = 0; h < 6; h++){
    nullSet = nullSet + h;
}
console.log(nullSet);
console.log(h);

for(var i = 0; i < 9; i++){
    console.log(i);
}


var j = "";
for(i = 0; i < 7; i++){
    j = i; // for last or ultimate value of final value
}
console.log(j + " = j value");

var k = "";
for(i = 0; i < 9; i++){
    k = k + i; // printing every value like a stream of string
}
console.log(k + " = k value");

for(var l = 0; l < 8; l++){
    console.log(l + " = the value of l");
}

var values = ["apple", "ball", "cat"];
for(m = 0; m < values.length; m++){
    var emptySet = [];
    emptySet = emptySet + values;
}
console.log(emptySet);


var values = ["apple", "ball", "cat"];
console.log(values.length)

// array for each

const array1 = ["GoT", "Rick and Morty", "Futurama"];
const copy = [];
array1.forEach(item => console.log(item));

const items = ['item1', 'item2', 'item3'];
const copy1 = [];

items.forEach(item => {
  copy1.push(item)
});

console.log(copy1);

var someWords = ["one", "two", "three", "four"];
someWords.forEach(ele =>{
    console.log(ele);
    if(ele == "two") {
        someWords.shift();
    }
})

/**
 *  for... of
 * */

const value1 = ["SPD", "Ninja Strome", "Mystic Forcee"];
value1.push('The Lost Galaxy');

//var ran = ['The Lost Galaxy'];
var emptyset = [];
for (const iterator of value1) {
    emptyset = iterator
    console.log(emptyset);
}


function area(l,b){
    const area = l *b;
    return area;
}
console.log(area(4, 3));

/*
*ARROW FUNCTIONS */

const materials = [
    "hydrogen",
    "helium",
    "Lithium",
    "Beryllium"
];

console.log(materials.map(material => material.length));
materials.map(({length}) => length)

const num = [3,6,9,12];
const m1 = num.map(x => x*2);
console.log(m1);

function a(){
    const digits = [1,4,5,3,6,5,3]; 
    const result = digits.map(y => y * 4/4 * 4);
    return result
}
console.log(a());
    
const numbers = [1, 3,6,5];
const roots = numbers.map(Math.sqrt);
console.log(roots);

/*FUNCTION TO FIND THE SQUARE ROOT*/

function sqRoot(){
    let num = [];
    const squareroot = num.map(Math.sqrt);
    num = squareroot;
    return squareroot;
}

console.log(sqRoot(5));

function doMath(inputNum1){
   // let inputNum1 = [9];
    //var inputNum1=document.form1.input1.value;
    const result = Math.sqrt(inputNum1);
    return result;
}

console.log(doMath(9));

let n1 = [1,2,3,4,5,6,7,8,9];
let double = n1.map(n1 => n1 * 2);
console.log(double);

/*
*THE OTHER WAY OF WRITING THE ABOVE CODE 
*/

let val = [1,2,3,4,5,6,7,8,9];
let res = val.map(function(numm){
    return numm * 2;
})
console.log(res);

/*
*USING MAP GENERICALLY
 */

let map = Array.prototype.map;
let aa = map.call('Hello World', x => x.charCodeAt(0));
console.log(aa);

function asciiCode(word){
    let map = Array.prototype.map;
    let bb = map.call(word, y => y.charCodeAt(0));
    return bb;
}

console.log(asciiCode('sd'));


function doubleNumber(){
   let cc = [8,39,20,29,4949,55];
   for (let index = 0; index < cc.length; index++) {
       const element = cc[index];
       //console.log(element);
       if (element == 8) {
           console.log("8 is my favorite number");
       }
   }
   let dd = cc.map(cc => cc * 2);
   return dd;
}
console.log(doubleNumber());

