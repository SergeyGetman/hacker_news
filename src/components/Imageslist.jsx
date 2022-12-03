import React from 'react';
import images1 from  '../images/2 20.png'
import images2 from '../images/4 7.png'
import images3 from '../images/3 58.png'
import images4 from '../images/x2/ava-7.png'
import images5 from '../images/x2/ava-6.png'
import images8 from '../images/x2/ava-8.png'
import images9 from '../images/x2/ava-9.png'
import classes from './style.module.css'
import {useSelector} from "react-redux";
import {listSelector} from "../redux/selector";


export const Imageslist = () => {
    const arraItems = [images1,images2,images3,images4,images5,images8, images9]
    const url = useSelector(listSelector)

  return (
    <div className={classes.position__images}>
      <div className={classes.images__list_avatar}>
          {arraItems.map((el, i) => {
              return (

                  <div className={classes.images__list_avatar}>
                      <div>
                          <a href={`${url?.url}`}>
                          <img className={classes.images__list} src={el}/>
                          </a>
                      </div>

                  </div>
              )
          })}
      </div>

    </div>

  );
};
