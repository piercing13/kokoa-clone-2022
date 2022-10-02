import React from 'react'
import Nav from './Nav'
import StatusBar from './StatusBar'
import { BsSearch ,BsFillGearFill,BsMusicNoteBeamed } from "react-icons/bs";
import pororo from '../img/pororo.JPG'
import './chat.css'
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

            <div className='chat-body body'>
                <div className='chat-item'>
                    <img src={pororo}/>
                    <div className='chat-content'>
                        <div className='chat-content-child'>
                            <p className='chat-content-sender'>
                                뽀로로
                            </p>
                            <p className='chat-content-time'>
                                21:22
                            </p>

                        </div>
                        <div className='chat-content-child'>
                            <div className='chat-content-msg'>
                                나랑 놀자
                            </div>
                            <div className='chat-content-count'>
                                <p>1</p>
                            </div>

                        </div>
                    </div>


                </div>
                
            </div>


            <Nav/>

        </div>
    </div>
  )
}

export default Chat