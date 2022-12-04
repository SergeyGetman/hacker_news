import React from 'react';
import classes from "../App.module.css";
import {useSelector} from "react-redux";
import {listSelector} from "../redux/selector";

const Home = () => {

    const news = useSelector(listSelector)
    console.log('this is NEWS', news)
    return (
        <div>
            <div className={classes.title}>
                <h2>WELCOME ON A HACKER FORUM...</h2>
            </div>
        </div>
    );
};

export default Home;