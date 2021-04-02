import React from 'react';
import '../../css/Header.css';
import personalPhoto from '../../bbbb.png';

const header = () => (
    <div className='header-container'>
        <div className='profile-img-container'>
            <img src={personalPhoto} alt='self' className='photo'/>
        </div>
        <div className='personal-info-container'>
            <h1>Guilherme Carvalho</h1>
            <h2>Sofware Developer</h2>
            <div className='contact-container'>
                <span className='personal-info-item'>929 332 655</span>
                <span className='personal-info-item'>guilhermewk94@gmail.com</span>
                <span className='personal-info-item'>Porto, Portugal</span>
            </div>
        </div>
    </div>
);

export default header;