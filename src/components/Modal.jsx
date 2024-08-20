import React from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { MdFlag, MdKeyboard, MdLocationCity, MdWc } from 'react-icons/md';
import "./Modal.css";

function Modal({ openModal, toggleModal, handleChange, actualizar, cliente }) {
    // Convertir la fecha si no está en el formato adecuado
    const formattedDate = cliente.fecha_nacimiento
        ? new Date(cliente.fecha_nacimiento).toISOString().slice(0, 10)
        : "";

    if (openModal) {
        return (
            <div className="modal-background">
                <div className="modal-container">
                    <header>
                        <h1>Actualizar cliente</h1>
                        <IoCloseCircleOutline className="incon-close" onClick={toggleModal} />
                    </header>
                    <br />
                    <br />
                    <hr style={{ width: "90%" }} />
                    <br />
                    <main className="inputs">
                        <MdKeyboard className="icons" style={{ color: "#612E01" }} />
                        <input
                            type="text"
                            placeholder="Nombre..."
                            defaultValue={cliente.nombre}
                            name="nombre"
                            onChange={handleChange}
                        />
                    </main>
                    <main className="inputs">
                        <MdLocationCity className="icons" style={{ color: "#612E01" }} />
                        <input
                            type="date"
                            defaultValue={formattedDate}
                            name="fecha_nacimiento"
                            onChange={handleChange}
                        />
                    </main>
                    <main className="inputs">
                        <MdWc className="icons" style={{ color: "#612E01" }} />
                        <select
                            id="genero"
                            name="genero"
                            defaultValue={cliente.genero}
                            onChange={handleChange}
                        >
                            <option value={cliente.genero}>{cliente.genero}</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                        </select>
                    </main>
                    <main className="inputs">
                        <MdFlag className="icons" style={{ color: "#612E01" }} />
                        <select
                            id="pais"
                            name="pais"
                            defaultValue={cliente.pais}
                            onChange={handleChange}
                        >
                            <option value={cliente.pais}>{cliente.pais}</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Argentina">Argentina</option>
                        </select>
                    </main>
                    <button onClick={actualizar} className="btn-actualizar">Actualizar</button>
                </div>
            </div>
        );
    }
}

export default Modal;
