import React from 'react';
import classes from "./style.module.css"
import {MOCK_DATA} from "../redux/reducer";

const CuoteHeader = () => {

    return (
        <div className={classes.informBlock}>

            <div className={classes.informBlockHeader}>
                <div className={classes.informBlockHeader__title}>
                    Quote & Customer Information
                </div>
            </div>

            <div className={classes.inform__block}>
                {[MOCK_DATA].map((el, idx) => {
                    return (
                        <div className={classes.name__title} key={idx}>{el.mockdataTitle.map((e,i,) => {
                            return (
                                <div>{e[i]}</div>
                            )
                        } )}</div>
                    )
                })}
            </div>
            
        </div>
    );
};

export default CuoteHeader;