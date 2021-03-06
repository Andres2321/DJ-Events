import { FaUser } from 'react-icons/fa'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/reactToastify.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "@/context/AuthContext";
import Link from 'next/link'
import Layout from "../../components/Layout"


export default function LoginPage() {

    const [email, setEmail] = useState(' ')
    const [password, setPassword] = useState(' ')

    const {login, error} = useContext(AuthContext)

    useEffect(() => error && toast.error(error))

    const handleSubmit = (e) => {
        e.preventDefault()
        login({email, password})
    }


    return (
        <Layout title="user Login">
            <div>
                <h1>
                    <FaUser /> Log In
                </h1>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="passwor">Password</label>
                        <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <input type='submit' value='login' />
                </form>

                <p>Don't have an account? <Link href='/account/register'>Register</Link></p>
            </div>
        </Layout>
    )
}
