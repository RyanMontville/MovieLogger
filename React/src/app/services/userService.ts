import { User } from "../models/user.model";
import { UserListItem } from "../models/userListItem.model";

/***************************************** GETS *****************************************/
export async function getUserByUsername(username: string) {
    return fetch(`http://localhost:9000/users/${username}`).then(res => res.json()).catch(e => e.status);
}

export async function getListsForUserId(userId: number) {
  return fetch(`http://localhost:9000/users/${userId}/lists`).then(res => res.json()).catch(e => e.status);
}

/**************************************** POSTS *****************************************/
  export async function newUser(newUser: User) {
    return fetch('http://localhost:9000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser)
    }).then(data => data.json()).catch(e => e.status);
}

export async function addNewListItem(newListItem: UserListItem) {
  return fetch('http://localhost:9000/addtolist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newListItem)
    }).then(data => data.json()).catch(e => e.status);
}

  