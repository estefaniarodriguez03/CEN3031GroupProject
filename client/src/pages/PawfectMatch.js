import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const PawfectMatch = () => {

    const [formInputs, setFormInputs] = useState({
        breed: '',
        size: '',
        gender: '',
        age: 0,
        traits: '', 
    });

    const [matches, setMatches] = useState([]);

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
    
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormInputs(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const findBestMatches = (userPreferences) => {
        const scoredPets = pets.map(pet => {
            let score = 0;
    
            // Direct match scoring
            if (pet.breed === userPreferences.breed) score += 25;
            if (pet.size === userPreferences.size) score += 20;
            if (pet.gender === userPreferences.gender) score += 20;
    
            // Age preference (assuming a tolerance of +/- 2 years)
            if (Math.abs(pet.age - userPreferences.age) <= 2) score += 20;
    
            // Personality traits - assuming 'traits' in both pet and userPreferences are comma-separated strings
            const petTraits = pet.traits && typeof pet.traits === 'string' ? pet.traits.split(',').map(trait => trait.trim().toLowerCase()) : [];
            const userTraits = userPreferences.traits && typeof userPreferences.traits === 'string' ? userPreferences.traits.split(',').map(trait => trait.trim().toLowerCase()) : [];
            const matchingTraits = petTraits.filter(trait => userTraits.includes(trait)).length;
            score += matchingTraits * 5; // Assuming up to 3 traits, each match adds 5 points
    
            return { ...pet, compatibilityScore: score };
        });
    
        // Sort pets by score in descending order and return the top matches
        return scoredPets.sort((a, b) => b.compatibilityScore - a.compatibilityScore).slice(0, 10);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const topMatches = findBestMatches(formInputs);
        setMatches(topMatches);
    };

    return (
        <div className = "pawfectMatch" >
            <div className = "welcomeText">Welcome to Pawfect Match!</div>
            <div className = "pmDesc">  "Pawfect Match" is a unique pet matching service which pairs you with your ideal furry friend based on your preferences and lifestyle, ensuring a pawfect match for a lifelong companionship. Simply fill out our questionnaire, and let us help you find the furry companion that perfectly fits your life and heart.
            </div>

            {/* Preferences Questionnaire */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        Preferred Breed:
                        <select name="breed" value={formInputs.breed} onChange={handleInputChange}>
                            <option value="Australian Shepherd">Australian Shepherd</option>
                            <option value="Beagle">Beagle</option>
                            <option value="Boston Terrier">Boston Terrier</option>
                            <option value="Boxer">Boxer</option>
                            <option value="Bulldog">Bulldog</option>
                            <option value="Cavalier King Charles Spaniel">Cavalier King Charles Spaniel</option>
                            <option value="Dachshund">Dachshund</option>
                            <option value="Doberman Pinscher">Doberman Pinscher</option>
                            <option value="German Shepherd">German Shepherd</option>
                            <option value="Golden Retriever">Golden Retriever</option>
                            <option value="Great Dane">Great Dane</option>
                            <option value="Labrador Retriever">Labrador Retriever</option>
                            <option value="Pomeranian">Pomeranian</option>
                            <option value="Poodle">Poodle</option>
                            <option value="Rottweiler">Rottweiler</option>
                            <option value="Shetland Sheepdog">Shetland Sheepdog</option>
                            <option value="Shih Tzu">Shih Tzu</option>
                            <option value="Siberian Husky">Siberian Husky</option>
                            <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Preferred Size:
                        <select name="size" value={formInputs.size} onChange={handleInputChange}>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Extra Large">Extra Large</option>
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Preferred Gender:
                        <select name="gender" value={formInputs.gender} onChange={handleInputChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>
                
                <div className="form-group">
                    <label>
                        Preferred Age:
                        <select name="age" value={formInputs.age} onChange={handleInputChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label>
                        Preferred Traits (TOP 3):
                        <select name="traits" value={formInputs.traits} onChange={handleInputChange}>
                            <option value="Calm">Calm</option>
                            <option value="Active">Active</option>
                            <option value="Gentle">Gentle</option>
                            <option value="Curious">Curious</option>
                            <option value="Protective">Protective</option>
                            <option value="Loyal">Loyal</option>
                            <option value="Independent">Independent</option>
                            <option value="Intelligent">Intelligent</option>
                            <option value="Stubborn">Stubborn</option>
                            <option value="Adventurous">Adventurous</option>
                            <option value="Affectionate">Affectionate</option>
                            <option value="Energetic">Energetic</option>
                            <option value="Trainable">Trainable</option>
                            <option value="Friendly">Friendly</option>
                            <option value="Playful">Playful</option>
                        </select>
                    </label>
                </div>

                <button type="submit">Find My Pawfect Match</button>
            </form>
            
            {/* Personalized Matches */}
            <div className="matches">
                {matches.map(pet => (
                    <div key={pet.name}>
                        Name: {pet.name}
                        Breed: {pet.breed}
                        Size: {pet.size}
                        Gender: {pet.gender}
                        Age: {pet.age}
                        Top 3 Personality Traits: {pet.traits}
                        Compatability Score: {pet.score}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PawfectMatch;