import { useState } from "react";
import './index.css'
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";

export function MenuHamburger () {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '2rem'}}>
        <img src="./src/assets/img/logo.png" alt="" style={{width: '5vw'}}/>
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
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Sobre mim</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Posts</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}