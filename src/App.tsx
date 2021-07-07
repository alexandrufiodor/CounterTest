import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.module.css';
import {Speed} from './Components/Speeds/Speed';
import {TextInformation} from "./Components/TextInformation/TextInformation";
import {Timer} from "./Components/Timer/Timer";
import {Minutes} from "./Components/Minutes/Minutes";
import style from './App.module.css'


function App() {


    const [minutes, setMinutes] = useState(0);
    const [counter, setCounter] = useState(minutes * 60);
    const [paused, setPaused] = useState(true);
    const [value, setValue] = useState<number | string>('');
    const [speed, setSpeed] = useState(1000);


    const speedNumber = [1000, 500, 100];

    const start = () => {
        setMinutes(+value);
        setCounter(+value * 60);
        setPaused(false);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(+e.currentTarget.value)
    }

    const PlayOrPause = () => {
        setPaused(!paused);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                setCounter((counter) => (counter > 0 ? counter - 1 : 0));
            }
        }, speed);
        return () => clearInterval(interval);
    }, [paused, speed, minutes]);

    useEffect(() => {
        if (counter < 1) {
            setPaused(true);
        }
    }, [counter]);

    const changeSpeed = (speed: number) => {
        setSpeed(speed);
    };


    return (
        <div className={style.App}>
            <Minutes startTimer={start} value={value} onChangeHandler={onChangeHandler}/>
            <TextInformation counter={counter} minutes={minutes}/>
            <Timer counter={counter} paused={paused} PlayOrPause={PlayOrPause}/>
            <div>
                <Speed onClick={() => changeSpeed(speedNumber[0])} speed={'1X'} selected={speed === speedNumber[0]}/>
                <Speed onClick={() => changeSpeed(speedNumber[1])} speed={'1.5X'} selected={speed === speedNumber[1]}/>
                <Speed onClick={() => changeSpeed(speedNumber[2])} speed={'2X'} selected={speed === speedNumber[2]}/>
            </div>
        </div>
    );
}

export default App;