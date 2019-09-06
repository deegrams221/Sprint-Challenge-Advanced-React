import React from 'react';
import './App.css';
import Players from './Components/Players';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
    };
    console.log("Constructor is running");
  }


// fetch player data
  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(response => { 
        this.setState({players: response.data})
        console.log("players", this.state.players);
      })
      .catch(error => console.log(error));
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Women's World Cup Players</h1>
        </header>
        <div>
          <Players data={this.state.players} />
        </div>
      </div>
    );
  }
}

export default App;
