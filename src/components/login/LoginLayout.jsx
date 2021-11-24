import React, { useState } from "react";
import Info from "./Info";
import LoginSection from "./LoginSection";
import Promo from "./Promo";
import {  getAuth, onAuthStateChanged } from "firebase/auth";
import FeedLayout from "../feed/FeedLayout";

const LoginLayout = () => {

    const [login,setLogin] = useState(false);

    const validation = () => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogin(true);
            } else {
                console.log("No user signed in");
            }
        });
    }

    return (
        <div>
            {validation()}
            {login === false ? 
            <div style={_styleLogin.principal}>
            <div style={{..._styleLogin.second}}>
                <Promo/>
                <LoginSection/>
            </div>
            <footer>
                <Info/>
            </footer>
            </div>
            : <FeedLayout/>}
        </div>
    );
};

const _styleLogin = {
    principal: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        width: '100vw',
        margin: 0,
        paddig: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        background: '#FAFAFA',
    },
    second: {
        display: 'flex',
        width: '80%',
        height: '66%',
        justifyContent: 'center',
        marginTop: '60px',

    }
}

export default LoginLayout;