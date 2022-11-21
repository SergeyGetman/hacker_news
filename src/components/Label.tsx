import React, {ReactChild, useCallback, useEffect, useMemo, useState} from 'react';
import classes from './style.module.css'

export interface Conditions {
  title?: string
  title2?: string;
  title3: string;
}


const conditions: Conditions = {
  title : 'this is tab checked',
  title2 : 'this is tab no checked',
   title3 : "this is new text3"
}

const Label = ({props : props}: any) => {
  let country = props.country;
  const [state, setState] = useState(false);

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
     {country.map((e : any, i : number) => {
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