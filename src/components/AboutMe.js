import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { useNavigate } from 'react-router-dom';


const AboutMe = () => {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

   

  return (
    <div className='component-main-div'>
        <Navbar  expand="md" className='Navbar-class' fixed='top' style={{whiteSpace : 'nowrap'}}>
          <div style={{textAlign : 'left', marginRight : 'auto', width : 'fit-content'}}>
            <Nav className="mr-auto" navbar style={{textAlign : "left"}}>
                <NavItem>
                <span className='navbar-name'>Abhishek Bire</span>
                </NavItem>
            </Nav>
          </div>


          <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={isOpen} navbar style={{textAlign : 'right', marginLeft : 'auto', width : 'fit-content'}}>
                <Nav className='ml-auto' navbar style={{ textAlign : "right", marginLeft : "auto"}}>
                    <NavItem>
                        <button className='navbar-button-class' onClick={() => navigate('/')}>Home</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/about-me')}>About Me</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/skills')}>Skills</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/projects')}>Projects</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/experience')}>Experience</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/achievements')}>Achievements</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/publications')}>Publications</button>
                    </NavItem>
                    <NavItem>
                        <button className='navbar-button-class' onClick={()=>navigate('/education')}>Education</button>
                    </NavItem>
                </Nav>
            </Collapse>
    </Navbar>


    <br />
    <br />
    <br />
    <br />
    <br />

    <div className='portfolio-body-div'>
        <div name="About Me" id='About-Me' className="element">
          <h4>About Me</h4>
          <br />
          <div className='section-content-div'>
                I am a B.E candidate in Mechanical  Engineering with a strong passion for technology and software development. Alongside my academic journey, I’ve developed expertise as a Full-Stack Developer, proficient in MERN-FSD. My interdisciplinary background enables me to tackle complex challenges and drive innovation in engineering and software domains. Passionate, adaptable, and eager to contribute to impactful projects.
                <hr />
          </div>
        </div>
    </div>

        <br />
        <br />
        <br />
        <br />

    </div>
  )
}

export default AboutMe;
