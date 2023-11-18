import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills.js';
import Projects from './components/Projects.js';
import Experience from './components/Experience.js';
import Achievements from './components/Achievements.js';
import Publications from './components/Publications.js';
import Education from './components/Education.js';

import ParticlesBackground from './particles/ParticlesBackground';


function App() {
  return (
    <div className="App">
      <ParticlesBackground />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/about-me' element={< AboutMe />} />
        <Route path='/skills' element={< Skills />} />
        <Route path='/projects' element={< Projects />} />
        <Route path='/experience' element={< Experience />} />
        <Route path='/achievements' element={< Achievements />} />
        <Route path='/publications' element={< Publications />} />
        <Route path='/education' element={< Education />} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
