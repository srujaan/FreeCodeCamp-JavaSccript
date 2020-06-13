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

