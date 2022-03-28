import React from 'react'

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    handleInputChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }
    handleSubmit = () => {
        console.log(`Nombre: ${this.state.nombre}`)
        console.log(`Apellido: ${this.state.apellido}`)
    }
    render() {
        return (
            <div>
                <input placeholder='nombre' name="nombre" onChange={this.handleInputChange}></input>
                <input placeholder='apellido' name="apellido" onChange={this.handleInputChange}></input>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>)
    }

}

export default Formulario