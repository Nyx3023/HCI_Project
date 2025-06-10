import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './ModalOTP.jsx';
import '../ComponentsCSS/Login.css';


function GridAutoSizingColMixExample() {
  return (
    <div className='Parent-login'>
      <div className='form-container'>
        <h4>Forgot Password</h4>
        <div className='logo-login'>
          <img src='src/assets/cvsu.png' alt='Logo' className='logo1' />
        </div>
          <form className='login-form'>
            
            <Row className="align-items-center">
              <input
                type='email'
                name='username'
                placeholder='Your Student Number'
                className='box border border-black'
                maxLength={9}
              />
              <input 
                type='email' 
                name="phone" 
                placeholder='Your Phone Number' 
                className='box border border-black'
                maxLength={11}
              />
            <Modal/>
              <input
                type='email'
                name='password'
                placeholder='One Time Password'
                className='box border border-black'
                maxLength={6}
              />
            <Form.Text id="passwordHelpBlock" muted>
              Your One-Time Password must contain 6 numbers,
            </Form.Text>
            <div className='button-container'>
              <Link to='/change' className='Botton'>Submit</Link>
            </div>
            </Row>
            
        </form>
      </div>
    </div>
  );
}

export default GridAutoSizingColMixExample;