import React from 'react'
import SectionWrapper from './SectionWrapper'
import "../assets/css/present.css";
import config from '../../config.js';
function Present() {
  return (
    <SectionWrapper>
      <div className='mb-64'>
        <h1 className={`absolute -top-[7rem] left-0 right-0 text-center flex items-center justify-center text-xl font-extrabold ${config.primaryTextColor} drop-shadow-lg`}>
          {config.presentTitle}
        </h1>
      </div>
      <div className="birthday-gift">
        <input id='click' type='checkbox'/>
        <label className='gift' htmlFor='click'>
          <div className="gift-top"></div>
          <div className="gift-bottom"></div>
          {config.gifts.map((gift, index) => (
            <div key={index} id="raffle-red" className={`entry raffle raffle-${index + 1}`}>
              <div className="no-scale">
                <span className="ticket-text">{gift}</span>
              </div>
            </div>
          ))}
        </label>
      </div>
    </SectionWrapper>
  )
}

export default Present