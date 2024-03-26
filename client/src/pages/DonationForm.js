import {useEffect, useState} from 'react'




const DonationForm = () => {
    const[name,setName] = useState("");
    const[amount,setAmount] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }
    return(
    <div>
        <div className = "donationText">Donate to a specific pet!</div>
        <form onSubmit={handleSubmit}>
            <label>
            Name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label className = "amount">
            Amount:
            <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
        
      </div>
      )
        
    
    
}
export default DonationForm;