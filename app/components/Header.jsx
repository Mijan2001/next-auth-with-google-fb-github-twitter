import React from 'react';

import { auth } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';
import Signin from './Signin';
import Signout from './Signout';

const Header = async () => {
    const session = await auth();
    console.log('session : ', session);

    //     এখানে session এর মধ্যে user এর সব তথ্য থাকবে। যেমনঃ
    // {
    //     name: 'Mijanur Rahman',
    //     email: 'mijan.cse19@gmail.com',
    //     image: 'https://lh3.googleusercontent.com/a/ACg8ocLKStd2_zp_CwshhHnbrnEEOLrizbeX4Ufe9J5SZZvc6OB1UaBJ=s96-c'
    //   },
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <p className="text-2xl font-bold">My App</p>
                </Link>
                {session?.user ? (
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">
                            {session?.user?.name}
                        </span>
                        <Image
                            className="rounded-full border-2 border-white"
                            src={session?.user?.image}
                            alt={session?.user?.name}
                            width={40}
                            height={40}
                        />
                        <Signout />
                    </div>
                ) : (
                    <Signin />
                )}
            </div>
        </header>
    );
};

export default Header;
