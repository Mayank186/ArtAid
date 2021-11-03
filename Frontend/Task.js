import { NavLink, useLocation, Outlet, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import meditate from "./image/Meditating-1.jpg";
import './task.css';

export function Task() {
    return (
        <div>
            <nav className='nav-style' bg='light' expand='lg'>
                <NavLink className='home' to='/' activeStyle>Art Aid</NavLink>
                <NavLink className='nav1' to="/Profile" >Profile</NavLink>
                <NavLink className='nav2' to="/Book" activeStyle>Book</NavLink>
                <NavLink className='nav3' to="/Chat" activeStyle>Chat</NavLink>
                <NavLink className='nav4' to="/Task" activeStyle>Task</NavLink>
                <NavLink className='nav5' to="/Slot" activeStyle>Slot</NavLink>
                <NavLink className='nav6' to="/About" activeStyle>About</NavLink>


            </nav>
            <div className="float-container">
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Meditation</Card.Title>
                    <Card.Text>
                        Relax and enjoy meditation
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Painting</Card.Title>
                    <Card.Text>
                        Calm yourself by draawing and painting.
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Music</Card.Title>
                    <Card.Text>
                        Listen to some relaxing music.
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Doodling</Card.Title>
                    <Card.Text>
                        Try doodling for relaxatation.
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Photography</Card.Title>
                    <Card.Text>
                        Try clicking pictures.
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="float-child">
                <Card.Body>
                    <Card.Title style={{fontSize:"50px"}}>Clay art</Card.Title>
                    <Card.Text>
                        Clay art soothes mind. Try out.
                    </Card.Text>
                    <Card.Link href="#">Click Here</Card.Link>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
}
