import React from 'react';
import useCliente from '../hooks/useCliente';
import "./FormularioComponent.css";

function FormularioComponent() {
    const { handleChange, handleFile, handleSubmit } = useCliente();
    return (
        <div className="form-container">
            <div className="form-group">
                <label className="form-label" htmlFor="nombre">Nombre</label>
                <input
                    className="form-input"
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="image">Foto de Perfil</label>
                <input
                    className="form-input"
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleFile}
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="genero">Género</label>
                <select
                    className="form-select"
                    id="genero"
                    name="genero"
                    // value={formData.genero}
                    onChange={handleChange}
                // required
                >
                    <option value="">Seleccionar...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                </select>
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="fecha_nacimiento">Fecha de Nacimiento</label>
                <input
                    className="form-input"
                    type="date"
                    id="fecha_nacimiento"
                    name="fecha_nacimiento"
                    // value={formData.fechaNacimiento}
                    onChange={handleChange}
                // required
                />
            </div>

            <div className="form-group">
                <label className="form-label" htmlFor="pais">País</label>
                <select
                    className="form-select"
                    id="pais"
                    name="pais"
                    // value={formData.pais}
                    onChange={handleChange}
                // required
                >
                    <option value="">Seleccionar...</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Brazil">Brasil</option>
                    <option value="Argentina">Argentina</option>
                </select>
            </div>

            <button className="form-button" onClick={handleSubmit}>Enviar</button>
        </div>
    )
}

export default FormularioComponent;
