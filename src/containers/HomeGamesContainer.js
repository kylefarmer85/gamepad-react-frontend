import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import SlicedGamesContainer from './SlicedGamesContainer'

class HomeGamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: this.props.games,
      index: 0
    }
  }

  slicedGames = () => {
    if (this.state.index > this.state.games.length) {
      this.setState({
        index: 0
      })
    }
    return this.state.games.slice(this.state.index, this.state.index +6)
  }

  moreGames = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }

  render() {
    return (
      <div>
        <SlicedGamesContainer slicedGames={this.slicedGames()} />
        <Button onClick={this.moreGames}>Next Games</Button>
      </div>
    );
  }
}

export default HomeGamesContainer;
