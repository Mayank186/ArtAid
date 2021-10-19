import './navbar.css';
import{NavLink, useLocation, Outlet, Link} from "react-router-dom";
import{ Home, Book, Chat, Task, Slot,About} from "./pages";
import profileimg from './image/profileimg.jpg';
import './profile.css';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';


export function Profile(props) {
    return(
        <div>
              <nav className='nav-style'  bg='light' expand='lg'>
                <NavLink className='home' to='/' activeStyle>Art Aid</NavLink>
                <NavLink className='nav1'  to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" activeStyle>Book</NavLink>
                <NavLink className='nav3' to="/Chat" activeStyle>Chat</NavLink>
                <NavLink className='nav4' to="/Task" activeStyle>Task</NavLink>
                <NavLink className='nav5' to="/Slot" activeStyle>Slot</NavLink>
                <NavLink className='nav6' to="/About" activeStyle>About</NavLink>


            </nav>
            <div className='container emp-profile'>
                <form method="">
                    <div className='row'>
                        <div className="image">
                            <img src={profileimg} alt='profile image'/>
                        </div>
                        <div>
                            <Link to='/Edit'>
                        <Button variant="secondary" size="lg" active>Edit Profile</Button>
                             </Link>
                        </div>
                        <div style={{position:'relative',top:'30px'}}>
                            <label>Name :  xyz</label><br/>
                            <label>Age :  30</label><br/>
                            <label>Gender : Female</label><br/>
                            <label>Telephone : 123456</label><br/>
                            <label>Problem description :  Stress</label><br/>
                        </div>
                    </div>

                </form>
            </div>
            
        </div>
    )
}

export function Edit(){
    return(
        <h1>Edit here</h1>
    )
}

            
