import React from 'react';
import classes from "./style.module.css"
import CuoteHeader from "./CuoteHeader";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerReactangle}></div>
            <h1>Header</h1>
            <CuoteHeader />
        </div>
    );
};

export default Header;