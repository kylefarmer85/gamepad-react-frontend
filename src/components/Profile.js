import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteGame from './FavoriteGame'
import Loading from './Loading'
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
  constructor(props) {
    super(props)
    this.state = {
      userId: this.props.match.params.id,
      user: {},
      loading: true
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.state.userId}`)
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        this.props.history.push('/')
        alert(user.error)
      
      } else {
        this.setState({
          user: user,
          loading: false
        })
      }
    })
  }
      
  


  renderGames = () => {
    return this.state.user.games.map(game => {
      return <FavoriteGame {...game} key={game.id} />
    })
  }

  renderReviews = () => {
    return this.state.user.reviews.map(review => {
      return <Review {...review} key={review.id} />
    })
  }

  render() { 
    return (
      this.state.loading ?
      <Loading />
      :
     <div style={{textAlign: "center"}}>
       {

       }
        <Container className="mt-5" style={{outline: "solid"}} fluid="lg">
          <Row style={{outline: "solid"}}>
            <Col>
              <h1>{this.state.user.username}</h1>
            </Col>
            <Col>
              <h1>Favorite Games</h1>
            </Col>
          </Row>
          <Row>
          <Col style={{outline: "solid"}} className ="p-3">
            <img style={imgStyle} src={this.state.user.pic} alt="profile"/>
            {
              this.props.user ?
                this.props.user.id === this.state.user.id ?
                <Button as={Link} to={`/users/${this.props.user.id}/edit`}>Edit Info</Button>
                :
                null
              :
              null
            } 
          </Col>
          <Col className ="p-3">
            <Row>
              {this.renderGames()}
            </Row>
          </Col>
        </Row>
        <Col>
            <h3>Reviews</h3>
          {this.renderReviews()}  
        </Col>
      </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps, null) (Profile);