import {useEffect, useState} from 'react'

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
            <p>
            <label className = "amount">
            Amount:
            <input type="text" value={amount} placeholder="$" onChange={(e)=>setAmount(e.target.value)}/>
            </label>
            </p>
            <div className='submitButton'>
            <input type="submit" value="Submit" />
            </div>
        </form>
        </div>
        
      </div>
      )
        
}
export default Donate;