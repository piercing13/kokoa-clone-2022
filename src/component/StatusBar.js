import React, {useState,useEffect} from 'react'
import './welcome.css'
import WifiOffIcon from '@mui/icons-material/WifiOff';
import BatteryCharging20SharpIcon from '@mui/icons-material/BatteryCharging20Sharp';


function StatusBar() {
    var [date, setDate] = useState(new Date());
    
    useEffect(() => {

        var timer = setInterval(() => setDate(new Date()),1000);

        return function cleanUp () {
            clearInterval(timer)
        }

    })
  return (
    <div >
        <div >
        <div className='statusBar'>
                <div className='statusBar__column'>
                    <span>No service</span>
                    <WifiOffIcon/>
                </div>

                <div className='statusBar__column'>
                    <span>{date.toLocaleTimeString()}</span>
                    
                </div>

                <div className='statusBar__column'>
                    <span>11%</span>
                    <BatteryCharging20SharpIcon className='batteryIcon'/>
                </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default StatusBar