import { useState } from "react";
import './index.css'
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import Logo from '../../../assets/img/logo.png'

export function MenuHamburger () {

  const [menuOpen, setMenuOpen] = useState(false);
  function navigateToProjects(){
    const element = document.querySelector('.projects');

    const rect = element?.getBoundingClientRect();
    console.log(rect)
    console.log(window.scrollY)
    const distanceFromTop = rect?.top !== undefined ? rect?.top + window.scrollY : 0;

    console.log('result ' + distanceFromTop)
    window.scrollTo({top: distanceFromTop, left: 0, behavior: 'smooth'})
    toggleMenu()
  }
  function navigateToInicio(){
    const element = document.querySelector('.header');

    const rect = element?.getBoundingClientRect();
    console.log(rect)
    console.log(window.scrollY)
    const distanceFromTop = rect?.top !== undefined ? rect?.top + window.scrollY : 0;

    console.log('result ' + distanceFromTop)
    window.scrollTo({top: distanceFromTop, left: 0, behavior: 'smooth'})
    toggleMenu()
  }
  function navigateToAboutMe(){
    const element = document.querySelector('.about-me');

    const rect = element?.getBoundingClientRect();
    console.log(rect)
    console.log(window.scrollY)
    const distanceFromTop = rect?.top !== undefined ? rect?.top + window.scrollY : 0;

    console.log('result ' + distanceFromTop)
    window.scrollTo({top: distanceFromTop, left: 0, behavior: 'smooth'})
    toggleMenu()
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="menu-hamburger" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', right: 0, left: 0, zIndex: 10, backgroundColor: '#0C0C0C' }}>
      <div style={{marginLeft: '0.5rem'}}>
        <img src={Logo} alt="" className="logo"/>
      </div>
      <div className="container-menu">
        <button className="hamburger" onClick={toggleMenu}>
          <CiMenuFries size={30} color="#FFF" />
        </button>
        <nav className={`menu ${menuOpen ? 'open' : ''}`}>
          {
            
            menuOpen && (
                <div className="close">
                  <AiOutlineClose size={30} onClick={toggleMenu}/>
                </div>
              )

          }
          <ul>
            <li><span onClick={navigateToInicio}>Inicio</span></li>
            <li><span onClick={navigateToAboutMe}>Sobre mim</span></li>
            <li><span onClick={navigateToProjects}>Projetos</span></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}