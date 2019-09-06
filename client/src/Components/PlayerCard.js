import React from 'react';
import '../App.css';

export default function PlayerCard(props) {
  
  return (
    <div>
      {props.players.map(player => {
        return (
          <li key={player.name}>{player.name}{player.country}{player.searches}</li>
        )
      })}
    </div>
  )
}