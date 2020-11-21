import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.webm' autoPlay loop muted />
      <h1>TECHUMEN 2020</h1>
      <p>The Mega Event of ACSES </p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('youtube')}
        >
          WATCH TRAILER <i className='far fa-play-circle' ></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
