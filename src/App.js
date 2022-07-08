import { Button } from './@components';
import { ReactComponent as Logo } from './assets/images/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faClone, faLayerGroup, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';

import './App.scss';
import React from 'react';

const ourWorkConfig = [
  { label: 'Discovery Phase', icon: faMagnifyingGlass, description: 'Plan and Roadmap your Idea and Launch' },
  { label: 'Design your Product', icon: faClone, description: 'Transform your product with top of the notch Design' },
  { label: 'Product Development', icon: faLayerGroup, description: 'Custom Software Development for Web and Mobile' },
  { label: 'Cloud Consulting', icon: faCloud, description: 'Partner with us to Migrate Data between Clouds' },
];

const flyerImages = [
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/seed/picsum/300',
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/id/237/300',
  'https://picsum.photos/id/237/300'
];

function App() {
  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <div className='grid-background' />
        <div className='oval blue top-right' />
        <header className='header'>
          <Logo />
          <section className='menu-items-container'>
            <div>About</div>
            <div>Join Us</div>
            <div>Portfolio</div>
          </section>
          <Button primary label="Hire Us" />
        </header>

        <section className='section-1'>
          <div className='section-1-tagline'>Your Idea.<br />
            Confidence Led.<br />
            Passion Built.
          </div>
          <section className='actions-wrapper'>
            <Button label="Know Us" />
            <Button label="Hire Us" />
          </section>
          {/* <div className='coming-soon'>Coming soon!</div> */}
          <div className='oval bottom-left' />
        </section>

        <section className='section-2'>
          <div className='oval blue top' />
          <div className='section-2-container'>
            {ourWorkConfig.map((work, index) => (
              <div className='item-container' key={work.label}>
                <div className={`icon-container item-${index + 1}`}>
                  <FontAwesomeIcon icon={work.icon} />
                </div>
                <div className='description-container'>
                  <label>{work.label}</label>
                  <p>{work.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='oval' />
        </section>

        <div className='section-3'>
          <div className='grid-background sec-3-grid-background' />
          <section className='section-3-container'>
            <header>our work</header>
            <div className='flyers'>
              {flyerImages.map((image, index) => (
                <React.Fragment key={`${image}/${index}`}>
                  <div className={`flyer flyer-${index + 1}`}>
                    <img src={image} alt={image} />
                  </div>
                </React.Fragment>
              ))}
            </div>
            <Button className="dribbble-action" label={<div className='dribbble-label'>View on Dribbble<FontAwesomeIcon icon={faDribbble} size="lg" /></div>} />
          </section>
        </div>

        <section className='section-4'>
          <div className='grid-background sec-4-grid-background' />
          <div className='oval top' />
          <div className='section-4-container'>
            <div className='tech-stack'>
              <div className='tech-icon-wrapper'>
                <img src='' alt='swift' />
              </div>
              <div className='tech-icon-wrapper'>
                <img src='' alt='figma' />
              </div>
              <div className='tech-icon-wrapper'>
                <img src='' alt='aws' />
              </div>
              <div className='tech-icon-wrapper'>
                <img src='' alt='node' />
              </div>
            </div>
            <div className='center'>
              <label>Tech Stack for every need</label>
              <p>Digital Transformation is inspiring new standards of business and growth. It is not just about incorporating new technology into a business</p>
              <Button primary label="Start a Project" />
            </div>
            <div className='tech-stack right'>
              <div className='tech-icon-wrapper'>
                <img src='' alt='react' />
              </div>
              <div className='tech-icon-wrapper'>
                <img src='' alt='android' />
              </div>
              <div className='tech-icon-wrapper'>
                <img src='' alt='rails' />
              </div>
              <div className='tech-icon-wrapper'>
                + 20 more
              </div>
            </div>
          </div>
          <div className='oval blue' />
        </section>

        <section className='section-5'>
          <div></div>
        </section>

      </div>
      <footer className='footer'>2022  Friday Tech Labs Priavte Limited All Rights Reserved.</footer>
    </div>
  );
}

export default App;
