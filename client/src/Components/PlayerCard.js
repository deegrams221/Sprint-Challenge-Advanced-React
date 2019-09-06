import React from 'react';

const PlayerCard = ({player}) => {
  const {name, country, searches} = player;
  return (
    <div className="player-card">
      <h2>{name}</h2>
      <div className="player-country">
        country: <em>{country}</em>
      </div>
      <div className="player-searches">
        Searches: <strong>{searches}</strong>
      </div>
    </div>
  );
};

export default PlayerCard;