import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, Modal, Form } from 'react-bootstrap';
import { IoMdAddCircleOutline } from "react-icons/io";
import { BsArrowLeft } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Sidebar from "./BarComponent";
import "../componentscss/Messengersam.css";

function MessagingApp() {
  const [show, setShow] = useState(false);
  const [chats, setChats] = useState([
    {
      id: 1,
      name: 'SAMUELLE FOSTER',
      messages: [
        { text: 'HELLO!', sender: 'SAMUELLE', time: '10:00 AM' },
        { text: 'How are you?', sender: 'SAMUELLE', time: '10:01 AM' },
        { text: 'Im good!', sender: 'YOU', time: '10:02 AM' }
      ]
    },
    {
      id: 2,
      name: 'JEROME LACSON',
      messages: [
        { text: 'YOW!', sender: 'YOU', time: '09:00 AM' },
        { text: 'Whats up?', sender: 'JEROME', time: '09:01 AM' },
        { text: 'Nothing much!', sender: 'YOU', time: '09:02 AM' }
      ]
    },
    {
      id: 3,
      name: 'NICOS LERIOS',
      messages: [
        { text: 'TESTING', sender: 'NICOS', time: '09:00 AM' },
        { text: 'hmm?', sender: 'NICOS', time: '09:01 AM' },
        { text: '????', sender: 'YOU', time: '09:02 AM' }
      ]
    },
    {
      id: 4,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
      id: 5,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
      id: 6,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
      id: 7,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
      id: 8,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
      id: 9,
      name: 'TESTING',
      messages: [
        { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
      ]
    },
    {
    id: 10,
    name: 'TESTING',
    messages: [
      { text: 'TESTING', sender: 'TESTING', time: '09:00 AM' },
    ]
    }
    
  ]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [newMessage, setNewMessage] = useState('');

  const handleClose = () => {
    setShow(false);
    setUsername('');
    setMessage('');
  };

  const handleShow = () => setShow(true);

  const openChat = (chat) => {
    setSelectedChat(chat);
    setNewMessage('');
  };

  const sendMessage = () => {
    if (newMessage.trim() && selectedChat) {
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat.id) {
          return {
            ...chat,
            messages: [...chat.messages, { text: newMessage, sender: 'YOU', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
          };
        }
        return chat;
      });
      setChats(updatedChats);
      setSelectedChat({
        ...selectedChat,
        messages: [...selectedChat.messages, { text: newMessage, sender: 'YOU', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
      });
      setNewMessage('');
    } else if (username.trim() && message.trim()) {
      const newChat = {
        id: chats.length + 1,
        name: username,
        messages: [{ text: message, sender: 'YOU', time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]
      };
      setChats([...chats, newChat]);
      handleClose();
    }
  };
  

  const backToChats = () => {
    setSelectedChat(null);
  };

  return (
    <div className="d-flex flex-column flex-md-row Parent-mapBG2">
      <Sidebar />
      <Container fluid className="p-0">
        <Row className="m-0 flex-grow-1">
          {/* Chat List (Left Panel) */}
          <Col md={3} className={`bg-light chat-list messeg2 ${selectedChat ? 'd-none d-md-block' : 'd-block'}`}>
            <ListGroup>
              {chats.map(chat => (
                <ListGroupItem key={chat.id} onClick={() => openChat(chat)}>
                  <div className="d-flex align-items-center">
                    <div style={{ width: '40px', height: '40px', textAlign: 'center', lineHeight: '40px', marginRight: '8px'}}>
                      <FaUserCircle size={40}/>
                    </div>
                    <div className="ml-3">
                      <strong>{chat.name}</strong>
                      <p className="text-muted small">{chat.messages[chat.messages.length - 1].text}</p>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>

              <Button variant="primary" className="floating-add-btn" onClick={handleShow}>
                <IoMdAddCircleOutline size={50} />
              </Button>

          </Col>

          {/* Chat Messages (Right Panel) */}
          <Col md={9} className={`d-flex messeg flex-column ${selectedChat ? 'd-block' : 'd-none d-md-block'}`} style={{ padding: '0' }}>
            {selectedChat ? (
              <div className="chat-container">
                {/* Chat Header with Back Button */}
                <div className="chat-header">
                  <Button variant="link" className="d-md-none back-btn" onClick={backToChats}>
                    <BsArrowLeft size={30} />
                  </Button>
                  <h2 className="m-0">{selectedChat.name}</h2>
                </div>

                {/* Messages Display */}
                <div className="chat-messages messeg">
                  {selectedChat.messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender === 'YOU' ? 'sent' : 'received'}`}>
                      <div className="message-content">
                        <strong>{msg.sender}:</strong>
                        <p>{msg.text}</p>
                        <small>{msg.time}</small>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="chat-input">
                  <Form.Control
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type a message"
                  />
                  <Button variant="success" onClick={sendMessage}>Send</Button>
                </div>
              </div>
            ) : (
              <div className="text-center messegselect Parent-map">
                <h2>Select a conversation</h2>
                <p>Choose a chat or start a new one</p>
              </div>
            )}
          </Col>
        </Row>

        {/* New Chat Modal */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Start a new conversation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Type your message..." value={message} onChange={(e) => setMessage(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="success" onClick={sendMessage}>Send</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default MessagingApp;
