import React from 'react'
import { Link } from 'react-router-dom'
import StatusBar from './StatusBar';
import { BsSearch ,BsFillGearFill,BsMusicNoteBeamed } from "react-icons/bs";
import { MdInfoOutline } from "react-icons/md";
import { IoIosArrowForward,IoIosArrowUp } from "react-icons/io";
import pp from '../img/pp.JPG'
import channel from '../img/channel.jpg'
import './friends.css'
import Nav from './Nav';


function Friends() {
  return (
    <div className='container'>
        <div className='containerBox'>
            <StatusBar/>

            <div className='friends-header'>
                <p className='friends-title'>Friends</p>
                <div className='friends-config'>
                    <ul>
                        <li><BsSearch/></li>
                        <li><BsMusicNoteBeamed/></li>
                        <li><BsFillGearFill/></li>
                    </ul>

                </div>

            </div>

            <div className='friends-info'>
                <MdInfoOutline/>
                <span>Friend's Names Display</span>
                <IoIosArrowForward className='rightArrow'/>

            </div>

            <div className='friends-body'>
                <div className='friends-profile'>
                    <img src={pp}/>
                    <span> Riri </span>
                    

                </div>
                

                <div className='friends-channel'>
                    <div className='friends-channel-header'>
                        <p>Channel</p>
                        <IoIosArrowUp className=' arrow arrowUp'/>
                    </div>
                    <div className='friends-channel-list'>
                        <img src={channel}/>
                        <div>Channel</div>
                        <div className='friends-channel-number'>
                            <p>2</p>
                            <IoIosArrowForward className='arrow'/>
                        </div>
                    </div>

                </div>
                
            </div>

            <Nav/>
        </div>
        
    </div>
  )
}

export default Friends