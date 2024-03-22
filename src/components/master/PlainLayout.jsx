import React from 'react';
import Navbar from '@/components/master/Navbar';

const PlainLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
            
        </>
    );
};

export default PlainLayout;