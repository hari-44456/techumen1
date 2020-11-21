import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Events!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'> 
          <ul className='cards__items'>
            <CardItem
              src='images/webcipher.jpg'
              text='Empower your web identity'
              contact='Narahari-9764010025'
              label='WebCipher'
              path='/services'
            />
            <CardItem
              src='images/code1.jpg'
              text='Code until you crack it ! '
              contact='Shreyas 9370719836'
              label='CodeKombat'
              path='/services'
            />
            <CardItem
              src='images/code2.jpg'
              text='Hritik - 9067752821'
              contact='Hritik - 9067752821'
              label='Retracer'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/auslander.jpg'
              text='The Timeless Murder Mystery '
              contact='Aditya  - 9370771637'
              label='Auslander'
              path='/services'
            />
            <CardItem
              src='images/techtalk.jpg'
              text='Between tech career and obsession '
              contact='Rohit - 9168220087'
              label='Tech Talk'
              path='/products'
            />
            <CardItem
              src='images/elliptas.jpg'
              text='We Roll Personality '
              contact='Anuja - 9422778924'
              label='Eliptas'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
