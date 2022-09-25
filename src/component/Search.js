import React from 'react'

import './search.css'
import './nav.css'
import StatusBar from './StatusBar'
import Nav from './Nav'
import { BsSearch ,BsFillGearFill,BsMusicNoteBeamed } from "react-icons/bs";
import { AiOutlineScan ,AiOutlineContacts, AiOutlineMail, AiFillHeart} from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { IoIosArrowForward,IoIosArrowUp } from "react-icons/io";
import crong from '../img/crong.JPG'
import vbts from '../img/vbts.PNG'

function Search() {
  return (
    <div className='container'>
        <div className='containerBox'>
        <StatusBar/>

        <div className='friends-header'>
            <p className='friends-title'>Find</p>
            <div className='friends-config'>
                <ul>
                    <li><BsSearch/></li>
                    <li></li>
                    <li><BsFillGearFill/></li>
                    
                </ul>

            </div>

        </div>

        <div className='friends-body'>
            <div className='find-features'>
                <div className='find-features-item'>
                <AiOutlineScan className='item-icon'/>
                    <p>QR Code</p>
                </div>

                <div className='find-features-item'>
                    <FaRegAddressBook className='item-icon'/>
                    <p>Add by Contacts</p>
                </div>

                <div className='find-features-item'>
                    <p className='item-icon id'>ID</p>
                    <p>Add by ID</p>
                </div>

                <div className='find-features-item'>
                    <AiOutlineMail className='item-icon'/>
                    <p>Invite</p>
                </div>

            </div>
            
            <div className='find-recommended'>
                <p className='find-recommended-title subtitle'>Recommended Friends</p>
                <div className='find-recommended-content'> You have no recommended friends ㅠㅠ.</div>

            </div>

            <div className='find-openChat'>
                <div className='find-openChat-title'>
                    <p className='subtitle'>Open Chat</p>
                    <div>Go to Openchat Home <span> <IoIosArrowForward className='arrow'/></span></div>

                </div>
                
                <div className='find-openChat-body'>
                    <div className='find-openChat-items'>
                        <div className='openChat-item-title'>#BTS </div>
                        <div className='openChat-item-tag'>
                            <ul>
                                <li>#BTS</li>
                                <li>#ARMY</li>
                                <li>#FRIENDS</li>
                            </ul>

                        </div>
                        <div className='openChat-item-status'>
                        <img  src={crong}/>
                            <p>802 members | <span>Active</span></p>
                        </div>

                        <div className='openChat-item-cover'>
                            <img src={vbts}/>
                            <div> <AiFillHeart/> 326</div>

                        </div>

                    </div>

                    <div className='find-openChat-items'>
                        <div className='openChat-item-title'>#BTS </div>
                        <div className='openChat-item-tag'>
                            <ul>
                                <li>#BTS</li>
                                <li>#ARMY</li>
                                <li>#FRIENDS</li>
                            </ul>

                        </div>
                        <div className='openChat-item-status'>
                            <img  src={crong}/>
                            <p>802 members | <span>Active</span></p>
                        </div>

                        <div className='openChat-item-cover'>
                            <img src={vbts}/>
                            <div> <AiFillHeart/> 326</div>

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

export default Search