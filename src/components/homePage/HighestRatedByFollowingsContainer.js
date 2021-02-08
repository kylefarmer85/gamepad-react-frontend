import React, { Component } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import API from '../../API';

class HighestRatedByFollowingsContainer extends Component {
  state = {
    games: [],
    index: 0,
    loading: true
  };

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.user.id
      })
    };

    fetch(`${API}/api/v1/games/highestratedbyfollowings`, reqObj)
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          this.setState({
            games: data,
            loading: false
          });
        }
      });
  };

  slicedGames = () => {
    if (this.state.index > this.state.games.length) {
      this.setState({
        index: 0
      });
    }
    return this.state.games.slice(this.state.index, this.state.index + 4);
  };

  nextGames = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      };
    });
  };

  render() {
    return (
      <Container fluid className='mt-4 text-center'>
        <Row className='align-items-center'>
          <Col lg={3}>
            <label>Highest Rated Games by Users You Follow</label>
            <br />
            <br />
            <button
              type='button'
              className='btn-nes secondary'
              onClick={this.nextGames}
            >
              more{'>'}
            </button>
          </Col>
          <Col lg={9}>
            {this.state.loading ? null : (
              <div className='d-flex flex-wrap justify-content-around slide-in'>
                {this.state.games.length ? (
                  <SlicedGamesContainer slicedGames={this.slicedGames()} />
                ) : (
                  <p>Follow users to see their highest rated games.</p>
                )}
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  null
)(HighestRatedByFollowingsContainer);
