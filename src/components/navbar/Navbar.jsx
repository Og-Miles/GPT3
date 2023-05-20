import React, {useState} from 'react'
import './navbar.css'; 
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
const Menu =() => (
  <>
  <div className="gpt3__navbar-links_container">
          <p><a href="#Home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3</a></p>
          <p><a href="#Possibility">Open Ai</a></p>
          <p><a href="#Features">Case studies</a></p>
          <p><a href="#Blog">Library</a></p>
        </div>
  </>
)
const Navbar = () => {
  const{ toggleMenu, setToggleMenu} = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
<img src={logo} alt='logo'/>
        </div>
        <Menu/>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
      {toggleMenu
        ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu (false) }/>
        : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu (true) }/>
      }
      {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-men_container-links">
          <Menu/>
          <div className="gpt3__navbar-Menu_container-links-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}

export default Navbar
