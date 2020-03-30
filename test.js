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
