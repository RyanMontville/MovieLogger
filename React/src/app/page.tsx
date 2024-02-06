"use client"

import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slices/userSlice";

export default  function Page() {
  const user = useSelector((state: any) => state.user);
  const username = user[0].username;
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout())
  }

  return <main>
      <h1>Homepage</h1>
      <p>This is the homepage.</p>
      {(username !== "") && <p>Welcome, {username}</p>}
    </main>
}