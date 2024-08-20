import React from 'react';
import DatatableComponent from '../components/DatatableComponent';
import MenuClienteComponent from '../components/MenuClienteComponent';
import useCliente from '../hooks/useCliente';
import Modal from '../components/Modal';

function HomePage() {
    const {
        listadoClientes,
        openModal,
        cliente,
        capturarInformacion,
        toggleModal,
        actualizar,
        handleChange,
        deleteCliente,
    } = useCliente();
    return (
        <>
            <center>
                <MenuClienteComponent />
                <DatatableComponent listadoClientes={listadoClientes} capturarInformacion={capturarInformacion} deleteCliente={deleteCliente} />
                <Modal openModal={openModal} toggleModal={toggleModal} handleChange={handleChange} actualizar={actualizar} cliente={cliente} />
            </center>
        </>
    )
}

export default HomePage;
