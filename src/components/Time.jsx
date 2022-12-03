import React, {useEffect, useState} from 'react';

const Time = () => {

    const [time, setTime] = useState("")

    useEffect(() => {
        setTime((h<10?"0"+h:h)+" ч. "+(m<10?"0"+m:m)+" мин. ")
    })

    let sec = 1728 ;
    let  h = sec/3600 ^ 0 ;
    let  m = (sec-h*3600)/60 ^ 0 ;
    let  s = sec-h*3600-m*60 ;

    return (
        <div style={{color: "yellow", right: "0", top: "0", position: "absolute"}}>
            {time}
        </div>
    );
};

export default Time;