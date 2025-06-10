import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
function FormTextExample() {
  return (
    <div className='Parent-login'>
      <div className='form-container'>
      <h4>Change Password</h4>
        <div className='logo-login'>
          <img src='src/assets/cvsu.png' alt='Logo' className='logo1' />
        </div>
        <input
          type='email'
          name='username'
          placeholder='New Password'
          className='box border border-black'
        />
        <div className='button-container'>
              <Link to='/login' className='Botton'>Submit</Link>
        </div>
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and numbers,
          and must not contain spaces, special characters, or emoji.
        </Form.Text>
      </div>
    </div>
  );
}

export default FormTextExample;