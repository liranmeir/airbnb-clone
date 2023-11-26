let users = [
  {
    name: "Asi",
    userId: 1,
  },
  {
    name: "Melanie",
    userId: 2,
  }
]

//step 1 
// Write the sentences: UserId 1 is Asi. UserId 2 is Melanie... 
// The words UserId and is always have to stay.
/* for (let i = 0; i < users.length; i++ ){
  console.log(`UserId ${users[i].userId} is ${users[i].name} `)
} */


// Create function that gets user id  = 2 and prints a name.
const getUserNameFromId = (user) => {
  const found = users.find((element) => element === user);
  console.log(found)
}
getUserNameFromId(2)

