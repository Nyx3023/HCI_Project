import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { Link } from 'react-router-dom';


function GridAutoSizingColMixExample() {
  return (
    <div className='Parent-login'>
      <div className='form-container'>
        <h4>Account Settings</h4>
        <div className='logo-login'>
          <img src='src/assets/cvsu.png' alt='Logo' className='logo1' />
        </div>
    
          <fieldset>
            
            <center>
              <input type='email' name="username" placeholder='Change Username' className='box border border-black'/>
              <input type='email' name="email" placeholder='Your Email' className='box border border-black' />
              <input type="password" name="password" placeholder="Your Password" className='box border border-black' />
            </center>
              <Col xs="auto" className="my-1">
                <Link to="/map" className="Botton">Submit</Link>
              </Col>
              <Col xs="auto" className="my-1">
                <Link to="/Login" className="Botton">Log-out</Link>
              </Col>
              <Col xs="auto" className="my-1">
                <Link to="/map" className="Botton">Back</Link>
              </Col>
          </fieldset>
        </div>
      </div>
  );
}

export default GridAutoSizingColMixExample;