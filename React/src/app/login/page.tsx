"use client"

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";
import style from "./page.module.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { getUserByUsername } from "../services/userService";
import { User } from "../models/user.model";
import { ErrorStatus } from "../models/errorStatus.model";
import Link from "next/link";

export default function Login() {
    const [alert, setAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    function handleLogin(e: any) {
        e.preventDefault();
        if (!username || !password) {
            updateAlert("Please enter a username and password");
        } else {
            getUserByUsername(username).then((result: any) => {
                if (result.status === 404) {
                    updateAlert("Username or password incorrect")
                } else {
                    const user: User = {
                    userId: result.userId,
                    username: result.username,
                    role: result.role
                }
                dispatch(login(user));
                router.push('/');
                }
                
            });
        }
    }

    function updateAlert(message: string) {
        setAlert(message);
        setShowAlert(true);
        setTimeout(() => {
            setAlert("");
            setShowAlert(false);
        }, 5000);
    }

    return (
        <div className={style.container}>
            <h1>Login</h1>
            {showAlert &&
                <div className={style.alertBox}>
                    <span className="material-symbols-outlined">
                        warning
                    </span>
                    {alert}
                </div>
            }
            <form className={style.form} onSubmit={handleLogin}>
                <input
                    type="text"
                    className={style.input}
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    placeholder="Password"
                    value={password}
                    className={style.input}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <button className={style.button} onClick={handleLogin}>Login</button>
                <span> Don't have an account? <Link href="/signup">Sign Up</Link></span>
                
            </form>
        </div>
    )
}