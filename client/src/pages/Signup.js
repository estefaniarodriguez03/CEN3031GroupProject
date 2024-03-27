import {useEffect, useState} from 'react'
import {useNavigate,Link,NavLink} from "react-router-dom"
import axios from "axios"




const Login = () => {
    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");
    async function handleSubmit(event) {
        event.preventDefault();

        try{
            await axios.post("http://localhost:5050/",{
                username,password
            }).then(res=>{
                if(res.data="exist"){
                    alert("user already exists")
                }
                else{
                    alert("user does not exist")
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
        <div className = "loginText">Sign Up</div>
        <form onSubmit={handleSubmit}>
            <div className = "login">
            <p>
            <label>
            Username:
            <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
            </label>
            </p>
            <p>
            <label className = "amount">
            Password:
            <input type="password" value={password}  placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            </p>
            </div>
            <div className='submitButton'>
            <input type="submit" onClick={handleSubmit} />
            </div>
        </form>

        <br />
        <div className = "orFormat">
        <p>OR</p>
        <br />
        </div>

        <NavLink to="/signin"><div className='signin'>Sign In</div></NavLink>
        </div>

        
      </div>
      )
        
    
    
}
export default Login;