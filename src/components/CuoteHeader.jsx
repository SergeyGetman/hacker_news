import React from 'react';
import classes from "./style.module.css"

const CuoteHeader = () => {
    return (
        <div className={classes.informBlock}>
            <div className={classes.informBlockHeader}>
                <div className={classes.informBlockHeader__title}>
                    Quote & Customer Information
                </div>
            </div>
            
        </div>
    );
};

export default CuoteHeader;