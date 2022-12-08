import React, { useEffect } from 'react';
import classes from './App.module.css';
import Label from "./components/Label";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {getNewData, getNewsList} from "./api/request";
import {useDispatch} from "react-redux";
import {setNews, getData} from "./redux/actions";
import Home from "./components/Home"
import Time from "./components/Time";
import Titleid from "./components/Titleid";
import Header from "./components/Header";


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        getNewsList().then( list => dispatch(setNews(list)));
        getNewData().then(r => dispatch(getData(r)))
    },[])

    return (
        <div>

            <Router>
                <div className={classes.App}>
                    <ul>
                        <li className={classes.reflinks}>
                            <Link to="/" className={classes.styles_title}>H.O.M.E :</Link>
                        </li>
                        <li className={classes.reflinks}>
                            <Link to="/news" className={classes.styles_title}>N.E.W.S :</Link>
                        </li>
                        <li className={classes.reflinks}>
                            <Link to="/post" className={classes.styles_title}>P.O.S.T :</Link>
                        </li>
                        <li className={classes.reflinks}>
                            <Link to="/header" className={classes.styles_title}>VERENIA :</Link>
                        </li>
                    </ul>

                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/news' component={Label}/>
                        <Route exact path='/post' component={Titleid}/>
                        <Route exact path='/header' component={Header}/>

                    </Switch>
                </div>
                <Time/>
            </Router>

        </div>


    );
}

export default (App);
