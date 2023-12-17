const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

//If there is no users (the users array is empty), console.log “no one is online”.
if (users.length===0) 
console.log ("no one is online")

//If there is 1 user, console.log “<name_user> is online”.
if (users.length===1) 
console.log(users[0] + " is online")

//If there are 2 users, console.log “<name_user1> and <name_user2> are online”.
if (users.length===2) 
console.log(users[0] + " and " + users[1] + " are online")

//If there are more than 2 users, console.log the first two names in the users array and the number of additional users online.
if(users.length>2)
console.log (users[0] + "," + users[1]+ " and " +  (users.length-2) + " more are online.")
