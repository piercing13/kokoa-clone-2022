import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';

import Welcome from './component/Welcome';
import Home from './component/Home';
import Friends from './component/Friends';
import Chat from './component/Chat';
import Search from './component/Search';
import More from './component/More';

import theme from './theme';

import {useState} from 'react';

import './App.css';

function App() {

  
  return (
    <ThemeProvider theme={theme}>
      <Router>
            <div className="App">
              

              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/welcome' element={<Welcome />}/>
                <Route path='/friends' element={<Friends />}/>
                <Route path='/chat' element={<Chat />}/>
                <Route path='/search' element={<Search />}/>
                <Route path='/more' element={<More/>}/> 
              </Routes>
              
              
            </div>

      </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
