import React from "react";
import './card-list.styles.css';
import {Card} from "../card/card.component"

export const CardList = (props) => {
  return(
    <div> 
      <div>{props.children}</div>
      {console.log("this is card-list props",props)}
      <div className="card-list">
        { props.monsters.map(monster => (
          <Card key={monster.id} monster={monster}/>
        ))}
      </div>
    </div>
  
    );
} 