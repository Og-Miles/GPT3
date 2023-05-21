import React from 'react'
import './header.css'; 
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
     <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Lets Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, explicabo repellendus? Numquam eos voluptate esse repellendus impedit est dolorem laborum.</p>
      <div className="gpt3__header-content__input">
        <input type="email" placeholder='Your Email Address' />
        <button type='button'>Get Started</button>
      </div>
      <div className="gpt3__header-content__people">
        <img src={people} alt="people" />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
        <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
        </div>
      </div>
     </div>
    </div>
  )
}

export default Header
