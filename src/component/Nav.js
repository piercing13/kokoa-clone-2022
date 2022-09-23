import React from 'react'
import './friends.css'
import { Link } from 'react-router-dom'
import PeopleAltSharpIcon from '@mui/icons-material/PeopleAltSharp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Nav() {
  return (
    <div>
        <nav>
                <ul>
                    <li > <Link to='/friends'> <PeopleAltSharpIcon className='navIcon'/> </Link></li>
                    <li> <Link to='/chat'> <ChatBubbleIcon className='navIcon'/> </Link></li>
                    <li> <Link to='/search'> <SearchIcon className='navIcon'/> </Link></li>
                    <li> <Link to='/more'> <MoreHorizIcon className='navIcon'/> </Link></li>
                </ul>
            </nav>
    </div>
  )
}

export default Nav