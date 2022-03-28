import './Shower.scss'
import React from 'react';


class Shower extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shower: true,
            valorApp: ""
        }
    }
    handChange = (event) => {
        this.setState({
            valorApp: event.target.value
        })
    }
    mostrar = () => {
        if (this.state.shower) {
            this.setState({
                shower: false
            })
        } else {
            this.setState({
                shower: true
            })
        }
    }
    enviar = () => {
        console.log(this.state.valorApp)
        this.props.funt(this.state.valorApp)
        document.getElementById("inp1").value = ""
    }
    render() {
        return (
            <div>
                {this.state.shower &&
                    <div>
                        <button onClick={this.enviar}>Enviar</button>
                        <input id="inp1" onChange={this.handChange} placeholder='Dato Enviar App'></input>
                    </div>}
                <button onClick={this.mostrar}>Mostrar</button>
            </div>
        )
    }
}
export default Shower;