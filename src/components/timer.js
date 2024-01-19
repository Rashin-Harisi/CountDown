import React,{useState,useEffect} from 'react';
import './timer.css';



const Timer = ({onTimerFinish}) => {
    const [start,setStart]=useState(false);
    const [timerFinished,setTimerFinished]=useState(false);
    const [count,setCount]=useState(0);
    

    const [hours1,setHours1]=useState(1);
    const [hours2,setHours2]=useState(0);

    const [minutes1,setMinutes1]=useState(0);
    const [minutes2,setMinutes2]=useState(2);

    const [seconds1,setSeconds1]=useState(4);
    const [seconds2,setSeconds2]=useState(2);

    useEffect(()=>{
        setStart(true) 
    },[]);
    //console.log('timerFinished',timerFinished)

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
            if(seconds1>0){
                setSeconds1(seconds1-1);
                return
            }
            if (seconds2>0){
                setSeconds2(seconds2-1);
                setSeconds1(9);
                return
            }
            
            if(minutes1>0){
                    setMinutes1(minutes1-1);
                    setSeconds1(9);
                    setSeconds2(5);
                    return
            }  
            
            if(minutes2>0){
                setMinutes2(minutes2-1);
                setMinutes1(9);
                setSeconds1(9);
                setSeconds2(5);
                return
            }  
            
            if (hours1>0){
                setHours1(hours1-1);
                setMinutes2(5)
                setMinutes1(9);
                setSeconds1(9);
                setSeconds2(5);
                return
            }
            if(hours2>0){
                setHours2(hours2-1)
                setHours1(9);
                setMinutes2(5)
                setMinutes1(9);
                setSeconds1(9);
                setSeconds2(5);
                return
            }
            setTimerFinished(true);
            //console.log('timerFinished',timerFinished)
        },1000)
    },[start,count])



    return (
        <div className="Timer">

            <p id='designer'>COUNTDOWN BY RASHIN HARISI</p>
            <div className='timer'>
                <div className='hours'>
                    <p className='title'>Hours</p>
                    <div className='container'>
                        <input type='button' value={hours2} />
                        <input type='button' value={hours1} />
                    </div>
                </div>
                <div className='minutes'>
                    <p className='title'>Minutes</p>
                    <div className='container'>
                        <input type='button' value={minutes2} />
                        <input type='button' value={minutes1} />
                    </div>
                </div>
                <div className='seconds'>
                    <p className='title'>Seconds</p>
                    <div className='container'>
                        <input type='button' value={seconds2} />
                        <input type='button' value={seconds1} />
                    </div>
                </div>
            </div>
            {timerFinished && onTimerFinish()}
            
            
        </div>
    )
}

export default Timer 