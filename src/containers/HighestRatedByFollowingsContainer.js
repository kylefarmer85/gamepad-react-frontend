import React, { Component } from 'react';
import SlicedGamesContainer from './SlicedGamesContainer'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { connect } from 'react-redux'


class HighestRatedByFollowingsContainer extends Component {
  state = {
    games: [],
    index: 0,
    loading: true
  }

  componentDidMount(){
    this.fetchGames()
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
    }

    fetch(`http://localhost:3000/api/v1/games/highestratedbyfollowings`, reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        this.setState({
          games: data,
          loading: false
        })
      }
    })
  }


  slicedGames = () => {
    if (this.state.index > this.state.games.length) {
      this.setState({
        index: 0
      })
    }
    return this.state.games.slice(this.state.index, this.state.index +4)
  }

  nextGames = () => {
    this.setState(prevState => {
      return {
        index: prevState.index + 4
      }
    })
  }


  render() {
    return (
      <Container fluid className="m-2">
        <Row>
          <Col xs lg={3}>
            Top Rated by Users You Follow
          </Col >
          <Col xs lg={9}>
            
            { 
            this.state.loading ?
              null
            :
            <Row className="mr-1" style={{justifyContent: "center"}}>
              <SlicedGamesContainer slicedGames={this.slicedGames()} />

              <Button style={{fontSize: "30px", marginLeft: "1%"}} variant="dark" onClick={this.nextGames}>→</Button>
            </Row>
            }     
            
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, null) (HighestRatedByFollowingsContainer);