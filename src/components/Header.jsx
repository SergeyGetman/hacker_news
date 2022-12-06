import React from 'react';
import classes from "./style.module.css"
import CuoteHeader from "./CuoteHeader";
import BlockInform from "./BlockInform";

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerReactangle}></div>
            <h1>Header</h1>
            <CuoteHeader />
            <BlockInform />
        </div>
    );
};

export default Header;