import React from 'react';
import classes from "../App.module.css";
import {useSelector} from "react-redux";
import {listSelector, listPhone} from "../redux/selector";

const Home = () => {

    const news = useSelector(listSelector)
    const phone = useSelector(listPhone)
    console.log('this is TELEPHONE', phone)

    return (
        <div>
            <div className={classes.title}>
                <h2>WELCOME ON A HACKER FORUM...</h2>
            </div>
        </div>
    );
};

export default Home;