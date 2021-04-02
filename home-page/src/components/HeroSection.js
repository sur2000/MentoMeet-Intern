import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'
import moon from '../images/moon.svg'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h2>What are you looking for ?</h2>
            <h3>A Mentor. Correct !</h3>
            <p>We got you covered guys, stop worrying about your career</p>
            <p> and clear all your doubts with our experts from top colleges.</p>
            <p>Have a one on one session and try yourself if you feel a change.</p>
            <p>Let MentoMeet solve your doubts.</p>

            <div className='hero-btns'>
                
                <div className='btn1'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Talk to Mentor</Button>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Plans</Button></div>
                <div className='btn2'><Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Schedule A Meeting</Button></div>
            </div>
        </div>
    );
}

export default HeroSection;

