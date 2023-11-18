import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse, Button } from "reactstrap";

import cssLogo from '../logos/cssLogo.svg';
import javascriptLogo from '../logos/javascriptLogo.svg';
import mongodbLogo from '../logos/mongodbLogo.svg';

import reactLogo from '../logos/reactLogo.svg';
import expressjsLogo from '../logos/expressjsLogo.svg';
import nodejsLogo from '../logos/nodejsLogo.svg';

import { useNavigate } from 'react-router-dom';



const Projects = () => {
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
    <div name="Projects" className="element">
          <h4>Projects</h4>  
          <br />
          <div className='section-content-div'>
            <dl>
                <dt>Customer Relationship Management (CRM) Application <a href="https://sufiyan-cv-crm-application-fsd.netlify.app" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm' className='projects-button-class'>Take a look</Button></a></dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                    <p>This MERN full-stack web application provides different levels of access to the various categories of users, such as Admin, Manager, Employee with rights, and Employee without rights. This application possesses complete authentication and authorization. Activates the registered user by emailing an account activation link. Resets the password by emailing a password reset link to the activated user.</p> 

                    <p>An admin is authorized to perform CRUD operations on users, leads, and service requests. A manager is authorized to perform the create and read operations on users and CRUD operations on leads and service requests. An employee with rights is authorized to perform CRUD operations on leads and service requests. An employee can just read the leads and service request data.</p>

                    <p>Whenever a new lead or service request is created, this application triggers an email to the admins and managers.</p>

                    <br />
                    <div className='tech-stack-div'>
                        <h6>Tech Stack</h6>
                        <div>
                            <img src={mongodbLogo} alt='MongoDB' className='small-image-class'/>
                            <img src={expressjsLogo} alt='Express.js' className='small-image-class'/>
                            <img src={reactLogo} alt='React' className='small-image-class'/>
                            <img src={nodejsLogo} alt='Node.js' className='small-image-class'/>
                            <img src={javascriptLogo} alt='JavaScript' className='small-image-class'/>
                            <img src={cssLogo} alt='CSS' className='small-image-class'/>
                        </div>
                    </div>

                    <br />
                    <div><a href="https://github.com/Abhishek94Bire/CvCrmAppFullstack-main" target='_blank' rel='noopener noreferrer' ><Button color='success' className='projects-button-class'>Source code</Button></a></div>
                    <hr />
                </dd>

                <br />

                <dt>Zen Student Dashboard Application <a href="https://sufiyan-cv-zen-dashboard-app-fsd.netlify.app" target='_blank' rel='noopener noreferrer' className='check-link-a-class'><Button color='warning' size='sm' className='projects-button-class'>Take a look</Button></a></dt>
                <br />
                <dd style={{marginLeft : "20px"}}>
                    <p>This MERN full-stack web application is a demo application of the Zen class student dashboard. In this application, a student can register, attend the classes, and watch the recordings of the attended classes. The student can submit the source code links for daily tasks, webcodes, capstone, portfolio, etc. This application possesses complete authentication. Activates the registered student by emailing an account activation link. Resets the password by emailing a password reset link to the activated student.</p> 

                    <br />
                    <div className='tech-stack-div'>
                        <h6>Tech Stack</h6>
                        <div>
                            <img src={mongodbLogo} alt='MongoDB' className='small-image-class'/>
                            <img src={expressjsLogo} alt='Express.js' className='small-image-class'/>
                            <img src={reactLogo} alt='React' className='small-image-class'/>
                            <img src={nodejsLogo} alt='Node.js' className='small-image-class'/>
                            <img src={javascriptLogo} alt='JavaScript' className='small-image-class'/>
                            <img src={cssLogo} alt='CSS' className='small-image-class'/>
                        </div>
                    </div>
                    <br />
                    
                    <div><a href="https://github.com/SkMdSufiyan/SufiyanCvZenDashboardAppFullstack.git" target='_blank' rel='noopener noreferrer'><Button color='success' className='projects-button-class'>Source code</Button></a></div>

                    <hr />
                </dd>
            
            </dl>
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

export default Projects;
