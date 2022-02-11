import React from 'react';
import cl from './style.module.css'

const Button = () => {
  return (
    <div>
      <button className={cl.buttons} type='button'>ADD</button>
    </div>
  );
};

export default Button;