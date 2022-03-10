import React from 'react';
import Navbar from './../../../Shared/Navbar/Navbar';
import './FailedPayment.css';
import failed from '../../../img/payment-error.gif';

const FailedPayment = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='failed'>
           <h1> Sorry! Payment UnSuccessfull</h1>
            <img width={'700px'} src={failed} alt="" />
           </div>
        </div>
    );
};

export default FailedPayment;