import React from 'react';
import '../../css/ProfessionalExperience.css';

const professionalExperience = () => (
    <div className='prof-exp-container'>
        <div className='experience-item'>
            <h3>Software Developer</h3>
            <h4>B2F - BUSINESS TO FUTURE | March 2019 - Present</h4>
            <ul>
                <li>Worked on several projects both alone and within a team</li>
                <li>Developed custom solutions for several customers from Web Solutions, API's and Windows Services</li>
                <li>Developed API's to serve as an interface between ERP systems like SAP and e-commerce solutions, built in-house, for order creation</li>
            </ul>
        </div>
        <div className='experience-item'>
            <h3>IT Technician - Internship</h3>
            <h4>Blip | May 2014 - July 2014</h4>
            <ul>
                <li>Installation and configuration of Windows Server and Linux Server (Ubuntu)</li>
                <li>Installation and configuration of SCCM for distribution of software and Windows OS through the network</li>
                <li>User assistance</li>
            </ul>
        </div>
        <div className='experience-item'>
            <h3>Web developer - Internship</h3>
            <h4>Instituto Profissional do Terço | May 2013 - July 2013</h4>
            <ul>
                <li>Developed a Web platform for managing internal data using PHP, HTML and CSS</li>
            </ul>
        </div>
    </div>
);

export default professionalExperience;