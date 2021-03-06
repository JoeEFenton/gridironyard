import React, { Component } from 'react';
import { connect } from 'react-redux';
import FilterPlayers from '../components/FilterPlayers';
import OffPlayerTable from '../components/OffPlayerTable';
import DefPlayerTable from '../components/DefPlayerTable';
import KickPlayerTable from '../components/KickPlayerTable';
import {sortPlayers} from '../actions/actions';

class Players extends Component {

  handleClick = (key) => {
    const { sortPlayers, sortPlayersBy, sortAscending} = this.props;
    console.log(key);
    if (key !== sortPlayersBy) {
      sortPlayers(key, true);
    } else {
      sortPlayers(key, !sortAscending);
    }
  }

  showPlayers = () => {
    const {players, currentPlayerFilter} = this.props;
    if (currentPlayerFilter === 'DEF') {
      return <DefPlayerTable players={players} onClick={this.handleClick} />
    } else if (currentPlayerFilter === 'K') {
      return <KickPlayerTable players={players} onClick={this.handleClick} />
    } else {
      return <OffPlayerTable players={players} onClick={this.handleClick}/>
    }
  }

  render() {
    return (
      <div>
        <FilterPlayers />
        <h3>Players:</h3>
        {this.showPlayers()}
      </div>
    );
  }

}

// use mapStateToProps to filter/sort player list
const mapStateToProps = function(state) {
  let players;
  const flexPositions = ['WR', 'RB', 'TE'];
  const offensePositions = ['QB', 'RB', 'WR', 'TE'];
  const {currentPlayerFilter, sortPlayersBy, sortAscending} = state.playerReducer;
  switch (currentPlayerFilter) {
    case 'QB':
    case 'RB':
    case 'WR':
    case 'TE':
    case 'K':
    case 'DEF':
      players = state.playerReducer.players.filter(player => player.position === currentPlayerFilter);
      break;
    case 'FLEX':
      players = state.playerReducer.players.filter(player => flexPositions.includes(player.position));
      break;
    case 'OFFENSE':
      players = state.playerReducer.players.filter(player => offensePositions.includes(player.position));
      break;
    default:
      players = state.playerReducer.players.map(player => player);
  }

  return {players, currentPlayerFilter, sortPlayersBy, sortAscending};
}



const mapDispatchToProps = function(dispatch) {
  return {
    sortPlayers: function(sortBy, sortAscending) {
      dispatch(sortPlayers(sortBy, sortAscending));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Players);
