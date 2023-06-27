import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URI = 'http://localhost:8000/roles/'

const CreateRol = () => {
    const [nombre, setNombre] = useState('')
    const navigate = useNavigate()    
    
    //procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre})
        navigate('/')
    }   

    return (
        <div>
            <h3>Crear Un Rol</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre del Rol</label>
                    <input
                        value={nombre}
                        onChange={ (e)=> setNombre(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>                    
                <button type='submit' className='btn btn-primary'>Crear</button>                  
            </form>
        </div>
    )
}

export default CreateRol