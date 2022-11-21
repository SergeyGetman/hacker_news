import React from 'react';
import images1 from  '../images/2 20.png'
import images2 from '../images/4 7.png'
import images3 from '../images/3 58.png'
import images4 from '../images/x2/ava-7.png'
import images5 from '../images/x2/ava-6.png'
import images8 from '../images/x2/ava-8.png'
import images9 from '../images/x2/ava-9.png'

import classes from './style.module.css'


const imagesArray = [images1, images2, images3,images4, images5 ]

export const Imageslist = () => {
  return (
    <div className={classes.position__images}>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images3} />
        </div>
      </div>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images4} />
        </div>
      </div>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images5} />
        </div>
      </div>

      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images2} />
        </div>
      </div>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images1} />
        </div>
      </div>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images8} />
        </div>
      </div>
      <div className={classes.images__list_avatar}>
        <div >
          <img className={classes.images__list} src={images9} />
        </div>
      </div>

    </div>

  );
};
