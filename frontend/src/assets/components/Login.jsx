import React, { useRef, useState, useEffect, useContext }  from "react";
import AuthContext  from '../context/AuthProvider'

export default function Login() {

    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])


    useEffect(() => {
        
    })

    return (
        <div>Login</div>
    )
}
