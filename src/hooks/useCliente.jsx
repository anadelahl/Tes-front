import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function useCliente() {
    const [listadoClientes, setListadoClientes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cliente, setCliente] = useState({
        nombre: "",
        genero: "",
        image: null,
        fecha_nacimiento: "",
        pais: "",
    });
    const navigate = useNavigate(); //tomar la ruta
    const [openModal, setOpenModal] = useState(false);

    const handleFile = ({ target }) => {
        const selectedFile = target.files[0];
        setCliente((prevUsuario) => ({
            ...prevUsuario,
            image: selectedFile,
        }));
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setCliente((prevUsuario) => ({
            ...prevUsuario,
            [name]: value,
        }));
    };

    const getListadoDeUsuarios = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://test-back-ve7x.onrender.com/api/usuario/todos-los-usuarios");
            setListadoClientes(response.data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    useEffect(() => {
        getListadoDeUsuarios();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (cliente.nombre === "" || cliente.genero === "" || cliente.image === null || cliente.fecha_nacimiento === "" || cliente.pais === "") {
            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'Por favor llena todos los campos',
                showConfirmButton: false,
                timer: 2000
            })
        }
        const formData = new FormData();
        formData.append('nombre', cliente.nombre);
        formData.append('genero', cliente.genero);
        formData.append('image', cliente.image);
        formData.append('fecha_nacimiento', cliente.fecha_nacimiento);
        formData.append('pais', cliente.pais);
        axios.post("https://test-back-ve7x.onrender.com/api/usuario/crear-usuario", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Se guardo correctamente',
                    showConfirmButton: false,
                    timer: 2000
                })
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const capturarInformacion = (objetoCliente) => {
        toggleModal();
        setCliente(objetoCliente);
    };

    const toggleModal = () => {
        recargar();
        setOpenModal(!openModal);
    };

    const recargar = () => {
        setCliente({
            nombre: "",
            genero: "",
            image: null,
            fecha_nacimiento: "",
            pais: "",
        });
        getListadoDeUsuarios();
    };

    const actualizar = () => {
        axios.put(`https://test-back-ve7x.onrender.com/api/usuario/actualizar-usuario`, cliente)
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Se actualizo correctamente',
                    showConfirmButton: false,
                    timer: 2000
                })
                toggleModal();
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const deleteCliente = (cliente) => {
        axios.delete(`https://test-back-ve7x.onrender.com/api/usuario/borrar-usuario`, { data: cliente })
            .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Se elimino correctamente',
                    showConfirmButton: false,
                    timer: 2000
                })
                getListadoDeUsuarios();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return {
        listadoClientes,
        openModal,
        cliente,
        handleFile,
        handleChange,
        handleSubmit,
        capturarInformacion,
        toggleModal,
        actualizar,
        deleteCliente,
    }
}

export default useCliente;
