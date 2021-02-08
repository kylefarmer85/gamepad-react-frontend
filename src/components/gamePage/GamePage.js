import React, { Component } from 'react';
import Loading from '../reusable/Loading';
import GameShowContainer from './GameShowContainer';
import API from '../../API';

class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      gameObj: {},
      screenshots: {},
      gameApiId: this.props.match.params.id
    };
  }

  componentDidMount() {
    fetch(`${API}/api/v1/games/${this.state.gameApiId}`)
      .then(resp => resp.json())
      .then(game => {
        if (game.error) {
          this.props.history.push('/home');
          alert(game.error);
        } else {
          this.setState({
            gameObj: game.game_obj,
            screenshots: game.game_ss.results,
            loading: false
          });
        }
      });
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div style={{ marginTop: '7%' }}>
            <Loading />
          </div>
        ) : (
          <GameShowContainer
            game={this.state.gameObj}
            screenshots={this.state.screenshots}
          />
        )}
      </div>
    );
  }
}

export default GamePage;
