let user = {
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

function addFriend(userObj, friend) {
    // Only change code below this line
    let arr = []
    arr = userObj.data.friends;
    arr.push(friend)
    console.log(arr[1])
    return arr;
  
    // Only change code above this line
  }
  
//console.log(addFriend(user, 'Pete'));
console.log(addFriend(user, 'Harry'))
console.log(addFriend(user, 'Peter'))
console.log(addFriend(user, 'Johnny'))