import React from "react";
import "./card.styles.css"

export const Card = (props) => (
  <div className="card-container">
    {/* {console.log("this is card props",props)}  */}
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
    {console.log(props.monster.name.toLowerCase())}
  </div>
)