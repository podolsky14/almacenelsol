import React, {useState} from 'react'
import Footerr from './Footerr'

const initiallForm = {
    text: "",
    email: "",
    tel: "",
    area: ""
}
export default function Contacto() {
const[form, setForm] = useState(initiallForm)
const[borrarform, setBorrarform] = useState(false)

const mensaje = {
    height: "700px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "red"
}

    const handleChange = (e) => {
       setForm({
           ...form,
           [e.target.name]: e.target.value
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
            setBorrarform(true)
    }

    return (
    <>
     {!borrarform ? 
        <form className='formulario w-100' onSubmit={handleSubmit} > <p className='completaelform  text-primary '>COMPLETÁ EL FORMULARIO</p>
        <input  type="text" id="text" name="text" placeholder='Nombre y apellido' onChange={handleChange} value={form.text} required/><br/>
        <input type="email" id="email" name="email" placeholder='Email' onChange={handleChange} value={form.email} required/><br/>
        <input type="tel" id="tel" name="tel" placeholder='Teléfono' onChange={handleChange} value={form.tel} required/><br/>
        <textarea id="area" name="area" rows="10" cols="30" placeholder='Escriba su mensaje aqui...' onChange={handleChange} value={form.area} required/><br/>
        <button > <p className=' fs-4 pt-2  d-flex justify-content-center align-items-center'>ENVIAR</p> </button>
           </form> : <h1 style={mensaje}>Mensaje enviado con éxito.</h1> }
<Footerr/>
</>
    )
}
