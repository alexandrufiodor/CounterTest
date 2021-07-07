import React from 'react';
import {IconButton} from "@material-ui/core";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import styled, {keyframes} from 'styled-components';
import style from './Timer.module.css'

function blinkingEffect() {
    return keyframes`
    50% {
      opacity: 0;
    }
  `;
}

const AnimatedComponent = styled.span`
  animation: ${blinkingEffect} 1s linear infinite;
`
type TimerPropsType = {
    counter: number,
    paused: boolean,
    PlayOrPause: () => void
}

export const Timer = (props: TimerPropsType) => {
    const color = (props.counter < 20 && props.counter > 0) ? "red" : "black";
    const timer = new Date(props.counter * 1000).toISOString().substr(14, 5)
    return <div className={style.Timer}>
                <span style={{color: color, fontSize: '80px'}}>
                    {(props.counter < 10 && props.counter > 0) ?
                        <AnimatedComponent> {timer}</AnimatedComponent> : timer}
                </span>
        <IconButton color="primary"   onClick={props.PlayOrPause}>
            {props.paused ? <PlayCircleOutlineIcon/> : <PauseCircleOutlineIcon/>}
        </IconButton>
    </div>

};