import React from "react";
import { Link } from "react-router-dom";

function Properties({ login }) {
	return (
		<React.Fragment>
			<div className="propertys">
				<div className="propertys__theme" id="btnTheme">
					<i className="fas fa-moon propertys__theme__icon icon--light"></i>
					<i className="fas fa-sun propertys__theme__icon icon--dark"></i>
				</div>

				<div className="propertys__lenguaje">
					<div className="propertys__lenguaje__btn">
						<i
							className="
                        fas
                        fa-globe
                        propertys__lenguaje__icon
                        propertys__lenguaje__icon--inactived
                        "
							id="lenguaje-default"
						></i>
						<span id="lenguaje-flag" className="lenguaje-flag"></span>
					</div>
				</div>

				{login === false ? (
					<div className="propertys__status">
						<label>
							<i className="fas fa-sign-in-alt propertys__status__icon"></i>
							Ingresar
						</label>
						<div className="modal__Ingreso">
							<form action="/login" method="POST" className="form">
								<div className="form__input-box">
									<input
										type="text"
										className="form__input"
										required
										id="username"
										name="username"
									/>
									<label for="username" className="form__label">
										<i className="form__icon fas fa-user"></i>
										Usuario
									</label>
								</div>

								<div className="form__input-box">
									<input
										type="password"
										className="form__input"
										required
										id="password"
										name="password"
									/>
									<label for="password" className="form__label">
										<i className="form__icon fas fa-lock"></i>
										Contraseña
									</label>
									{/* <div <% if(popup){ %>className=<%- popup%><%}%>>
                                            <i className="form__logo-error fas fa-skull-crossbones"></i>
                                            <p className="error_parrafo">
                                                <%- error%>
                                            </p>
                                        </div> */}
								</div>

								<button type="submit" className="button form__input">
									Ingresar
								</button>
							</form>

							<Link to="/signup" className="propertys__status__registrer">
								<i className="far fa-user-circle propertys__status__icon"></i>
								Registrate
							</Link>
						</div>
					</div>
				) : null}
			</div>
		</React.Fragment>
	);
}

export default Properties;
