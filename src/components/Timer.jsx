import React, {useEffect, useState} from 'react';
import classes from './style.module.css'


const Timer = () => {
  const timerNow = () => {
  return new Date().toLocaleString()
  }
  const [state, setState] = useState(timerNow);

  useEffect(() => {
    const timer = setTimeout( () => {
      setState(timerNow())
    },1000)

    return clearTimeout(state)
  })
  return (
    <div className={classes.timezone}>
      <h2>now is {timerNow()}</h2>
    </div>
  );
};

export default Timer;