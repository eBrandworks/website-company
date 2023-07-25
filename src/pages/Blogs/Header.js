import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const Header = () => {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:3001/profile', {
            credentials: 'include',
        }).then(res => {
            res.json()
            .then(userinfo => {
                setUserInfo(userinfo);
            });
        }).catch((err)=>{
            console.log(err);
        })
    }, []);

    function logout(){
        fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method:'POST',
        });
        setUserInfo(null);
    }
    const username = userInfo?.Username;

    return (
        <React.StrictMode>
            <nav id="form1" className="navbar navbar-expand bg-body-tertiary">
                <div className="container justify-content-end">
                    <div className="" id="navbarNavAltMarkup">
                        <div className="navbar-nav header-nav">
                            {username && (
                                <>
                                    <Link className="nav-link" to="/blogs/create">Create New Post</Link>
                                    <Link className="nav-link" to={"/blogs"} style={{cursor:"pointer"}} onClick={logout}>Logout<b>({username})</b></Link>
                                </>
                            )}
                            {!username && (
                                <>
                                    <Link className="nav-link" to="/blogs/login#form1">Login </Link>
                                    <Link className="nav-link" to="/blogs/register#form1">Register</Link>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </nav>
        </React.StrictMode>
    )
}

export default Header;