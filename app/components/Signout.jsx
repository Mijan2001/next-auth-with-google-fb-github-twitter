import React from 'react';
import { doSignOut } from '../actions';

const Signout = () => {
    return (
        <form
            action={doSignOut}
            className="hover:text-amber-200 cursor-pointer"
        >
            <button type="submit" className="cursor-pointer">
                Sign Out
            </button>
        </form>
    );
};

export default Signout;
