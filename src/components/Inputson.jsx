import React, { useRef, useEffect } from 'react';

export const Foo = () => {

  const ref = useRef(null);
  useEffect(() => {
    ref?.current?.focus?.();
  }, [ref]);

  return (
    <h1>{`Привет, меня зовут `}</h1>,
    <input type="text" placeholder="search in project" ref={ref}/>
  )
};

