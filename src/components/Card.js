import React from "react";



export default function Card (props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props.item.location)
    return (
        <div className="cards">
            <div className="card">
            {badgeText &&  <div className="soldout">{badgeText}</div>} 
            <img className="cardpic" src={props.item.coverImg} />
           
            <div className="rate">
           
            <img className="star" src="/Star.png" /> 
            <span>{props.item.stats.rating} </span> 
            <span>({props.item.stats.reviewCount})</span>
            <span>{props.item.location}</span>
           
            </div>
            <div className="carddesc">
                <p>{props.item.title}</p>
                <p> <span className="bold">From $ {props.item.price} </span> / person </p>
                </div>
            </div>
            
        </div>
        
    )


}
