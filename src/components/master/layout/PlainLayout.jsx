import React from 'react';
import Navbar from '@/components/master/layout/navbar/Navbar';
import { cookies } from 'next/headers'

const PlainLayout = (props) => {
    const cookieStore = cookies()

    const token    = cookieStore.get('token')
    let isLoggedIn = false ;
    isLoggedIn = typeof token!=='undefined' ;

    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}/>
            {props.children}
            
        </>
    );
};

export default PlainLayout;