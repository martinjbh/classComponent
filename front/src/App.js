import './App.css';
import Shower from './Componentes/Shower/Shower';
import react from 'react';
import { useState } from 'react'
import Formulario from './Componentes/Formulario/Formulario';
import ShowRedux from './Componentes/ShowRedux/ShowRedux';
import InputRedux from './Componentes/InputRedux/InputRedux';
import ShowMovies from './Componentes/ShowMovies/ShowMovies';
import { CreadorMovie } from './Componentes/CreadorMovie/CreadorMovie';
import FormularioAxios from './Componentes/FormularioAxios/FormlarioAxios';
function App() {
  const [valor, setValor] = useState()

  return (
    <div className="App">
      <hr></hr>
      <h1>{valor}</h1>
      <Shower funt={setValor} />
      <Formulario />
      <hr></hr>
      <h1>Redux</h1>
      <ShowRedux />
      <InputRedux />

      <hr></hr>
      <h1>Movies</h1>
      <CreadorMovie />
      <ShowMovies />
      <hr></hr>
      <h1>FormularioClassAxios</h1>
<FormularioAxios/>


    </div>
  );
}

export default App;
