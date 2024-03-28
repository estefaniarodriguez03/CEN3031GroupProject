import {useEffect, useState} from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Donate = () => {
    const[name,setName] = useState("");
    const[amount,setAmount] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return(
    <div>
        <div className = "donateText">Donate to Helping Hands Pet Rescue!</div>
        <div className = "donateFormat">
        <form onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupDonate">
                    <Form.Label>Donation Amount:</Form.Label>
                    <Form.Control type="amount" value={amount} placeholder="Amount" onChange={(e)=>setAmount(e.target.value)}/>
                </Form.Group>
            </Form>
            <div className='submitButton'>
                <Button variant="secondary" type="submit" onClick={handleSubmit} >
                    Submit
                </Button>
            </div>
        </form>
        </div>
        
      </div>
      )
        
}
export default Donate;

/*
<p>
<label className = "amount">
Amount:
<input type="text" value={amount} placeholder="$" onChange={(e)=>setAmount(e.target.value)}/>
</label>
</p>
*/