import { User } from "../models/user.model";

/***************************************** GETS *****************************************/
export async function getUserByUsername(username: string) {
    return fetch(`http://localhost:9000/users/${username}`).then(res => res.json());
}
  
/**************************************** POSTS *****************************************/
  export async function newUser(newUser: User) {
    return fetch('http://localhost:9000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
}


  