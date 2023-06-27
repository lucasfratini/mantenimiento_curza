import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/estados/'


const CompShowEstados = () => {
    
    const [estados, setEstados] = useState([])
    useEffect( ()=>{
        getEstados()
    },[])

    //procedimineto para mostrar todos los blogs
    const getEstados = async () => {
        const res = await axios.get(URI)
        setEstados(res.data)
    }

    //procedimineto para eliminar un blog
    const deleteEstado = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       getEstados()
    }

    return(
        <div className='container'>
            <h1>Tabla de Estados</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus">Nuevo Estado</i></Link>
                    <table className='table'>
                        <thead className='tableTheEstado'>
                            <tr>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { estados.map ( (estado, index) => (
                                <tr key={ index }>
                                    <td> { estado.nombre } </td>                                   
                                    <td>
                                        <Link to={`/edit/${estado._id}`} className='btn btn-info'><i className="fas fa-edit">Editar</i></Link>
                                        <button onClick={ ()=>deleteEstado(estado._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>    
            </div>
        </div>
    )

}

export default CompShowEstados