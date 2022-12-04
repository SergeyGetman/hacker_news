import React from 'react';
import classes from "./style.module.css"
import {useSelector} from "react-redux";
import {listSelector} from "../redux/selector";


const Titleid = () => {
    const data = useSelector(listSelector)
        // sort by time stamp
        .sort((a,b) => a.time - b.time)
        .map(item => {
            item.date = new Date(item.time * 1000).toLocaleDateString();
            return item;
        });

    return (
        <div className={classes.tablestyle}>
            <table className={classes.newTable}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Author</th>
                    <th>Publish Date</th>
                </tr>
                </thead>

                <tbody>
                {data.map(({by, title, date, score, id, url}) => {
                    return (
                        <tr key={id}>
                            <td><a href={url}>{title}</a></td>
                            <td>{score}</td>
                            <td>{by}</td>
                            <td>{date}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Titleid;