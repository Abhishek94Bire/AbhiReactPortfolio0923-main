import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from "reactstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';


const Education = () => {
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
    <div name="Education" className="element">
          <h4 style={{marginLeft : '0px'}}>Education</h4>  
          <br />
          <div className='section-content-div'>
            <h5>B.E (Mechanical Engineering) - <span className='cgpa-span-class'>7.71 CGPA</span></h5>
            <h6 className='institute-h6-class'>Rajiv Gandhi C.O.E Chandrapur M.H</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px", fontSize:'medium'}}>OCT-2017</span></p>

            <br />
            
            <h5>Higher Secondary - <span className='cgpa-span-class'>87%</span></h5>
            <h6 className='institute-h6-class'>Board of Pune</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px", fontSize:'medium'}}>2013</span></p>

            <br />
            <h5>Secondary - <span className='cgpa-span-class'>87%</span></h5>
            <h6 className='institute-h6-class'>Board of Pune</h6>
            <p><FontAwesomeIcon icon={faCalendar} /><span style={{margin : "5px 10px", fontSize:'medium'}}>2010</span></p>



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

export default Education;
