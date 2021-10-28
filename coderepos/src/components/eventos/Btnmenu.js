import React from "react";

class Btnmenu extends React.Component{
    
    handleClick = e => {
        console.log("click menu")
        /**
         * Este codigo ejecuta la funcionalidad de desplazar el menú
         */
        // var btnMenu = document.getElementById("btnMenu");
        var menu = document.getElementById("menu");
        menu.classList.toggle("showMenu");

        /**
         * Permite desplegar el submenu contenido dentro del item del menu
         */
        var submenuBtn = document.querySelectorAll(".submenus");
        var submenu = document.querySelectorAll(".submenu__list");

        for (let i = 0; i < submenuBtn.length; i++) {
            submenuBtn[i].addEventListener("click", () => {
                if (window.innerWidth < 1024) {
                    submenu[i].classList.toggle("submenu__list--deplegar");
                    // submenu[i].style.height=("calc(100% + 100px)");
                }
            });
        }
    }

    render(){

        return(
            <div className="header__btnMenu">
            <button className="header__btn" id="btnMenu" onClick={this.handleClick}>
            <i className="fas fa-bars menu__icon"></i>
            </button>
            </div>
        );
    }


}

export default Btnmenu;