import React, {useState} from 'react';
import '../App.css';
import PlayerCard from './PlayerCard';

export default function Players(props) {
  const [players, setPlayers] = useState([]);

  return(
    <div className="players">
      {players.map(player => (
        <div key={player.id}>
          <PlayerCard player={player}/>
        </div>
      ))}
    </div>
  )
}