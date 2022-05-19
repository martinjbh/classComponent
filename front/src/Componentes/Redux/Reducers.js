
const initialState = {
    nombre: "martin",
    apellido: "barreiro",
    movies:[]
}
export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CAMBIAR_NOMBRE": {
            return ({
                ...state, nombre:action.nombre,
                          apellido:action.apellido
            })
        }
        default:
            return state
    }
}