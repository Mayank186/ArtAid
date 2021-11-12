import React,{useState} from "react";
import { NavLink, nav } from "react-router-dom";
import { Home, Book, Chat, Task, Slot, About } from "./pages";
import logo from './Chat/chat.png';
import './Chat/style.css';
import './navbar.css';


export function Chats(props) {
   
    var  html=` <nav>
     <h1>Chat Here</h1>
 </nav>
 <div class="container">
     <div class="thercon">Therapist: Hello!</div>
     <div class="pat">Bella: How are you?</div>
     <div class="thercon">Therapist: Hello!</div>
     <div class="pat">Bella: How are you?</div>
     <div class="thercon">Therapist: Hello!</div>
     <div class="pat">Bella: How are you?</div>
     <div class="thercon">Therapist: Hello!</div>
 </div> 
 <div class="send">
     <form action="#" id="send-container">
         <input type="text" name="messageInp" id="messageInp"/>
         <button class="btn" type="submit">Send</button>
     </form>
 </div>`
    
    return (
        <div>
            <nav className='nav-style' bg='light' expand='lg'>
                <NavLink className='home' to='/' >Art Aid</NavLink>
                <NavLink className='nav1' to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" >Book</NavLink>
                <NavLink className='nav3' to="/Chat" >Chat</NavLink>
                <NavLink className='nav4' to="/Task" >Task</NavLink>
                <NavLink className='nav5' to="/Slot" >Slot</NavLink>
                <NavLink className='nav6' to="/About" >About</NavLink>
            </nav>

           
          <div dangerouslySetInnerHTML={{__html:html}}></div>
        
    </div>
    )
}



