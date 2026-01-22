import logo from './logo.svg';
import './App.css';

function obtenerValorAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function saludar(saludo){
  return <h2>{saludo}</h2>;
}

function App() {
  const siglo = 21;

  //Objeto
  const persona = {
    nombre: 'Lenin',
    edad: 38
  };

  //Arreglo
  const navegadores = ['http://www.google.com', 'http://www.bing.com', 'http://www.yahoo.com'];
  

  return (
    <div>
      <h1>Titulo Nivel 1</h1>
      {saludar("Hola")}
      {saludar("Buenos dias")}
      {saludar("Buenas Buenas")}
      <hr/>
      <p>Estamos en el siglo {siglo}</p>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <di>
        <h3>Llamar a un metodo</h3>
        <p>Valor aleatorio: {obtenerValorAleatorio()}</p>
      </di>
      <p>Calculo de expresiones 3 + 3: {3 + 3}</p>
      <div>
        <p>Navegadores:</p>
        <ul>
          <li><a href={navegadores[0]}>Google</a></li>
          <li><a href={navegadores[1]}>Bing</a></li>
          <li><a href={navegadores[2]}>Yahoo</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
