import React from 'react';
import '../App.css';

export default function PlayerList(props) {
  return (
    <div className="player-list">
      {/* <ul>
        {props.players.map(player => {
          return(
            <li key={player.name}>Player: {props.name}, Searches: {props.searches}</li>
          )
        })}
      </ul> */}
    </div>
  );
}