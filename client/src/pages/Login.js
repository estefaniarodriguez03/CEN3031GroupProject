import {useEffect, useState} from 'react'
import {useNavigate,Link,NavLink} from "react-router-dom"
import axios from "axios"


import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const Login = () => {
    const history=useNavigate();
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();

        try{
            await axios.post("http://localhost:5050/",{
                username,password
            }).then(res=>{
                if(res.data="exist"){
                    history("/")
                }
                else{
                    alert("User is not logged in")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)
            })
        }
        catch(err){
            console.log(err);
        }
        
    }
    return(
    <div>
        <div className = "loginPage">
        <div className = "loginText">Sign in</div>
        <form onSubmit={handleSubmit}>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword" onChange={(e)=>setPassword(e.target.value)}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='submitButton'>
                <Button variant="secondary" type="submit" onClick={handleSubmit} >
                    Submit
                </Button>
                </div>
            </Form>
        </form>

        <br />
        <div className = "orFormat">
        <p>OR</p>
        <br />
        </div>



        <NavLink to="/signup"><div className='signup'>Sign Up</div></NavLink>
        </div>

        
      </div>
      )
        
    
    
}
export default Login;