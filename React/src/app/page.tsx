"use client"

import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/slices/userSlice";
import { useEffect, useState } from "react";
import { getListsForUserId } from "./services/userService";

export default  function Page() {
  const user = useSelector((state: any) => state.user);
  const username = user[0].username;
  const userId = user[0].userId;
  const [loading, setLoading] = useState(false);
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout())
  }

  useEffect(() => {
    setLoading(true);
    const userLists = getListsForUserId(userId).then((result: any) => {
      setListData(result);
      setLoading(false);
    });
  }, [userId]);

  return <main>
      {(username !== "") ?
        ( <div>
            {JSON.stringify(listData)}
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