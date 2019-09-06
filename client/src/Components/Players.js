import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Players = (props) => {
  const [player, setPlayer] = useState();
 
  useEffect(() => {

       axios
        .get(`http://localhost:5000/api/players`)
        .then(response => {
          setPlayer(response.data);
          console.log("Player data: ", response.data);
        })
        .catch(error => {
          console.log(error);
        });
  },[]);

  return (
    <div>

    </div>
  );
}

export default Players;