import React from 'react';
import arrow from "../../img/arrow.png";
import {useState} from "react";
import {useEffect, useRef} from "react";

const FaqItem = ({item}) => {

    const [isActiveItem, setIsActiveItem] = useState(false);

    //  ЗАКРЫТИЕ FAQ-item ПРИ КЛИКЕ ВНЕ ЕЕ ОБЛАСТИ
    const sortRef = useRef()
    const outSideClick = (e) => {
        if (!e.path.includes(sortRef.current)) {
            setIsActiveItem(false);
        }
    }
    useEffect(() => {
        document.body.addEventListener('click', outSideClick)
    }, [])

    return (
        <li ref={sortRef} onClick={() => {setIsActiveItem(!isActiveItem)}}
            className={isActiveItem ? "FAQ-item active" : "FAQ-item"}
        >
            <div className="main">
                <div className="No"> {item.No} </div>
                <div className="question"> {item.title} </div>
                <div className="arrow"><img src={arrow} alt="arrow"/></div>
            </div>
            <div className="answer"> {item.body} </div>

        </li>
    );
};

export default FaqItem;