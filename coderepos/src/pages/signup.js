import React from "react";
import {Link} from "react-router-dom"
import "./styles/signup.sass"

function Signup() {
    return (
        <div className="Signup">
            <div class="container">
                <div class="section">
                    

                    <form id="form-registro" action="/signup" method="POST" className="formulario"
                    >
                        <div className="encabezado__logo" id="logo">
                        <i className="fas fa-code encabezado__imagen"></i>
                        <h4 className="encabezado__title">Bienvenido a C0d3 Team</h4>
                        <h4 className="formulario__title">Comencemos</h4>
                        </div>
                        <div className="formulario__datos" id="grupo__firstname">
                            <label for="firstname" className="formulario__label">Nombre</label>
                            <div className="formulario__input-group">
                            <input
                                className="formulario__input"
                                type="text"
                                name="firstname"
                                id="firstname"
                                placeholder="Ingrese su nombre"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">
                            El nombre solo puede contener letras.
                            </p>
                        </div>
                        <div className="formulario__datos" id="grupo__lastnames">
                            <label for="tipo_documento" className="formulario__label"
                            >Apellido</label
                            >
                            <div className="formulario__input-group">
                            <input
                                className="formulario__input"
                                type="text"
                                name="lastnames"
                                id="lastnames"
                                placeholder="Ingrese sus apellidos"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">
                            Los apellidos solo pueden contener letras.
                            </p>
                        </div>

                        <div className="formulario__datos" id="grupo__username">
                            <label for="numero_documento" className="formulario__label">Username</label>
                            <div className="formulario__input-group">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="formulario__input"
                                placeholder="Ingrese su nombre de usuario"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">
                            El usuario tiene que ser de 4 a 16 caracteres y solo puede
                            contener letras, numeros, guion bajo.
                            </p>
                        </div>
                        <div className="formulario__datos" id="grupo__email">
                            <label className="formulario__label" for="email">email</label>
                            <div className="formulario__input-group">
                            <input
                                className="formulario__input"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="name@example.com"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">
                            El email solo puede contener letras, numeros, puntos, guiones y
                            guion bajo.
                            </p>
                        </div>
                        <div className="formulario__datos" id="grupo__password">
                            <label className="formulario__label" for="password">Contraseña</label>
                            <div className="formulario__input-group">
                            <input
                                className="formulario__input"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ingrese su contraseña"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">
                            La contraseña tiene que ser de 8 a 16 dígitos, contener una letra
                            minuscula, una letra Mayuscula y un numero.
                            </p>
                        </div>
                        <div className="formulario__datos" id="grupo__password2">
                            <label className="formulario__label" for="password2"
                            >Repetir Contraseña</label
                            >
                            <div className="formulario__input-group">
                            <input
                                className="formulario__input"
                                type="password"
                                name="password2"
                                id="password2"
                                placeholder="Corrobore la contraseña"
                            />
                            <i className="formulario__logo-error fas fa-skull-crossbones"></i>
                            </div>
                            <p className="formulario__input-error">Las contraseñas no coinciden.</p>
                        </div>
                        <div className="formulario__datos__terminos">
                            <h2 className="terminos__titulo">
                            Autorización Tratamiento de Datos Personales C0d3 Team
                            </h2>
                            <p className="terminos__parrafo">
                            
                            El grupo de programación C0d3 Team conforme a las disposiciones 
                            contenidas en la Ley 1581 de 2012 y su decreto reglamentario, 
                            como custodio responsable y/o encargado del tratamiento de datos personales, 
                            propenderá por la seguridad y confidencialidad de los datos 
                            sensibles o personales que se hayan recogido y tratado en operaciones 
                            tales como la recolección, almacenamiento, uso, circulación y supresión 
                            de aquella información que se reciba de terceros a través de los diferentes 
                            canales de recolección de información.
                            En cumplimiento con lo establecido por la Ley 1581 de 2012, se le informa 
                            al Titular de los datos personales que el diligenciamiento del formulario 
                            de registro es voluntario y los datos recopilados serán tratados, 
                            con las siguientes finalidades: 
                            1.
                            2.
                            3.
                            
                            Al diligenciar el formulario, autoriza el tratamiento de los datos personales con fines colaborativos y podrá hacer uso de los servicios que presta la comunidad; al rechazar el diligenciamiento ningún dato será recopilado.
                            
                            En caso de requerir más información o desear ejercer sus derechos relacionados con la ley, puede contactarnos a través del correo electrónico: xxx@gmail.com
                            
                            <h2 className="terminos__titulo">
                                Términos y condiciones de uso C0d3 Team
                            </h2>
                            
                            <p className="terminos__parrafo">
                                Política de uso de Contenidos página Web 
                                Esta página Web tiene por objeto facilitar al público en general 
                                la información sobre la comunidad de programación. 
                                Le rogamos leer atentamente la siguiente información 
                                antes de hacer uso de esta página Web. 
                                La utilización de esta publicación digital y su contenido 
                                está sujeta a las condiciones de uso y confidencialidad que más adelante se expondrán. 
                                Los siguientes son los términos de un acuerdo legal 
                                entre quienes ingresen a esta página y la comunidad C0D3 Team. 
                                Al acceder, navegar o usar este sitio Web, usted reconoce que ha leído, 
                                entendido, y se obliga a cumplir con estos términos y 
                                cumplir con todas las leyes y reglamentos aplicables, 
                                incluida la exportación y reexportación de leyes y reglamentos de control. 
                                Si no acepta dichos términos y condiciones, le rogamos se abstenga de utilizar 
                                nuestra página web y su contenido.
                            </p>

                            </p>
                            <div className="formulario__datos form__check" id="grupo__terminos">
                            <label className="formulario__label grupo__terminos">
                                <input
                                className="formulario__checkbox"
                                type="checkbox"
                                name="terminos"
                                id="terminos"
                                />
                                Acepto los Terminos y Condiciones
                            </label>
                            </div>
                        </div>
                        
                        <div className="">
                            <i className="fas fa-skull-crossbones"></i>   
                        </div>
                        
                        <div className="boxbtn">
                            <button id="btn-registrar" className="boxbtn__btn" type="button">
                            Crear cuenta
                            </button>
                        </div>
                        <div className="formulario__datos form__sign-in">
                            {/* <label for="ingresa" className="formulario__sing-in__label"
                            >Ya tienes cuenta</label
                            >
                            <Link to="/login" id="ingresa">Ingresa</Link> */}
                            <div className="content__back">
                            <Link to="/Coderepos" className="back__home">
                                <i className="fas fa-long-arrow-alt-left back__login"></i>
                                Volver a Home
                            </Link>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
      </div>
    );
}
  
export default Signup;