import React, {useCallback, useState} from 'react';
import style from './Counter.module.css'
import {Button} from "../button/Button";

export const Counter = React.memo(() => {
    console.log('Count')
    const [countValue, setCoutnValue] = useState(0)

    const setInc = useCallback((inc: number) => {
        setCoutnValue(inc)
    }, [setCoutnValue])

    const resInc = useCallback((inc: number) => {
        setCoutnValue(inc)
    },[setCoutnValue])

    const maxCount = 5

    return (
        <div className={style.counter}>
            <div className={`${style.displayCount} ${countValue >= maxCount ? style.maxCount : ''}`}>
                <span>{countValue}</span>
            </div>
            <div className={style.buttonContainer}>
                <Button name={'inc'} inc={countValue + 1} callback={setInc}
                        disable={countValue >= maxCount ? true : false}/>
                <Button name={'rest'} inc={0} callback={resInc} disable={countValue <= 0 ? true : false}/>
            </div>
        </div>
    );
});
