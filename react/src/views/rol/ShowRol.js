import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/roles/'


const ShowRoles = () => {
    
    const [roles, setRoles] = useState([])
    useEffect( ()=>{
        getRoles()
    },[])

    
    const getRoles = async () => {
        const res = await axios.get(URI)
        setRoles(res.data)
    }

    
    const deleteRol = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       getRoles()
    }

    return(
        <div className='container'>
            <h1>Tabla de Roles</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus">Nuevo Rol</i></Link>
                    <table className='table'>
                        <thead className='tableTheRol'>
                            <tr>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { roles.map ( (role, index) => (
                                <tr key={ index }>
                                    <td> { role.nombre } </td>                                   
                                    <td>
                                        <Link to={`/edit/${role._id}`} className='btn btn-info'><i className="fas fa-edit">Editar</i></Link>
                                        <button onClick={ ()=>deleteRol(role._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
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

export default ShowRoles