import React from 'react';
import { Link } from 'react-router-dom';
import '../ComponentsCSS/Login.css';

function App() {
  return (
    <div className='Parent-login'>
      <div className='form-container'>
        <h4>Welcome</h4>
        <div className='logo-login'>
          <img src='src/assets/cvsu.png' alt='Logo' className='logo1' />
        </div>
        <form className='login-form'>
          <fieldset>
            <center>
              <input
                type='email'
                name='studnum'
                placeholder='Your Student Number'
                className='box border border-black'
              />
              <input
                type='password'
                name='password'
                placeholder='Your Password'
                className='box border border-black'
              />
            </center>
            <div className='label'>
              <Link to='/forgot'>Forgot Password</Link>
            </div>
            <div className='button-container'>
              <Link to='/map' className='Botton'>Login</Link>
              <Link to='/sign' className='Botton'>Sign Up</Link>
            </div>
          </fieldset>
        </form>
      </div>
      <div className='mission-vision login-text'>
          <h4>Our Mission</h4>
          <p>
            Cavite State University shall provide excellent, equitable and
            relevant educational opportunities in the arts, sciences, and
            technology through quality instruction and responsive research and
            development activities. It shall produce professional, skilled, and
            morally upright individuals for global competitiveness.
          </p>
          <h4>Our Vision</h4>
          <p>
            The premier university in historic Cavite globally recognized for
            excellence in character development, academics, research, innovation,
            and sustainable community engagement.
          </p>
          <h4>Quality Policy</h4>
          <p>
            We commit to the highest standards of education, value our stakeholders,
            strive for continual improvement of our products and services, and
            uphold the University’s tenets of Truth, Excellence, and Service to
            produce globally competitive and morally upright individuals.
          </p>
        </div>
    </div>
  );
}

export default App;
