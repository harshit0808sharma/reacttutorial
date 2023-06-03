import React from "react";
//import ReactDOM from "react-dom";
import './Card.css'
function Card(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="random" className="card_img" />
                    <div className="card_info" >
                        <span className="card_category">{props.title}</span>
                        <h3 className="card_title">{props.sname}</h3>
                        <a href={props.link}>
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}


export default Card;
