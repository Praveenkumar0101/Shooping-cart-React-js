import { BrowserRouter, Route, Routes } from "react-router-dom"
import RegistrationForm from "../assets/screens/registration.js/registration"
import LoginForm from "../assets/screens/registration.js/login"
import Products from "../products"






const Navigation=()=>{


return(


<>
<BrowserRouter>


<Routes>
<Route path="/" Component={RegistrationForm}/>

<Route path="/login" Component={LoginForm}/>
<Route path="/home" Component={Products}/>




</Routes>













</BrowserRouter>













</>





)



}
export default Navigation