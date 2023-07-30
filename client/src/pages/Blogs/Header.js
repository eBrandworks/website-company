import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { BASE_URL } from './helper';
import axios from 'axios'

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
        axios(`${BASE_URL}/profile`, {
            method: 'GET',
            credentials: 'include',
            withCredentials: true,         
        }).then(res => {
            console.log(res);
            setUserInfo(res.data);
        })
    }, []);

    async function logout() {
        await axios(`${BASE_URL}/logout`, {
            method: 'POST',
            credentials: 'include',
            // withCredentials: true,
        });
        setUserInfo(null);
    }
    const username = userInfo?.Username;

    return (
        <>
        
            <nav id="form1" className="navbar navbar-expand bg-body-tertiary">
                <div className="container justify-content-end">
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav header-nav">
                            {username && (
                                <>
                                    <Link className="nav-link" to="/blog/create">Create New Post</Link>
                                    <a className="nav-link" style={{ cursor: "pointer" }} onClick={logout}>Logout<b>({username})</b></a>
                                </>
                            )}
                            {!username && (
                                <>
                                    <Link className="nav-link" to="/blog/login#form1">Login </Link>
                                    <Link className="nav-link" to="/blog/register#form1">Register</Link>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;