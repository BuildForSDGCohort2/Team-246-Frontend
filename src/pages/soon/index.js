import React from 'react';
import './style.css';
import Countdown from'../../components/Countdown';



const Soon = ({ className }) => {
    return (
        <>
        <div className='container'>
        <h1>COMING SOON</h1>
        <p>We are working hard on new platform that use AI to help doctors diagnose diseases <br/> and communicate. be close.</p>
        </div>

        <Countdown/>
        </>
    );
};



export default Soon;

