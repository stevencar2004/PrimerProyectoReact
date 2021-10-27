import React from "react";
import {Link} from 'react-router-dom';
import Properties from "./Properties";
import Search from "./Search";
import "./styles/header.sass"


class Menu extends React.Component{
  constructor(props){
    super(props);
    this.state={
      login:false
    }
  }

  render(){
    return(
      <header className="header" id="header">
        <Properties login={this.state.login}/>
        
        <div className="header__btnMenu">
          <button className="header__btn" id="btnMenu">
            <i className="fas fa-bars menu__icon"></i>
          </button>
        </div>

        <div className="header__logo">
          <Link href="/homeUser" className="header__title">
            <i className="fas fa-code header__icon"></i>C0d3 Team
          </Link>
        </div>
        
        <Search />

        <nav className="menu" id="menu">
        {this.state.login===true ?
          <ul className="menu__list">
            <li className="menu__item submenu">
              <Link to="#" className="menu__link submenus">
              <span className="menu__user">
                {/* {(user.avatar)?
                <img src="/user/avatar" className="logo__user" />
                : */}
                <img
                src="/img/logoUser.png"
                alt="logo User"
                className="logo__user"
                for="user"
                />
                {/* } */}
          
                <label for="user" className="logo__user__label">
                Hola, Usuario
                {/* Hola, {(user)?user.username:"Usuario"} */}
                </label>
              </span>
              </Link>
              <ul className="submenu__list submenu__list__user">
              <li className="submenu__item">
                <Link href="/userAccount" className="menu__link">
                <i className="far fa-address-card link__icon"></i>
                Mi cuenta
                </Link>
              </li>
              <li className="submenu__item">
                <Link to="#" className="menu__link">
                <i className="fas fa-users link__icon"></i>
                Mi Suscripción
                </Link>
              </li>
              <li className="submenu__item">
                <Link to="#" className="menu__link">
                <i className="far fa-star link__icon"></i>
                Favoritos
                </Link>
              </li>
              <li className="submenu__item">
                <Link to="#" className="menu__link">
                <i className="fas fa-headset link__icon"></i>
                Soporte
                </Link>
              </li>
              <li className="submenu__item">
                <Link to="/logout" className="menu__link">
                <i className="fas fa-power-off logout__icon"></i>
                Cerrar Sesión
                </Link>
              </li>
              </ul>
            </li>
          
            <li className="menu__item submenu">
              <Link to="#" className="menu__link submenus">
              Inicio
              <i className="fas fa-sort-down icon__desplegar"></i>
              </Link>
              <ul className="submenu__list">
              <li className="submenu__item">
                <Link to="/codeRepos" className="menu__link">C0d3Repos</Link>
              </li>
              <li className="submenu__item">
                <Link to="/codeCowork" className="menu__link">C0d3Coworking</Link>
              </li>
              <li className="submenu__item">
                <Link to="/codeClases" className="menu__link">C0d3Clases</Link>
              </li>
              </ul>
            </li>
          
            <li className="menu__item submenu">
              <Link to="#" className="menu__link submenus">
              Temas
              <i className="fas fa-sort-down icon__desplegar"></i>
              </Link>
              <ul className="submenu__list">
              <li className="submenu__item">
                <Link
                to="#submenu2"
                className="menu__link"
                id="btnsubmenu"
                name="lenguaje"
                >
                Lenguajes de programación
                <i className="fas fa-caret-right submenu__foward"></i>
                </Link>
                <ul className="submenu2__list" id="submenu2">
                <li className="submenu__item submenu__back">
                  <i className="fas fa-long-arrow-alt-left cerrar__submenu"></i>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">HTML & CSS</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">Python</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">JavaScript</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">Java</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">SQL</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">C++</Link>
                </li>
                </ul>
              </li>
              <li className="submenu__item">
                <Link to="#submenu3" className="menu__link" name="desarrollo">
                Desarrollo Web
                <i className="fas fa-caret-right submenu__foward"></i>
                </Link>
                <ul className="submenu2__list" id="submenu3">
                <li className="submenu__item submenu__back">
                  <i className="fas fa-long-arrow-alt-left cerrar__submenu"></i>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">HTML5</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">CSS</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">JavaScript</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">NodeJS</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">Angular</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">React</Link>
                </li>
                </ul>
              </li>
              <li className="submenu__item">
                <Link to="#submenu4" className="menu__link" name="BD">
                Desarrollo Base de Datos
                <i className="fas fa-caret-right submenu__foward"></i>
                </Link>
                <ul className="submenu2__list" id="submenu4">
                <li className="submenu__item submenu__back">
                  <i className="fas fa-long-arrow-alt-left cerrar__submenu"></i>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">SQL</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">MongoDb</Link>
                </li>
                <li className="submenu__item">
                  <Link to="#" className="menu__link">Oracle</Link>
                </li>
                </ul>
              </li>
              <li className="submenu__item">
                <Link to="#" className="menu__link" name="test">Testeo de Software</Link>
              </li>
              </ul>
            </li>
          
            <li className="menu__item">
              <Link to="/aboutUs" className="menu__link">¿Quienen Somos?</Link>
            </li>
          </ul>
        :
          <ul className="menu__list">
            <li className="menu__item">
              <Link to="#sect_codeCoworking" className="menu__link">C0d3Coworking</Link>
            </li>

            <li className="menu__item submenu">
              <Link to="#sect_codeClasses" className="menu__link submenus">
                C0deClases
              </Link>
            </li>

            <li class="menu__item">
              <Link href="#sect_codeRepos" class="menu__link">C0d3Repos</Link>
            </li>

            <li class="menu__item">
              <Link href="/aboutUs" class="menu__link" id="aboutMe">
                {/* <%- datos.header.acercaDe %> */}
                acerca de mi
              </Link>
            </li>
          </ul>
        }
        </nav>

      </header>
    );
  }
}

export default Menu;
