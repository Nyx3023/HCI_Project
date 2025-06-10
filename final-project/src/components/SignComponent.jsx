import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { Link } from 'react-router-dom';


function GridAutoSizingColMixExample() {
  return (
    <div className='Parent-login'>
      <div className='form-container'>
        <h4>Sign-Up</h4>
        <div className='logo-login'>
          <img src='src/assets/cvsu.png' alt='Logo' className='logo1' />
        </div>
    
          <fieldset>
            <center>
              <input type='email' name="stud" placeholder='Your Student Number' className='box border border-black'/>
              <input type='email' name="phone" placeholder='Your Phone Number' className='box border border-black' />
              <input type="email" name="username" placeholder="Your Username" className='box border border-black' />
              <input type="password" name="password" placeholder="Your Password" className='box border border-black' />
            </center>
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and numbers,
              and must not contain spaces, special characters, or emoji.
            </Form.Text>
              <Col xs="auto" className="my-1">
                <Link to="/login" className="Botton">Submit</Link>
              </Col>
          </fieldset>
        </div>
      </div>
  );
}

export default GridAutoSizingColMixExample;