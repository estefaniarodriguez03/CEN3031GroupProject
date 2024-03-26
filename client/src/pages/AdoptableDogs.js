import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'

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


        return(
            pets.map((pet) => {
                return(
                <div className = "petListText">
                <div key= {pet._id}>
                    <p className = "name">{pet.Pet_Name}</p>
                    <div className="dogPix">
                        <img style={{width:"10%", height:"10%"}}src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU'}/>
                    </div>
                    <p>Breed: {pet.Breed}</p>
                    <p>Size: {pet.Size}</p>
                    <p>Age: {pet.Age} yrs</p>
                    <p>Sex: {pet.Gender}</p>
                    <p>Attributes: {pet.Personality_Traits}</p>
                    <NavLink to= "/donate">
                        <p className = "donate">
                            Donate
                        </p>
                    </NavLink>
                    
                </div>
                </div>
                )
            })
        );

    
}
export default AdoptableDogs;