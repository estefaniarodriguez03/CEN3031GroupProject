import Homepage from "./pages/Homepage.js";
import DonationForm from "./pages/DonationForm.js";
import AdoptableDogs from "./pages/AdoptableDogs";
import Navbar from "./components/Navbar.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route exact path="/" element = {<Homepage />}> </Route>
          <Route exact path="/donate" element = {<DonationForm />}> </Route>
          <Route exact path="/adoptabledogs" element = {<AdoptableDogs />}> </Route>
          <Route exact path="/signin" element = {<Login />}> </Route>
          <Route exact path="/signup" element = {<Signup />}> </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
