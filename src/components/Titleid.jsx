import React from 'react';
import {arrayIdNumbers} from "../redux/reducer";
import classes from "./style.module.css"




const Titleid = () => {

    const id = Object.keys(arrayIdNumbers).sort((a,b) => a - b);

    return (
        <div className={classes.tablestyle}>


        <table className={classes.tablenews}>
            {arrayIdNumbers.map((elem, idx) => {
                return (
                    <td>
                        {elem.name}
                        <tr>
                            {id[idx] + " : " + elem.nickname}
                        </tr>
                    </td>
                )
            })}
        </table>
        </div>
    );
};

export default Titleid;