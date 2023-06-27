import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const URI = 'http://localhost:8000/users/'


const ShowUsers = () => {
    
    const [users, setUsers] = useState([])

    useEffect( ()=>{
        getUsers()
    },[])

    
    const getUsers = async () => {
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    
    const deleteUser = async (_id) => {
       await axios.delete(`${URI}${_id}`)
       getUsers()
    }

    return(
        <div className='container'>
            <h1>Tabla de Usuarios</h1>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus">Nuevo Usuario</i></Link>
                    <table className='table'>
                        <thead className='tableTheUser'>
                            <tr>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            { users.map ( (user, index) => (
                                <tr key={ index }>
                                    <td> { user.username } </td>  
                                    <td> { user.password } </td> 
                                    <td> { user.rol.nombre } </td>                                  
                                    <td>
                                        <Link to={`/edit/${user._id}`} className='btn btn-info'><i className="fas fa-edit">Editar</i></Link>
                                        <button onClick={ ()=>deleteUser(user._id) } className='btn btn-danger'><i className="fas fa-trash-alt"></i>Eliminar</button>
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

export default ShowUsers