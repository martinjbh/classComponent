import { connect } from "react-redux";
import { CrearUnaPelicula } from "../Redux/Actions";
import { useState } from "react"


export const CreadorMovie = () => {
    const [movie, setMovie] = useState({})
   
    const handleInputChange = (event) => {
        event.preventDefault()
        setMovie({...movie,[event.target.name]: event.target.value })
        
      
    }
    console.log(movie)
    const handleSubmit = (event) => { 

    }
    return (

        <div>
            <form onChange={handleSubmit}>
                <input onChange={handleInputChange} placeholder="Nombre Pelicula" name="nombre"></input>
                <input onChange={handleInputChange} placeholder="Director" name="director"></input>
                <input onChange={handleInputChange} placeholder="Genero" name="genero"></input>
                <button type="submit" onClick={handleSubmit}>Crear Pelicula</button>
            </form>
            CreadorMovie

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        state
    }
};
export default connect(mapStateToProps, { CrearUnaPelicula })(CreadorMovie);