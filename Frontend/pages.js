import React from "react";
import{NavLink, Outlet} from "react-router-dom";
import './navbar.css';
import headimg from './image/img1.jpg';
import {Profile} from './Profile'
//import {NavLink,Nav,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElements';

export function Home(){
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
            <img src={headimg}/>        
            
            <div className='div2'>
                    <p style={{textAlign:'center', fontWeight:'bold'}}>Let clients schedule therapy appointments online with ease</p>
                    <p style={{textAlign:'center'}}>With Art Aid clients can schedule appointments in just seconds at any convenient time. The schedule allows you to add therapist, also offer different services in one schedule. Would you like to synchronize your online appointment schedule with your private agenda to make sure no therapy appointments can be booked when you have a private appointment? No problem ..................    
                    We are here!</p>
            </div>
            
        </div>
        
    );
}

export function Profile(){
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
            <h1> Profile</h1>
        </div>
    );
}




    export function Book(){
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
                <h1> [Book Appointmnets]</h1>
            </div>
        );
    }

        export function Chat(){
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
                    <h1> Chat Window</h1>
                </div>
            );
}
export function Task(){
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
            <h1> Activities</h1>
        </div>
    );
}
export function Slot(){
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
            <h1> Manage Slot</h1>
        </div>
    );
}
export function About(){
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
            <h1> About</h1>
        </div>
    );
}


export function N404(){
    let location = useLocation;
    console.log(location);
    return(
        <div>
            <h1>Page Not Found at !!!</h1>
        </div>
    );
}

