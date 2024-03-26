import {useEffect, useState} from 'react'
import {NavLink} from 'react-router-dom'
//import Record from '../components/Record'
import dogWalker from './dogwalker.svg'

/*const Pet = (props) => (
    

)*/

export default function Homepage() {
    return (
      <div className="main">
        <div className="main__container">
          <div className="main__content">
            <h1>Welcome to Helping Hands Pet Rescue!</h1>
            <div className="main_img--container">
              <img src={dogWalker} alt="pic" id="main__img" />
            </div>
            <a href="/" className="main__btn">Events</a>
          </div>
        </div>
      </div>
    );
  }
/*const Homepage = () => {
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
                <div key= {pet._id}>
                    <p className = "name">{pet.Pet_Name}</p>
                    <p>Breed: {pet.Breed}</p>
                    <p>Size: {pet.Size}</p>
                    <p>Age: {pet.Age} yrs</p>
                    <p>Sex: {pet.Gender}</p>
                    <p>Attributes: {pet.Personality_Traits}</p>
                    <NavLink to= "/donate">
                        <p className = "donate">Donate</p>
                    </NavLink>
                    <img src={'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2v8jGQFEHwDE0bEIm2Sofs-0n5RUWyiNtY_JQw46IozVB-YPU'}/>
                </div>
                )
            })
        );

    
}*/
//export default Homepage;