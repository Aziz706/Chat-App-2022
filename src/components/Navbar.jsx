import React from 'react';
import {auth} from '../firebase'
import {useAuthState} from "react-firebase-hooks/auth"
import SignIn from "./SignIn";
import Logout from "./Logout";

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}
const Navbar = () => {
    const [user] = useAuthState(auth)

    return (
        <div>
            <div className={style.nav}>
                <h1 className={style.heading}>Chat App</h1>
                {user ? <Logout/> : <SignIn />}


            </div>
        </div>
    );
};

export default Navbar;
