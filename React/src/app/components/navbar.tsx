"use client"

import { login, logout } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Navbar() {
    const user = useSelector((state: any) => state.user);
    const username = user[0].username;
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout());
    }
    return <nav>
        <h1>
            <a href="https://ryanmontville.com">Ryan Montville</a>&nbsp;|&nbsp;
            <Link href="/"><span className="material-symbols-outlined">
                live_tv
            </span>
                MovieLogger</Link></h1>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/search">Search</Link></li>
            <li>Movies</li>
            {(username!=="") ? 
                (<span>Welcome {username} | <button onClick={handleLogout}>Logout</button></span>)
            :
                (<span><Link href="/login">Login</Link> | <Link href="/signup">Sign Up</Link></span>)
            }
        </ul>
    </nav>
}