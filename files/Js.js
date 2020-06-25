/*let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };
 /*let a = user
 a.data.friends.push('pete')
 console.log(a)
*/
// user.data.friends = 'pete'

/*function addFriend(userObj, friend) {
    // Only change code below this line
    let arr = []
    arr = userObj.data.friends;
    arr.push(friend)
    console.log(arr[1])
    return arr;
  
    // Only change code above this line
  }*/
  
//console.log(addFriend(user, 'Pete'));
/*console.log(addFriend(user, 'Harry'))
console.log(addFriend(user, 'Peter'))
console.log(addFriend(user, 'Johnny')) */


/*function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--){
    reversedStr += str[i];
  }

  return reversedStr

reverseString("hello")*/

/*function factorialize(num) {
  for(var product = 1; num > 0; num--) {
    product = product * num
  }
  return product
}

factorialize(5);*/

/*function findLongestWordLength(str) {
  var w = str.split()
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}*/

//findLongestWordLength("The quick brown fox jumped over the lazy dog");
/*function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

/*function reverseString(str) {
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}*/

/*function findLongestWordLength(str) {
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;
  return fahrenheit;
}

convertToF(30);

*/
/*function confirmEnding(str, target) {
  
  if (str.substr(str.length -target.length,str.length) !== target){
    return false;
  } else{
    return true;
  }

return str;
}

confirmEnding("He has to give me a new name", "name");


*/

/*function repeatStringNumTimes(str, num) {
  var repeatedString = "";
  while (num >0) {
    repeatedString += str;
    num--;
  }
  return repeatedString

}

repeatStringNumTimes("*", 3);
*/

/*let count = 0;
const nums = [0, 1, 2, 3]
nums.forEach(num => {
  if (num) count += 1
})

console.log(count)
*/

/*function truncateString(str, num) {
  if (str.length > num) {
    console.log(str.slice(0, num) + "...")
}
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);*/

function findElement(arr, func) {
  let num = 0;
  for (var i = 0; i < arr.length; i++) {
    num = arr[i]
    if (func(num)) {
      return num;
      
  }
  return undefined;
}
}


findElement([1, 2, 3, 4], num => num % 2 === 0);

function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for(var i =0; i < splitStr.length; i ++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);

  }

  
  return console.log(splitStr.join(' '));
}

titleCase("I'm a little tea pot");

function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

function bouncer(arr) {
  let newArray = []
  for(var i = 0; i <arr.length; i++) {
    if (arr[i]) newArray.push(arr[i])
  }
  console.log(newArray)
  return newArray;
  
}



bouncer([7, "ate", "", false, 9]);


function getIndexToIns(arr3, num3) {
  arr3.sort(function(a, b) {
    return a - b;
  });
  for(var a = 0; a < arr3.length; a++){
    if(arr3[a] >= num3) return a;
  }
  console.log(arr3.length)
  return arr3.length;
}

getIndexToIns([40, 60, 43, 2, 87], 50);

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (var i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name)
console.log(dog.numLegs)

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog.numLegs + " legs.";
  }
};

dog.sayLegs();

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog()


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line
for (let property in beagle) {
  if (Dog.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog, // Solution

  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function(){
    console.log("nom nom nom")
  }

};
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function(){
  console.log("Woof!")
};


// Only change code above this line

let beagle = new Dog();

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("gliding")
  }
}

glideMixin(bird);
glideMixin(boat);

(function () { // this is an anonymous function expression that executes right away
  //This pattern is known as an immediately invoked function expression or IIFE.
    console.log("A cozy nest is ready");
  })();
  
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea();
// Only change code above this line

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = null;
const tea4BlackTeamFCC = null;
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
