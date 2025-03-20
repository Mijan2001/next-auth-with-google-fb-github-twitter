import React from 'react';
import { doSignIn } from '../actions';

const Signin = () => {
    return (
        <form action={doSignIn} className="hover:text-amber-200 cursor-pointer">
            <button type="submit" className="cursor-pointer">
                Sign In with Google
            </button>
        </form>
    );
};

export default Signin;
