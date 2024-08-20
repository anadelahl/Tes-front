import React from 'react';
import DataTable from 'react-data-table-component';
import { FaRegEdit, FaRegUserCircle } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { MdDelete, MdKeyboard, MdLocationCity, MdOutlineAssignmentTurnedIn } from 'react-icons/md';
import "./DatatableComponent.css";

function DatatableComponent({ listadoClientes, capturarInformacion, deleteCliente }) {
    const columns = [
        {
            name: (
                <>
                    <FiSettings style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Acciones
                </>
            ),
            cell: (row) => (
                <>
                    <button className="icons-action-delete"
                        onClick={() => deleteCliente(row)}
                    >
                        <MdDelete style={{ width: "20px", height: "20px" }} />
                    </button>
                    <button className="icons-action-edit"
                        onClick={() => capturarInformacion(row)}
                    >
                        <FaRegEdit style={{ width: "20px", height: "20px" }} />
                    </button>
                </>

            ),
            width: "150px",
        },
        {
            name: (
                <>
                    <FaRegUserCircle style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Perfil
                </>
            ),
            cell: (row) => (
                <img
                    src={"https://test-back-ve7x.onrender.com/img/" + row.perfil}
                    alt="Perfil"
                    style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
            ),
            width: "150px",
        },
        {
            name: (
                <>
                    <MdLocationCity style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Pais
                </>
            ),
            selector: (row) => row.pais,
            sortable: true,
            width: "150px",
        },
        {
            name: (
                <>
                    <MdOutlineAssignmentTurnedIn style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Estado
                </>
            ),
            cell: (row) => (
                <div className="flex items-center">
                    <span>{row.estado === 1 ? "Activo" : "Inactivo"}</span>
                </div>
            ),
            sortable: true,
            width: "150px",
        },
        {
            name: (
                <>
                    <MdKeyboard style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Nombres
                </>
            ),
            selector: (row) => row.nombre,
            sortable: true,
            width: "140px",
        },
        {
            name: (
                <>
                    <MdKeyboard style={{ width: "16px", height: "16px", marginRight: "5px" }} /> Fecha de nacimiento
                </>
            ),
            selector: (row) => row.fecha_nacimiento,
            sortable: true,
            width: "250px",
        },
    ]
    const styleCellPersonaDataTable = {
        headCells: {
            style: {
                backgroundColor: "#94A3B8",
                color: 'white',
                fontSize: '13px',
                textTransform: 'uppercase',
                fontWeight: 'bold',
            },
        },
    };
    return (
        <div className='custom-container'>
            <DataTable
                columns={columns}
                data={listadoClientes}
                noDataComponent={
                    <div className="no-data">
                        Sin datos
                    </div>
                }
                customStyles={styleCellPersonaDataTable}
                pagination
            />
        </div>
    )
}

export default DatatableComponent
