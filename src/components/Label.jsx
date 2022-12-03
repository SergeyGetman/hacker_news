import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {Imageslist} from "./Imageslist";
import classes from "./style.module.css"

const Label = () => {

    const [state, setState] = useState({ redirect: false })

    if (state.redirect) {
        return <Redirect push to="/news" />
    }
    return (
        <div>
            <h1> NEWS </h1>
            <div className={classes.imagelist}>
                <Imageslist />
            </div>

        </div>
    );
};

export default Label;