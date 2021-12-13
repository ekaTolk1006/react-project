import { Route, Routes } from "react-router-dom";
import { Home } from "./Home/Home";
import { Login } from "./Login/Login";
import { Logout } from "./Logout/Logout";
import { SignUp } from "./Sign-up/Sign-up";
import { UserList } from "./User-list/User-list";
import {Profile} from "./Profile/Profile";
import { Header } from "./Header/Header";

const App = () =>{
    return (
        <><Header/>
        <Routes>
    
            <Route path='/' element={<Home/>} />
            <Route path='/users' element={<UserList/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/sign-up' element={<SignUp/>} />
            <Route path='/login' element ={<Login/>} />
            <Route path='/logout' element ={<Logout/>} />
    </Routes>
    
    </>
    ) 

} 


export default App;