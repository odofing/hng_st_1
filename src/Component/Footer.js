import React from 'react'
import ZuriLogo from '../Img/logo2.png'
import Ing from '../Img/logo1.png'


const Footer = () => {
    return (
        <>

            <div className='d-flex justify-content-between m-auto'>
                <img src={ZuriLogo} alt='ing' />
                <h5>HNG Internship 9 Frontend Task</h5>
                <img src={Ing} alt='zuri' />

            </div>
        </>
    )
}

export default Footer