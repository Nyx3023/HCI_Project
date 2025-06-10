import React, { useState } from 'react';
import { Container, Form, Button, ListGroup, Modal } from 'react-bootstrap';
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import "../componentscss/Notes.css";
import Sidebar from "./BarComponent.jsx";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');
  const [showModal, setShowModal] = useState(false);

  const openNote = (index) => {
    setSelectedNote({ ...notes[index], index });
  };

  const handleSaveEdit = () => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNote.index] = { title: selectedNote.title, text: selectedNote.text };
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleAddNote = () => {
    if (newTitle.trim() && newText.trim()) {
      setNotes([...notes, { title: newTitle, text: newText }]);
      setNewTitle('');
      setNewText('');
      setShowModal(false);
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row">
    <Sidebar />
    <Container fluid className="Parent-mapBG">
      {selectedNote ? (
        <div className='notes'>
          <Button variant="link" style={{display: 'flex'}} onClick={() => setSelectedNote(null)}>
            <BsArrowLeft size={30} />
          </Button>
          <Form.Control
            type="text"
            value={selectedNote.title}
            onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value.slice(0, 30) })}
            className="mb-2"
          />
          <Form.Control
            as="textarea"
            rows={10}
            value={selectedNote.text}
            onChange={(e) => setSelectedNote({ ...selectedNote, text: e.target.value })}
          />
          <Button variant="primary" onClick={handleSaveEdit} className="mt-3">Save</Button>
        </div>
      ) : (
        
        <div className='notes'>
          <h2 style={{fontWeight:'bold'}}>My Notes</h2>
          <ListGroup>
            {notes.map((note, index) => (
              <ListGroup.Item key={index} onClick={() => openNote(index)}>
                <strong>{note.title.length > 12 ? note.title.substring(0, 12) + '...' : note.title}</strong>
                <p>{note.text.length > 15 ? note.text.substring(0, 15) + '...' : note.text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button
            variant="primary"
            onClick={() => setShowModal(true)}
            style={{ position: 'fixed', bottom: '20px', right: '20px',backgroundColor: 'rgb(86, 151, 63)', border: 'none' }}
          >
            <IoMdAddCircleOutline size={50} />
          </Button>
        </div>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value.slice(0, 25))}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Note</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddNote}>Add Note</Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </div>
  );
};

export default Notes;
