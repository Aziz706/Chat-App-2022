import React, {useRef} from "react";
import Navbar from "./components/Navbar";

import {auth} from "./firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "./components/Loader";
import Chat from "./components/Chat";
import SendMessages from "./components/SendMessages";

const style = {
    appContainer: `max-w-[728px] mx-auto text-center`,
    sectionContainer: `flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative overflow-y-auto overflow-auto`
}



const App = () => {
    const [user] = useAuthState(auth)
    // const [user, loading, error] = useAuthState(auth)

    // if (loading) {
    //     return <Loader />
    // }
    const scroll = useRef()

    return (
        <>
            <div className={style.appContainer}>
                <Navbar />
                <section className={style.sectionContainer}>

                    <Chat/>
                </section>
 <span ref={scroll}>
                <SendMessages scroll={scroll}/>
                <span ref={scroll}></span>
            </span>
            </div>
           
        </>

    );
};

export default App;