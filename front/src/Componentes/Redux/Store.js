import { createStore , applyMiddleware} from "redux";
import { Reducer } from "./Reducers";
import  ThunkMiddleware  from "redux-thunk";   //asyncronico!
// export const store = createStore(reducer)
export const Store =createStore(
    Reducer,
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // esto es para q ande la herramienta devtool en browser
    )

    