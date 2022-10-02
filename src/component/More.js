import React from 'react'
import Nav from './Nav'
import StatusBar from './StatusBar'
import './more.css'
import './nav.css'
import './friends.css'
import pp from '../img/pp.JPG'
import {BsEmojiSmile, BsSearch ,BsFillGearFill,BsMusicNoteBeamed, BsCalendarCheck } from "react-icons/bs";
import { BiMessageAltDetail,BiBrushAlt } from "react-icons/bi";
import { FiHardDrive } from "react-icons/fi";
import { MdOutlineAccountTree } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";

function More() {
  return (
    <div className='container'>
        <div className='containerBox'>
            <StatusBar/>

            <div className='friends-header'>
                <p className='friends-title'>More</p>
                <div className='friends-config'>
                    <ul>
                        <li><BsSearch/></li>
                        <li></li>
                        <li><BsFillGearFill/></li>
                        
                    </ul>

                </div>

            </div>

            <div className='more-body body'>
                <div className='friends-profile'>
                    <img src={pp}/>
                    <div className='more-info'>
                    <span> Riri </span>
                    <p>+010-6723-1774</p>
                    </div>

                    <BiMessageAltDetail className='icon'/>
                                            
                </div>

                <div className='more-features'>
                    <div className='feature-item'>
                        <BsCalendarCheck className='icon-2'/>
                        <p>Calendar</p>
                    </div>

                    <div className='feature-item'>
                        <FiHardDrive className='icon-2'/>
                        <p>Talk Drive</p>
                    </div>
                    <div className='feature-item'>
                        <BsEmojiSmile className='icon-2'/>
                        <p>Emoticons</p>
                    </div>
                    <div className='feature-item'>
                        <BiBrushAlt className='icon-2'/>
                        <p>Theme</p>
                    </div>
                    <div className='feature-item'>
                        <MdOutlineAccountTree className='icon-2'/>
                        <p>Account</p>
                    </div>
                    <div className='feature-item'>
                        <IoChatbubblesOutline className='icon-2'/>
                        <p>Open Chat</p>
                    </div>


                </div>

            </div>


            <Nav/>

        </div>
        



        
    </div>
  )
}

export default More