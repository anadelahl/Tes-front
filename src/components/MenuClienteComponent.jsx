import React from "react";
import { ImUserPlus } from "react-icons/im";
import { Link } from "react-router-dom";
import "./Menu.css";

function MenuClienteComponent() {
    return (
        <div className='menu-content'>
            <h1 className="title">Terceros registrados</h1>
            <div className="inline-flex rounded-md shadow-sm">
                <Link className="button" to="/registrar">
                    <ImUserPlus style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Registrar persona
                </Link>
            </div>
        </div>
    )
}

export default MenuClienteComponent;
