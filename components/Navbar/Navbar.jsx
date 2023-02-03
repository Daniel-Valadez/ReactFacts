import logo from './react.svg'; 
import './Navbar.css'

export default function Navbar(){
    return(
        <header>
            <nav>
                <div>
                    <img src={logo} alt='ReactJS logo'/>
                    <h3 id='imageTitle'>ReactFacts</h3> 
                </div>
                <h4>React Course - Project 1</h4>
            </nav>
        </header>
    )
}