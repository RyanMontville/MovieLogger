"use client"

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/slices/userSlice";
import style from "../login/page.module.css";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { newUser } from "../services/userService";

export default function SignUp() {
    const [alert, setAlert] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const router = useRouter();

    function handleSignUp(e: any) {
        e.preventDefault();
        if (!username || !password) {
            updateAlert("Please enter a username and password");
        } else {
            setLoading(true);
            const userToSend = {
                userId: 0,
                username: username,
                role: "user"
            }
            newUser(userToSend).then((result: any) => {
                if (result.status === 400) {
                    setLoading(false);
                    updateAlert("Username already taken")
                } else {
                    setLoading(false);
                    router.push('/login');
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
            <h1>Sign Up</h1>
            {showAlert &&
                <div className={style.alertBox}>
                    <span className="material-symbols-outlined">
                        warning
                    </span>
                    {alert}
                </div>
            }
            <form className={style.form} onSubmit={handleSignUp}>
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
                {loading ? (
                    <div className={style.ldsDualRing}></div>
                ) : (
                    <div>
                        <button className={style.button} onClick={handleSignUp}>Sign Up</button>
                        <span>Already have an account? <Link href="/login">Login</Link></span>
                    </div>
                )}
            </form>
        </div>
    )
}