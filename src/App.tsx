import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Foo} from './components/Inputson'
import  classes from './App.module.css';
import Label from "./components/Label";
import Timer from "./components/Timer";
import Button from "./components/Button";
import { useHistory, useLocation } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Imageslist} from "./components/Imageslist";
import backGroundImage from './images/1184.png'
import Testregisrer from "./components/Testregisrer";



function App({props : props}: any) {
  
  const history = useHistory()
  const location = useLocation();

  const goPath = () => {
    history.goBack('/foo')
  }

  const [state, setState] = useState(0)
  const [statemin, setStatemin] = useState(0)

  const plusOne = () => {
    setState(state + 1)
  }
  const minusOne = () => {
    setStatemin(statemin - 1)
  }

  return (
    <Router>
    <div className={classes.App}>
      <h1>- Pro 100 PortFoLio DeVeLoPeR -</h1>
      <Button/>
              <h1>{state}</h1>
              <h1>{statemin}</h1>
            <button onClick={goPath}>Push plus One</button>
            <button onClick={minusOne}>Push minus One</button>


          <ul>
            <li className={classes.reflinks}>
              <Link to="/" className={classes.styles_title}>H.O.M.E :</Link>
            </li>
            <li className={classes.reflinks}>
              <Link to="/timer"className={classes.styles_title}>T.I.M.E.R :</Link>
            </li>
            <li className={classes.reflinks}>
              <Link to="/foo" className={classes.styles_title}> C.I.T.Y :</Link>
            </li>
            <li className={classes.reflinks}>
              <Link to="/images" className={classes.styles_title}>I.M.A.G.E.S :</Link>
            </li>
            <li className={classes.reflinks}>
              <Link to="/registed" className={classes.styles_title}>RegistratioN</Link>
            </li>
          </ul>
          <hr />

          <Switch>
            <Route exact path="/">
              <Foo />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
            <Route path="/foo">
              <Label props={props} />
            </Route>
            <Route path="/images">
              <Imageslist style={
                {
                  height : 100,
                  width : 250,
                  display : 'flex',
                  marginLeft: 200,
                  marginTop: 20,
                  backgroundImage : `url(${backGroundImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "white",
                  padding: "1rem"
                }
              }/>
            </Route>
            <Route path="/registed">
              <Testregisrer />
            </Route>
          </Switch>
            </div>
        </Router>


  );
}

export default (App);
