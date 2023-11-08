let current_users: string[] = ["john’, ‘alice’, ‘mike’, ‘sarah’, ‘emma"];
let new_users: string[] = ["john’, ‘peter’, ‘mike’, ‘lucy’, ‘alex"]
for (let i = 0; i < new_users.length; i++) {  let usernameExists = false;
    for (let j = 0; j < current_users.length; j++)  }
    {    if (new_users[1].toLowerCase() === current_users[j].toLowerCase()) }{ Usernameexists = true;
        break;}
{    if (usernameExists) }{console.log(`Sorry, the username ‘${new_users[1]}’ is already taken. Please enter a new username.`);}else{
    console.log(`Congratulations! The username ‘${new_users[1]}’ is available.`);}
    