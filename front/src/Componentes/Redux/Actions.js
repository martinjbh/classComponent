
export const CambiarNombre = (obj) => {
    return (
        { type: "CAMBIAR_NOMBRE", nombre: obj.nombre, apellido: obj.apellido }
    )
}


export const CrearUnaPelicula =(pelicula)=>{

    return (
        {type:"CREAR_PELICULA" ,pelicula}
    )
}