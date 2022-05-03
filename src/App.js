import { Button } from './@components';
import { ReactComponent as Logo } from './assets/images/logo.svg';

import './App.scss';

function App() {
  return (
    <div className='page-container'>
      <header className='header'>
        <Logo />
        <section className='menu-items-container'>
          <div>About</div>
          <div>Join Us</div>
          <div>Portfolio</div>
        </section>
        <Button label="Hire Us" />
      </header>
      <div className='body-tagline'>Your Idea.<br />
        Confidence Led.<br />
        Passion Built.</div>
    </div>
  );
}

export default App;
