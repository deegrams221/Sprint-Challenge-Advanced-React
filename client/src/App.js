import React from 'react';
import './App.css';
import PlayerList from './Components/PlayerList';
import axios from 'axios';
import NavBar from "./Components/NavBar";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    };
    console.log("Constructor is running");
  }


// fetch player data
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => { 
        this.setState({players: response.data})
        console.log("players: ", response.data)
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App-header">
        <NavBar />
        <h1>Women's World Cup Players</h1>
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
