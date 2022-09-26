import './App.css';
import Welcome from './component/Welcome';
import Home from './component/Home';
import Friends from './component/Friends';
import Chat from './component/Chat';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ThemeProvider } from '@mui/material/styles';
import StatusBar from './component/StatusBar';
import theme from './theme';
import Search from './component/Search';
import More from './component/More';
import io from 'socket.io-client';
import {useState} from 'react';


function App() {
  const socket = io.connect('http://localhost:4000');
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  
  return (
    <ThemeProvider theme={theme}>
      <Router>
            <div className="App">
              

              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/welcome' element={<Welcome username={username} setUsername={setUsername}
                socket={socket}/>}/>
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
