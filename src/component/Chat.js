import React from 'react'
import Nav from './Nav'
import StatusBar from './StatusBar'
import { BsSearch ,BsFillGearFill,BsMusicNoteBeamed } from "react-icons/bs";


function Chat() {
  return (
    <div className='container'>
        <div className='containerBox'>
            <StatusBar/>

            <div className='friends-header'>
                <p className='friends-title'>Chats</p>
                <div className='friends-config'>
                    <ul>
                        <li><BsSearch/></li>
                        <li><BsMusicNoteBeamed/></li>
                        <li><BsFillGearFill/></li>
                    </ul>

                </div>

            </div>


            <Nav/>

        </div>
    </div>
  )
}

export default Chat