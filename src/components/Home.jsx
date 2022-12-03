import React from 'react';
import classes from "../App.module.css";
import {useSelector} from "react-redux";
import {listSelector} from "../redux/selector";

const Home = () => {

    const news = useSelector(listSelector)
    return (
        <div>
            <div className={classes.title}>
                <h2>{`${news?.title}`}</h2>
            </div>
        </div>
    );
};

export default Home;