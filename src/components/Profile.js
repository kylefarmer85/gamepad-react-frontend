import React, { Component } from 'react';
import { connect } from 'react-redux'
import { currentUser } from '../actions/user'
import { Link } from 'react-router-dom'
import FavoriteGame from './FavoriteGame'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Review from './Review'



const imgStyle = {
  width: "50%",
  margin: "25%",
  borderRadius: "25%"
}

class Profile extends Component {

  renderGames = () => {
    return this.props.games.map(game => {
      return <FavoriteGame {...game} key={game.id} />
    })
  }



  renderReviews = () => {
    return this.props.reviews.map(review => {
      return <Review {...review} key={review.id} />
    })
  }

  render() { 
    return (
     <div style={{textAlign: "center"}} >

        <Container className="mt-5" style={{outline: "solid"}} fluid="lg">
          <Row style={{outline: "solid"}}>
            <Col>
              <h1>{this.props.user.username}</h1>
            </Col>
            <Col>
              <h1>Favorite Games</h1>
            </Col>
          </Row>
          <Row>
          <Col style={{outline: "solid"}} className ="p-3">
            <img style={imgStyle} src={this.props.user.pic} alt="profile"/>
            <Button as={Link} to={`/user/${this.props.user.id}/edit`}>Edit Info</Button>
          </Col>
          <Col className ="p-3">
            <Row>
              {this.renderGames()}
            </Row>
          </Col>
        </Row>
        <Col>
          {this.renderReviews()}  
        </Col>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    games: state.games,
    reviews: state.reviews
  }
}


export default connect(mapStateToProps, { currentUser }) (Profile);