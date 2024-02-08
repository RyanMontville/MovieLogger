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
      {(username !== "") ?
        ( <div>
            <h2>Movies on your watchlist</h2>
            <p>(coming soon)</p>
            <h2>Movies you have watched</h2>
            <p>(coming soon)</p>
        </div>)
        :
        (<div>
            <h2>Screen seen when user is not logged in</h2>
        </div>)
      }
    </main>
}