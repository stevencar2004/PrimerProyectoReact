import React from "react";
import {Link} from 'react-router-dom'

function Search (){
    return (
        <div className="search">
            <i className="fas fa-search search__icon" id="btnsearch"></i>
            <div className="search__content" id="search__content">
                <i className="far fa-times-circle search__close" id="btnsearch__close"></i>
                <input
                    type="text"
                    className="search__input"
                    placeholder="¿Qué deseas buscar?"
                    id="input__search"
                />

                <div className="search__topsearch">
                    <h6 className="search__subtitle">Lo más buscado</h6>
                    <div className="search__top">
                    <Link to="#" className="search__link">
                        <label for="" className="search__icon2">
                        <i className="fas fa-search search__icon2"></i>
                        Busqueda Top 1
                        </label>
                    </Link>
                    </div>
                </div>

                <div className="search__lastsearch">
                    <h6 className="search__subtitle">Historial de busqueda</h6>
                    <div className="search__history">
                    <Link href="#" className="search__link">
                        <label for="" className="search__icon2">
                        <i className="fas fa-search search__icon2"></i>
                        Busqueda 1
                        </label>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;