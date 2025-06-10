import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [smShow, setSmShow] = useState(false);


  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2 border border-black" style={{ width: '400px', marginTop: '1rem', color: 'black', backgroundColor: 'lightGreen' }}>
        Send OTP
      </Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            OTP SENT
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>OTP will be sent to your mobile number.</Modal.Body>
      </Modal>
      
    </>
  );
}

export default Example;