import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container mt-5'>
      {/*<h1>Suma de Números</h1>
      <input className='form-control m-3' type='number' id='num1' placeholder='Numero 1'></input>
      <input className='form-control m-3' type='number' id='num2' placeholder='Numero 2'></input>
      <button className='btn btn-primary m-3' onClick={() => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        alert(`La suma es: ${num1 + num2}`);
      }}>Sumar</button>*/}
      <form onSubmit={sumarNumeros} >
      <h1>Suma de Números</h1>
      <input className='form-control m-3' type='number' id='num1' placeholder='Numero 1'></input>
      <input className='form-control m-3' type='number' id='num2' placeholder='Numero 2'></input>
      <button className='btn btn-primary m-3' type='submit'>Sumar</button>
      </form>
    </div>
  );
}

function sumarNumeros(event) {
  event.preventDefault();
  const num1 = parseInt(event.target.num1.value);
  const num2 = parseInt(event.target.num2.value);
  alert(`La suma es: ${num1 + num2}`);
}
export default App;
