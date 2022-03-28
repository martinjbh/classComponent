import react from "react";
import { useState } from "react"
import { connect } from "react-redux";
import { CambiarNombre } from '../Redux/Actions'

const InputRedux = ({ CambiarNombre }) => {
    const [input, setinput] = useState()
    const handleInputChange = (event) => {
        setinput({ ...input, [event.target.name]: event.target.value })

    }
    const handleSubmit = () => {
        CambiarNombre(input)
        document.getElementById("inp3").value=""
        document.getElementById("inp6").value = ""

    }
    return (
        <div>
            <input id="inp3" placeholder="Nombre" name="nombre" onChange={handleInputChange}></input>
            <input id="inp6" placeholder="Apellido" name="apellido" onChange={handleInputChange}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export default connect(null, { CambiarNombre })(InputRedux);


