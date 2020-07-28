import React, { Fragment } from 'react';
import '../styles/landingPage.scss';

export default () => {

  return (
    <Fragment>
      <div>
      </div>
      {/* Backgorund image: */}
      <div className='container-fluid bg-header' id='home'>
        {/* Color effects: */}
        <div className='overlay-grey'>
          {/* Container for banner text: */}
          <div className='container'>
            <div className='row'>
              <div className='banner-text wow bounceInUp' data-wow-delay='0.1s'>
                <h2>Welcome to OMDB</h2>
                <p><span className='decorate'>Explore films and TV shows</span></p>
                {/* Button: */}
                <div className='text-center wow bounceInUp' data-wow-delay='0.3s'>
                  <button onClick={() =>  window.location.href='/login'} >START YOUR ACCOUNT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* text: */}
      <div className='container' id='about'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita necessitatibus repellendus quaerat nam odit non natus ut maiores. Quae esse nisi beatae dignissimos ex facere voluptas excepturi, expedita sint?</p>
      </div>

      <div>
      </div>
      {/* Backgorund image: */}
      <div className='container-fluid bg-header2' id='home'>
        {/* Color effects: */}
        <div className='overlay-grey'>
          {/* Container for banner text: */}
          <div className='container'>
            <div className='row'>
              <div className='banner-text wow bounceInUp' data-wow-delay='0.1s'>
                <h2>Welcome to OMDB</h2>
                <p><span className='decorate'>Explore films and TV shows</span></p>
                {/* Button: */}
                <div className='text-center wow bounceInUp' data-wow-delay='0.3s'>
                  <button>START SEARCHING</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};