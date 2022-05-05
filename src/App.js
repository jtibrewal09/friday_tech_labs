import { Button } from './@components';
import { ReactComponent as Logo } from './assets/images/logo.svg';

import './App.scss';

function App() {
  return (
    <div className='page-container'>
      <header className='header'>
        <Logo />
        {/* <section className='menu-items-container'>
          <div>About</div>
          <div>Join Us</div>
          <div>Portfolio</div>
        </section> */}
        {/* <Button className='hire-us-action' label="Hire Us" /> */}
      </header>
      <section className='body-container'>
        <div className='body-tagline'>Your Idea.<br />
          Confidence Led.<br />
          Passion Built.
        </div>
        <div className='coming-soon'>Coming soon!</div>
      </section>
      <footer className='footer'>2022  Friday Tech Labs Priavte Limited All Rights Reserved.</footer>
    </div>
  );
}

export default App;
