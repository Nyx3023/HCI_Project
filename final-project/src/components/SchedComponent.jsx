import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from './BarComponent.jsx'; 
import '../ComponentsCSS/Schedule.css';


function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const changeMonth = (offset) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    setCurrentDate(new Date(newDate));
  };

  const renderCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const days = daysInMonth(month, year);
    const startDay = startDayOfMonth(month, year);

    let calendar = [];
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = daysInMonth(prevMonth, prevYear);

    for (let i = 0; i < startDay; i++) {
      calendar.push(
        <Col key={`prev-${i}`} className="border border-dark day-grid days-prev-next-box">
          {daysInPrevMonth - startDay + i + 1}
        </Col>
      );
    }

    for (let i = 1; i <= days; i++) {
      const dayOfWeek = (startDay + i - 1) % 7;
      let schedule = '';

      if (dayOfWeek === 1) { // Monday
        schedule = '9:00am - 11:00am<br>1:00pm - 3:00pm<br>3:00pm - 7:00pm';
      } else if (dayOfWeek === 2) { // Tuesday
        schedule = '7:00am - 11:00am<br>11:00am - 1:00pm<br>3:00pm - 5:00pm';
      } else if (dayOfWeek === 4) { // Thursday
        schedule = '7:00am - 11:00am<br>1:00pm - 3:00pm';
      }

      const dayClass = schedule ? "days-box scheduled-day" : "days-box";

      calendar.push(
        <Col key={i} className={`border border-dark day-grid ${dayClass}`}>
          {i}
          {schedule && (
            <div className="schedule" dangerouslySetInnerHTML={{ __html: schedule }}></div>
          )}
        </Col>
      );
    }

    const totalBoxes = startDay + days;
    const emptyBoxes = (7 - (totalBoxes % 7)) % 7;
    for (let i = 0; i < emptyBoxes; i++) {
      calendar.push(
        <Col key={`next-${i}`} className="border border-dark day-grid days-prev-next-box">
          {i + 1}
        </Col>
      );
    }

    return calendar;
  };

  return (
    <div className="Parent-sched">
      <div className="d-flex Parent-map">
        <Sidebar />
        <div className="Calendar">
          <Container className="schedcontainer">
            <Row className="mb-3">
              <Col>
                <Button
                  style={{ backgroundColor: 'rgb(68, 99, 57)', border: 'none' }}
                  onClick={() => changeMonth(-1)}
                >
                  Previous
                </Button>
              </Col>
              <Col className="text-center">
                <h4>
                  {currentDate.toLocaleString("default", { month: "long" })}{" "}
                  {currentDate.getFullYear()}
                </h4>
              </Col>
              <Col className="text-end">
                <Button
                  style={{ backgroundColor: 'rgb(68, 99, 57)', border: 'none' }}
                  onClick={() => changeMonth(1)}
                >
                  Next
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="border border-dark day-box">Sun</Col>
              <Col className="border border-dark day-box">Mon</Col>
              <Col className="border border-dark day-box">Tue</Col>
              <Col className="border border-dark day-box">Wed</Col>
              <Col className="border border-dark day-box">Thu</Col>
              <Col className="border border-dark day-box">Fri</Col>
              <Col className="border border-dark day-box">Sat</Col>
            </Row>
            <Row className="day-grid">
              {renderCalendar().map((day, index) => (
                <React.Fragment key={index}>
                  {day}
                  {(index + 1) % 7 === 0 && <div className="w-100"></div>}
                </React.Fragment>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
