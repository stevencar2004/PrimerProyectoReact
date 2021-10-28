import react from "react";

function Btnmenu(){
    
    /**
     * Este codigo ejecuta la funcionalidad de desplazar el menú
     */
    var btnMenu = document.getElementById("btnMenu");
    var menu = document.getElementById("menu");

    btnMenu.addEventListener("click", () => {
        menu.classList.toggle("showMenu");
    });

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

export default Btnmenu;