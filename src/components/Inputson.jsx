import React, {useRef, useEffect, useState} from 'react';


// const ref = useRef(null);
// useEffect(() => {
//   ref?.current?.focus?.();
// }, [ref]);
// <input type="text" placeholder="search in project" ref={ref}/>
export const Foo = () => {

  const [state, setState] = useState(0)



  return (
    <h1>{`Привет, меня зовут `}</h1>,

      <h1>{state}</h1>,

      <div style={{color : "white", fontSize:'30px'}}>qwe</div>,
      <button>Push me</button>
  )
};


