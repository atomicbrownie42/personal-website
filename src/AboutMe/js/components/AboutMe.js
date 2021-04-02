import React, { Component } from 'react';
import '../../css/AboutMe.css';
import Header from './Header';
import Summary from  './Summary';
import ProfessionalExperience from './ProfessionalExperience';
import Education from './Education';

class AboutMe extends Component {

    render() {
        return (
            <div className='about-me-container'>
                <div className='cv-left-side-container superfont'>
                    Skills
                </div>
                <div className='cv-right-side-container'>
                    <Header></Header>
                    <Summary></Summary>
                    <ProfessionalExperience></ProfessionalExperience>
                    <Education></Education>
                </div>
            </div>
        );
    }
}

export default AboutMe;