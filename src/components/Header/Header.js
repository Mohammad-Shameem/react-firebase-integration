import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='header'>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={'/products'}>Products</Link>
                <Link to={'/orders'}>Orders</Link>
                <Link to={"/register"}>Register</Link>
                {user?.displayName && user.displayName}
                {
                    user?.uid        //ekhane amader user e optionl chaining korar karon holo amader user jokhon amader sign out kore tokhon user ke ke ar read korte pare na.tai error diye dy=ey.tai amra optional chaining korlam jate jodi user pay tahole kajta kore nahole dorkar nai. ar amra chaile jekhane user ta ke set korchi sekhane sign out e suer ke empty hishebeo set korle kaj hobe.
                        ? <button onClick={handleSignOut}>Sign Out</button>
                        : <Link to={"/login"}>Login</Link>

                }
            </nav>
        </div>
    );
};

export default Header;