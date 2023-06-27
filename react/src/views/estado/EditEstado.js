import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/estados/'

const CompEditEstado = () => {
    const [nombre, setNombre] = useState('')    
    const navigate = useNavigate()
    const {id} = useParams()

   
    const update = async (e) => {
        e.preventDefault()

        await axios.put(`${URI}${id}`, {
            nombre: nombre,            
        })
        navigate(`/`)

    }

    useEffect( ()=>{
        getEstadoById()
    },[])

    const getEstadoById = async () => {
        const res = await axios.get(`${URI}${id}`)
        setNombre(res.data.nombre)
        
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)}
                    type="text"
                    className="form-control"                        
                />
            </div>
            
            <button type="submit" className="btn btn-primary">Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditEstado