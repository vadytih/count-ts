import React from 'react';
import style from './Button.module.css'

type buttonProps = {
    name: string
    callback: (inc: number) => void
    inc: number
    disable: boolean

}

export const Button = React.memo((props: buttonProps) => {
    console.log('button' + props.name)
    const onClickHandler = () => {
        props.callback(props.inc)
    }
    return (
        <button
            className={style.button}
            onClick={onClickHandler}
            disabled={props.disable}
        >{props.name}</button>
    )
});
