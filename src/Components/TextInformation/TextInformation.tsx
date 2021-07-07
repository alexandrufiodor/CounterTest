import React, {ChangeEvent, useState} from 'react';

type TextInformationPropsType = {
    counter: number,
    minutes: number
}

export const TextInformation = (props: TextInformationPropsType) => {
    let message = '';
    (props.counter < 1) ? message = 'Time’s up!' : message = 'More than halfway there!';

    let showMessage = props.counter < (props.minutes * 60 / 2)
    return <>
        {showMessage && <h1>{message}</h1>}

    </>
};