import React, {useCallback, useEffect, useState} from 'react';
import cl from './style.module.css'
import Registration from "./Registration";



const Button = () => {
    const [state, setState] = useState(false)
    if(state){
        return <Registration />
    }
  return (
    <div>
      <button className={cl.buttons} type='button' onClick={() => setState(!state)} >sign in</button>
    </div>
  );
};

export default Button;