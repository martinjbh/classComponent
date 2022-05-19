import React from 'react'
import axios from 'axios'

class FormularioAxios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    handleInputChange = (event) => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3005/ApiAxios', this.state)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleInputChange} name="name" placeholder='Nombre'></input>
                    <input onChange={this.handleInputChange} name="apellido" placeholder='Apellido'></input>
                    <input onChange={this.handleInputChange} name="edad" placeholder='edad'></input>
                    <button onClick={this.handleSubmit}>Enviar</button>
                </form>
            </div>
        )
    }
}

export default FormularioAxios