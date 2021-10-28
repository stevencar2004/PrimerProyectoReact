import react from "react";
import {Link} from "react-router-dom"
import "./styles/_footer.sass"

function Footer (){
    return(
        <footer class="footer">
            <div class="footer__info">
                <h2 class="footer__info__title"><i class="fas fa-code header__icon"></i>C0d3 Team</h2>
                <ul class="footer__info__list">
                    <li class="footer__info__item">
                        <Link href="#" class="footer__info__links highlight--text">
                            {/* <%- datos.footer.terminos %> */}
                        </Link>
                    </li>
                    <li class="footer__info__item">
                        <Link href="#" class="footer__info__links highlight--text">
                            {/* <%- datos.footer.politicas %> */}
                        </Link>
                    </li>
                    <li class="footer__info__item">
                        <Link href="#" class="footer__info__links highlight--text">
                            {/* <%- datos.footer.fqas %> */}
                        </Link>
                    </li>
                    <li class="footer__info__item">
                        <Link href="/aboutUs" class="footer__info__links highlight--text">
                            {/* <%- datos.footer.aboutUs %> */}
                        </Link>
                    </li>
                </ul>
                
                <div class="footer__info__lenguaje">
                    <div class="propertys__lenguaje__btn">
                        <i
                            class="
                                fas
                                fa-globe
                                propertys__lenguaje__icon propertys__lenguaje__icon--inactived
                            "
                            id="lenguaje-default"
                        ></i>
                        <span id="lenguaje-flag" class="lenguaje-flag"></span>
                        {/* <span><%- datos.idiom %></span> */}
                    </div>
                </div>
            </div>

            <div class="footer__social">
                <h2 class="footer__social__title">Redes Sociales</h2>
                <Link href="#" class="footer__social__link">
                    <i class="fab fa-facebook-f footer__social__icon icon--face"></i>
                </Link>
                <Link href="#" class="footer__social__link">
                    <i class="fab fa-twitter footer__social__icon icon--twit"></i>
                </Link>
                <Link href="#" class="footer__social__link">
                    <i class="fab fa-instagram footer__social__icon icon--insta"></i>
                </Link>
                <Link href="#" class="footer__social__link">
                    <i class="fab fa-linkedin-in footer__social__icon icon--link"></i>
                </Link>
            </div>

            <div class="footer__contact">
                <h2 class="footer__contact__title">Contactenos</h2>

                <p class="footer__contact__text highlight--text">
                    <i class="fas fa-map-marker-alt footer__contact__icon"></i> Complex Route N Calle 67
                    52-20 Torre A, Medellín, Antioquia
                </p>
                <p class="footer__contact__text">
                    <i class="fas fa-mobile-alt footer__contact__icon"></i> +57-310-577-5240
                </p>
                <p class="footer__contact__text footer__contact__email highlight--text">
                    <i class="far fa-envelope footer__contact__icon"></i>
                    codeteam.col@gmail.com
                </p>
            </div>
            <div class="footer__copyright">
                <h3 class="footer__copyright__title">
                    &#169; 2021 Todos los derechos reservados| C0d3 Team
                </h3>
            </div>
        </footer>
    );
}

export default Footer;