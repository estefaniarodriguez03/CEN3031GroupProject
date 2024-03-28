import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
import girlAndDog from './girlanddog.jpg'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const AdoptableDogs = () => {

    const[pets, setPets] = useState([])
    
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5050/record/')
            const petRecords = await response.json()
            console.log(petRecords)
            if(response.ok){
                setPets(petRecords)
                
            }
        }
        getData()
    }, [])


    return (
        pets.map((pet) => {
            return (
            <div>
            <div className = "petListText">
                <div className = "adMain" >
                    <div key= {pet._id}>
                        <div className= "square" > </div>
                        <div className= "name"> {pet.Pet_Name} </div>

                        <div className="dogPix">
                            <Container>
                            <Row>
                                <Col xs={6} md={11}>
                                <Image img style={{width:"200px", height:"200px"}} src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU'} thumbnail />
                                </Col>
                            </Row>
                            </Container>    
                        </div>

                        <div className = "petInfo0"> About Me! </div>
                        <div className = "petInfo1"> Breed: </div><div className = "petInfo2"> {pet.Breed}</div>
                        <br></br>
                        <div className = "petInfo1"> Size: </div><div className = "petInfo2"> {pet.Size}</div>
                        <br></br>
                        <div className = "petInfo1"> Age: </div><div className = "petInfo2"> {pet.Age}</div>
                        <br></br>
                        <div className = "petInfo1"> Gender: </div><div className = "petInfo2"> {pet.Gender}</div>
                        <br></br>
                        <div className = "petInfo1"> Traits: </div><div className = "petInfo2"> {pet.Personality_Traits}</div>
                        <br></br>
                            <div className = "donatePet">
                                <NavLink to= "/donate">
                                    <Button variant="primary">Adopt</Button>{' '}
                                </NavLink>
                                <NavLink to= "/donate">
                                    <Button variant="success">Donate</Button>{' '}
                                </NavLink>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            )
        })
    );
        

    
}
export default AdoptableDogs;