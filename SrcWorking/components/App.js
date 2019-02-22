import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "le",
        score: 0,
        id: 1
      },
      {
        name: "stuart",
        score: 0,
        id: 2
      },
      {
        name: "dan",
        score: 0,
        id: 3
      },
      {
        name: "dean",
        score: 0,
        id: 4
      }
    ]
  };

  prevPlayerID = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: prevState.players[index].score += delta
    }));
    // console.log('index:' + index, 'delta:' + delta)
  }

  handleAddPlayer = (name) => {
    console.log(...this.state.players);
    this.setState( prevState => {
      return (
        {players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.prevPlayerID +=1
        }
        
      ]})
    })
  }

  handleRemovePlayer = (id) => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }



  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
          totalPlayers={this.state.players.length}
        />

        {this.state.players.map((player, index) =>
          <Player
            name={player.name}
            index={index}
            id={player.id}
            score={player.score}
            changeScore={this.handleScoreChange}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
