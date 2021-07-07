import React, {ChangeEvent} from 'react';
import {Button, TextField} from "@material-ui/core";
import style from './Minutes.module.css'


type MinutesPropsType = {
    startTimer: () => void,
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    value: string | number
}

export const Minutes = (props: MinutesPropsType) => {
    return <div className={style.Minutes}>
        <span>Countdown:</span>
        <TextField variant="outlined"
                   className={style.TextInput}
                   value={props.value}
                   onChange={props.onChangeHandler}
                   placeholder="(Min)"
                   style={{
                       width: '100px',
                       marginLeft: '15px',
                       marginRight: '15px',
                   }}
        />
        <Button variant="contained" color="primary" onClick={props.startTimer}>
            Start
        </Button>
    </div>
};