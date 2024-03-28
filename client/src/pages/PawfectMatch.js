import {useEffect, useState} from 'react'
import {useNavigate,Link,NavLink} from "react-router-dom"
import axios from "axios"

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import doggy from './doggy.jpg'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'


const PawfectMatch = () => {
    const element = <FontAwesomeIcon icon={faPaw} />

    const[name,setName] = useState("");
    const[amount,setAmount] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return (
        <div>
        <div className = "pawfectMatch" >
            <div className = "welcomeText">Welcome to Pawfect Match! <br></br>{element}</div>
            <div className = "pmDesc">  "Pawfect Match" is a unique pet matching service which pairs you with your ideal furry friend based on your preferences and lifestyle, ensuring a pawfect match for a lifelong companionship. Simply fill out our questionnaire, and let us help you find the furry companion that perfectly fits your life and heart.
            
        </div>

    
        <div className = "options" >
            <p>Dog breed?</p>
        </div>
        <div className = "dropdown" >
            <Form.Select aria-label="Breed">
                <option>Open this select menu</option>
                <option value="1">Dachshund</option>
                <option value="2">Bulldog</option>
                <option value="3">Poodle</option>
            </Form.Select>
        </div>

        <div className = "options" >
            <p>Dog Age?</p>
        </div>
        <div className = "dropdown" >
            <Form.Select aria-label="Age">
                <option>Open this select menu</option>
                <option value="1">1 years old</option>
                <option value="2">2 years old</option>
                <option value="3">3 years old</option>
            </Form.Select>
        </div>

        <div className = "options" >
            <p>Gender?</p>
        </div>
        <div className = "dropdown" >
            <Form.Select aria-label="Gender">
                <option>Open this select menu</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
            </Form.Select>
        </div>
        
        <div className = "options" >
            <p>Dog Size?</p>
        </div>
        <div className = "dropdown" >
            <Form.Select aria-label="Size">
                <option>Open this select menu</option>
                <option value="1">Small</option>
                <option value="2">Medium</option>
                <option value="3">Large</option>
            </Form.Select>
        </div>

        <div className = "options" >
            <p>Preferred Traits?</p>
        </div>
        <div className = "select" >
            <Form>
            {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Gentle`}
                />
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`Trainable`}
                />
                <Form.Check 
                    type={type}
                    id={`default-${type}`}
                    label={`Independent`}
                />
                </div>
            ))}
            </Form>
        </div>

        <div className='submitButton'>
            <Button variant="secondary" type="submit" onClick={handleSubmit} >
                Submit
            </Button>
        </div>

        <br></br>
        <div className = "doggy">
        <Container>
            <Row>
                <Col xs={8} md={11}>
                <Image img style={{width:"100%", height:"100%"}} src={doggy}  thumbnail />
                </Col>
            </Row>
        </Container>
        </div>

        </div>
        </div>
        
        )
}

export default PawfectMatch;