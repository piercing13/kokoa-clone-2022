import React from 'react'
import Nav from './Nav'
import StatusBar from './StatusBar'
import './search.css'
import './nav.css'
import { BsSearch ,BsFillGearFill,BsMusicNoteBeamed } from "react-icons/bs";
function More() {
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

            <Nav/>

        </div>
        



        
    </div>
  )
}

export default More