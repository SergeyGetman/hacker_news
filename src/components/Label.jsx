import React, {useCallback, useEffect, useMemo, useState} from 'react';
import classes from './style.module.css'


const conditions = {
  title : 'this is tab checked',
  title2 : 'this is tab no checked',
   title3 : "this is new text3"
}

const Label = ({props : props}) => {
  let country = props.country;
  const [state, setState] = useState(false);
    console.log('this is state', state)

   useCallback(() => {
     setState(true)
   },[state])

  return (
    <div className={classes.pending}>
      <form>
        <label>
            -ИМЯ-
          <input type="text" name="name" />
          -ПРОВЕРИТЬ-
          <input type="checkbox" onChange={(e) => setState(e.target.checked)}/>
        </label>
      </form>
      <div>
        <ul>
     {country.map((e, i) => {
      return  <li key={i}>{e}</li>
     })}
        </ul>
      </div>
      <div className={classes.checkbox}>
        { state === true ? conditions.title + " " + conditions.title3 : conditions.title2}
      </div>
    </div>
  );
};

export default Label;