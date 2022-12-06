import React from 'react';
import classes from "./style.module.css"
import {MOCK_DATA} from "../redux/reducer";

const BlockInform = () => {


    return (
        <div className={classes.blockInform}>
            <div className={classes.blockInform__text}>
                {[MOCK_DATA].map((el, idx) => {
                    return (
                        <div key={idx}>{`${el.number} ${el.customer} ${el.date}`}</div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default BlockInform;