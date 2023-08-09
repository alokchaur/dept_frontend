import logo from './logo.svg';
import profile from './profile.webp'
import './App.css';
import React, { useState } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'

const App = () => {

  return (
    <Container fluid className="bg-light">
      <Row>
        <Col md={3} className="py-3">
          <Card className="h-100 shadow-sm">
            <Card.Img variant="top" src={profile} alt="Profile Photo" className='pe-2' />
            <Card.Body>
              <Card.Title>Rupam Goswami</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Assistant Professor</Card.Subtitle>
              <Card.Text>
                <p className='mb-2'>
                  <strong>Department of ECE</strong>
                </p>
                <p className='mb-2'>
                  <strong className='mb-2'>Room No:</strong> 202
                </p>
                <p className='mb-2'>
                  <strong>Email:</strong> rupam@tezu.ernet.in
                </p>
                <p className='mb-2'>
                  <strong>Phone:</strong> 123-456-7890
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} className="py-3">
          <div className="scrollable-section">
            <Accordion defaultActiveKey="0" className='mb-3 shadow-sm'>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p className='fw-semibold fs-5 mb-0'>
                    Education Details
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Degree:</strong> Bachelor of Science in Electrical Engineering
                  <br />
                  <strong>University:</strong> XYZ University
                  <br />
                  <strong>Year:</strong> 2015
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion className='mb-3 shadow-sm'>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p className='fw-semibold fs-5 mb-0'>
                    Area of Specialization
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <strong>Degree:</strong> Bachelor of Science in Electrical Engineering
                  <br />
                  <strong>University:</strong> XYZ University
                  <br />
                  <strong>Year:</strong> 2015
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Courses Taught</Card.Title>
                {/* Add courses taught content here */}
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Research Publications</Card.Title>
                {/* Add research publications content here */}
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Intellectual Property</Card.Title>
                {/* Add intellectual property content here */}
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Awards</Card.Title>
                {/* Add awards content here */}
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>No. of Professional Bodies</Card.Title>
                {/* Add professional bodies content here */}
              </Card.Body>
            </Card>

            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>Additional Information</Card.Title>
                {/* Add additional information content here */}
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
