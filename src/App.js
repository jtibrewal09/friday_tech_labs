import './App.scss';
import { Button } from './@components';

function App() {
  return (
    <div className='page-container'>
      <header className='header'>
        <img src='./images/logo.svg' alt='logo' />
        <section>
          <div></div>
          <div></div>
          <div></div>
        </section>
        <Button label="Hire Us" />
      </header>
    </div>
  );
}

export default App;
