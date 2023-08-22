import logo from './images/logo.png';
import hamburguesa from './images/hamburguesa.png';
import ordenador from './images/ordenador.png';
import ordenador2 from './images/ordenador2.png';
import laptop from './images/laptop.png';
import llave from './images/llave.png';
import './App.css';

function App() {
  return (
    <div className="App">
    <header className='App-header'>
      <section className='content1' >
        <div>
          <img className='logo' src={logo} alt="logo" />
        </div>
        <div className='hamburguesa'>
          <img className='logo' src={hamburguesa} alt="logo" />
        </div>
      </section>
      <section className='content2'>
          <h1>Say Hello to ReactJS</h1>
          <p>you learn how to use the most popular frontend library and become a super Ninja developer</p>
          <button className='btn-header'> Awesome!</button>
      </section>
    </header>
    <section className='content3'>
        <div className='react-feature'>
          <img src={llave} alt="llave"/>
          <div className='text-feature'>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div> 
        </div>
        <div className='react-feature'>
          <img src={ordenador} alt="ordenador"/>
          <div className='text-feature' >
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
        </div>
        <div className='react-feature'>
          <img src={ordenador2} alt="ordenador2"/>
          <div className='text-feature'>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the component's.</p>
          </div>
        </div>
        <div className='react-feature'> 
          <img src={laptop} alt="laptop"/>
          <div className='text-feature'>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default App;
