import React from 'react';
import {arrayIdNumbers} from "../redux/reducer";
import classes from "./style.module.css"




const Titleid = () => {

    const id = Object.keys(arrayIdNumbers).sort((a,b) => a - b);

    return (
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
    );
};

export default Titleid;