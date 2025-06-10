import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Sidebar from './BarComponent.jsx';

import Sleep from '../assets/Sleep.png';
import R104 from '../assets/104.png';
import R309 from '../assets/309.png';
import R204 from '../assets/204.png';
import RS101 from '../assets/S-101.png';
import GetReady from '../assets/GetReady.png';
import StudyWell from '../assets/StudyWell.png';
import GoodJob from '../assets/GoodJob.png';

// Schedule Data (same as in SchedComponent)
const schedules = {
  1: [ // Monday
    { subject: "INSY-55", time: "9:00am - 11:00am", room: "ROOM S-101" },
    { subject: "DCIT-26", time: "1:00pm - 3:00pm", room: "ROOM 104" },
    { subject: "ITEC-80", time: "3:00pm - 7:00pm", room: "ROOM 309" }
  ],
  2: [ // Tuesday
    { subject: "ITEC-85", time: "7:00am - 11:00am", room: "ROOM S-101" },
    { subject: "DCIT-60", time: "11:00am - 1:00pm", room: "ROOM 104" },
    { subject: "INSY-55", time: "3:00pm - 5:00pm", room: "ROOM 104" }
  ],
  4: [ // Thursday
    { subject: "ITEC-90", time: "7:00am - 11:00am", room: "ROOM 204" },
    { subject: "DCIT-26", time: "1:00pm - 3:00pm", room: "ROOM S-101" }
  ]
};

const MapSchedule = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date()); //Edit here for manual thingy "2024-01-15T09:30:00" Monday 9:30 in Date()
  const [imageSrc, setImageSrc] = useState(Sleep);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date) => {
    return `${date.toLocaleString('en-US', { weekday: 'long' })} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')} ${date.toLocaleString('en-US', { month: 'long' })} ${date.getDate()} ${date.getFullYear()}`;
  };

  const updateImage = () => {
    const hours = currentDateTime.getHours();
    const day = currentDateTime.getDay(); // 0-Sunday, 1-Monday, ..., 6-Saturday

    if (day === 1 && hours >= 9 && hours < 11) {
      setImageSrc(RS101);
    } else if (day === 1 && hours >= 8 && hours < 9) {
      setImageSrc(StudyWell);
    } else if (day === 1 && hours >= 12 && hours < 13) {
      setImageSrc(StudyWell);
    } else if (day === 1 && hours >= 13 && hours < 15) {
      setImageSrc(R104);
    } else if (day === 1 && hours >= 15 && hours < 19) {
      setImageSrc(R309);
    } else if (day === 2 && hours >= 6 && hours < 7) {
      setImageSrc(StudyWell);
    } else if (day === 2 && hours >= 7 && hours < 11) {
      setImageSrc(RS101);
    } else if (day === 2 && hours >= 11 && hours < 13) {
      setImageSrc(R104);
    } else if (day === 2 && hours >= 14 && hours < 15) {
      setImageSrc(StudyWell);
    } else if (day === 2 && hours >= 15 && hours < 17) {
      setImageSrc(R104);
    } else if (day === 4 && hours >= 6 && hours < 7) {
      setImageSrc(StudyWell);
    } else if (day === 4 && hours >= 7 && hours < 11) {
      setImageSrc(R204);
    } else if (day === 4 && hours >= 12 && hours < 13) {
      setImageSrc(StudyWell);
    } else if (day === 4 && hours >= 13 && hours < 15) {
      setImageSrc(RS101);
    } else if (day === 1 && hours >= 0 && hours < 19) {
      setImageSrc(GetReady);
    } else if (day === 1 && hours >= 19 && hours < 24) {
      setImageSrc(GoodJob);
    } else if (day === 2 && hours >= 0 && hours < 17) {
      setImageSrc(GetReady);
    } else if (day === 2 && hours >= 17 && hours < 24) {
      setImageSrc(GoodJob);
    } else if (day === 4 && hours >= 0 && hours < 15) {
      setImageSrc(GetReady);
    } else if (day === 4 && hours >= 15 && hours < 24) {
      setImageSrc(GoodJob);
    } else {
      setImageSrc(Sleep);
    }
  };

  useEffect(() => {
    updateImage();
  }, [currentDateTime]);

  // Get the current day schedule
  const currentDay = currentDateTime.getDay(); // 0-Sunday, 1-Monday, ..., 6-Saturday
  const todaySchedule = schedules[currentDay] || [];

  const getCurrentSchedule = () => {
    const hours = currentDateTime.getHours();
    const minutes = currentDateTime.getMinutes();
    const currentTime = hours * 60 + minutes;

    if (!todaySchedule.length) return null;

    // Find the current or next schedule
    for (const schedule of todaySchedule) {
        const [startTime, endTime] = schedule.time.split(' - ');
        
        // Extract hours and minutes, handling AM/PM
        const startMatch = startTime.match(/(\d+):(\d+)(am|pm)/i);
        const endMatch = endTime.match(/(\d+):(\d+)(am|pm)/i);
        
        if (!startMatch || !endMatch) continue;
        
        let startHour = parseInt(startMatch[1]);
        const startMinute = parseInt(startMatch[2]);
        let endHour = parseInt(endMatch[1]);
        const endMinute = parseInt(endMatch[2]);

        // Convert to 24 hour format
        if (startMatch[3].toLowerCase() === 'pm' && startHour !== 12) startHour += 12;
        if (startMatch[3].toLowerCase() === 'am' && startHour === 12) startHour = 0;
        if (endMatch[3].toLowerCase() === 'pm' && endHour !== 12) endHour += 12;
        if (endMatch[3].toLowerCase() === 'am' && endHour === 12) endHour = 0;
        
        const scheduleStartTime = startHour * 60 + startMinute;
        const scheduleEndTime = endHour * 60 + endMinute;

        console.log(`Current time: ${hours}:${minutes} (${currentTime} minutes)`);
        console.log(`Checking schedule: ${schedule.subject} ${schedule.time}`);
        console.log(`Start: ${startHour}:${startMinute} (${scheduleStartTime} minutes)`);
        console.log(`End: ${endHour}:${endMinute} (${scheduleEndTime} minutes)`);

        if (currentTime >= scheduleStartTime && currentTime < scheduleEndTime) {
            console.log('Found current schedule!');
            return schedule; // Current ongoing schedule
        } else if (currentTime < scheduleStartTime) {
            console.log('Found next schedule!');
            return schedule; // Next upcoming schedule
        }
    }
    
    console.log('No current or upcoming schedule found');
    return null; // No current or upcoming schedule for today
  };

  return (
    <React.Fragment>
    <div className="Parent-mapBG">
    <div className="Parent-map">
    <Sidebar/>
      <Container className="mapContent">
        <Row className="mapimage">
          <Col>
            <h1 style={{ color: 'green' }}>Good Day! (user!)</h1>
            <h2>{currentDateTime.toLocaleString('en-US', { 
              weekday: 'long', 
              hour: 'numeric', 
              minute: '2-digit', 
              hour12: true, 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}</h2>
            <Card className="mt-4">
            <Col>
            <img src={imageSrc} alt="Big Map" className='MapPicture' style={{ width: '42%', height: 'auto' }}/>
          </Col>
            <Card.Body>
              {todaySchedule.length > 0 ? (
                <>
                  {getCurrentSchedule() ? (
                    <>
                      <h5 className="card-title">{getCurrentSchedule().room}</h5>
                      <p className="card-text">{getCurrentSchedule().time}</p>
                    </>
                  ) : (
                    <h5 className="card-title" style={{fontWeight:'bold'}}>No more classes for today!</h5>
                  )}
                </>
              ) : (
                <h5 className="card-title" style={{fontWeight:'bold'}}> ENJOY YOUR REST! NO CLASS FOR TODAY</h5>
              )}
            </Card.Body>
        </Card>
          </Col>
          
        </Row>

        

        {/* Dynamic Schedule Table */}
        <Table striped bordered hover className="mt-4">
          <thead>
            <tr>
              <th colSpan="3" className="text-center">
                {currentDay === 1 ? "MONDAY" : currentDay === 2 ? "TUESDAY" : currentDay === 3 ? "WEDNESDAY" : currentDay === 4 ? "THURSDAY" : currentDay === 5 ? "FRIDAY" : currentDay === 6 ? "SATURDAY" : "SUNDAY" }
              </th>
            </tr>
            {todaySchedule.length > 0 ? (
              <tr>
                <th>Subject Name</th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            ) : (
              <tr>
                <th colSpan="3" className="text-center" style={{ fontSize: '24px', padding: '20px' }}>
                  You have no class for today!
                </th>
              </tr>
            )}
          </thead>
          <tbody>
            {todaySchedule.length > 0 ? (
              todaySchedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.subject}</td>
                  <td>{item.time}</td>
                  <td>{item.room}</td>
                </tr>
              ))
            ) : (
              <>
                <tr>
                </tr>
              </>
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  </div>
  </React.Fragment>
  );
};

export default MapSchedule;
