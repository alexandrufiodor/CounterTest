import React from 'react';
import {Button} from "@material-ui/core";
import style from './Speed.module.css'

type SpeedPropsType = {
    onClick: () => void;
    speed: string;
    selected: boolean;
}

export const Speed = (props: SpeedPropsType) => {
    const backgroundColor = props.selected ? "grey" : "white";
    const color = props.selected ? "white" : "black";

    return <>
        <Button  variant="outlined" onClick={props.onClick} style={{color: color, backgroundColor: backgroundColor}} className={style.SpeedButton}>
            {props.speed}
        </Button>
    </>
};