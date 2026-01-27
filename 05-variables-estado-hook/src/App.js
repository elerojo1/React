import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function obtenerNumeroAleatorio() {
  let v = Math.trunc(Math.random() * 10);
  return v;
}

function App() {
  // Estados al inicio
  const [numero, setNumero] = useState(0)
  const [numeros, setNumeros] = useState([0,0,0,0,0])
  
  // Generar un número aleatorio y mostrarlo en pantalla al hacer click en un botón
  function obtenerNumeroAleatorio() {
    let v = Math.trunc(Math.random() * 10);
    setNumero(v);
  }
  // ------------------------------------------------------------------------------

  // Generar un array de 5 números aleatorios y mostrarlos en pantalla al hacer click en un botón
  function generarNumerosAleatorios(){
    const arrayNumeros = new Array(5);
    for(let i=0; i<arrayNumeros.length; i++){
      arrayNumeros[i] = Math.trunc(Math.random() * 10);
    }
    setNumeros(arrayNumeros);
  }
  // ------------------------------------------------------------------------------

  return (
    <div className="App">
      <p>Numero aleatorio es: {numero}</p>
      <button className='btn btn-primary' onClick={obtenerNumeroAleatorio}>Generar número aleatorio</button>
      <hr />
      <p>Números aleatorios:</p> {numeros.map(n => (<p>{n}</p>))}
      <button className='btn btn-primary' onClick={generarNumerosAleatorios}>Generar números aleatorios</button>
    </div>
  );
}

export default App;
