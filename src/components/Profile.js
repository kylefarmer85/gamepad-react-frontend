import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteGame from './FavoriteGame'
import Loading from './Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Review from './Review'


const Profile = (props) => {

  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${props.match.params.id}`)
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        this.props.history.push('/')
        alert(user.error)
      
      } else {
        setUser(user)
        setLoading(false)
      }
    })
  }, [props.match.params.id]);


  const renderGames = () => {
    return user.games.map(game => {
      return <FavoriteGame {...game} key={game.id} />
    })
  }

  const handleDelete = (id) => {
    const updatedReviews = user.reviews.filter(r => {
      return r.id !== id
    })
    setUser(prevState => {
      return {
      ...prevState,
        reviews: updatedReviews
      }
    })
  }

  const renderReviews = () => {
    return user.reviews.map(review => {
      return <Review {...review} key={review.id} handleDelete={handleDelete} />
    })
  }



  return (
    <div>
      {
      loading ?
        <Loading />
      :
        <div style={{textAlign: "center"}}>

          <Container className="mt-5" fluid>
            <Row>
              <Col>
                <h1>{user.username}</h1>
              </Col>
              <Col>
                <h1>Favorite Games</h1>
              </Col>
            </Row>
            <Row>
              <Col className ="p-3">
                <img style={imgStyle} src={user.pic} alt="profile"/>
                {
                  props.user ?
                    props.user.id === user.id ?
                    <Button as={Link} to={`/users/${props.user.id}/edit`}>Edit Info</Button>
                    :
                    null
                  :
                    null
                } 
              </Col>
              <Col className ="p-3">
                <Row>
                 {renderGames()}
                </Row>
              </Col>
            </Row>
            <Col>
              <h3>Reviews</h3>
              {renderReviews()}  
            </Col>
          </Container>
        </div>
      }
    </div>
  );
}


  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
  const imgStyle = {
    width: "50%",
    margin: "25%",
  }
  

  export default connect(mapStateToProps, null) (Profile);






// class Profile extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userId: this.props.match.params.id,
//       user: {},
//       loading: true
//     }
//   }

//   componentDidMount() {
//     fetch(`http://localhost:3000/api/v1/users/${this.state.userId}`)
//     .then(resp => resp.json())
//     .then(user => {
//       if (user.error) {
//         this.props.history.push('/')
//         alert(user.error)
      
//       } else {
//         this.setState({
//           user: user,
//           loading: false
//         })
//       }
//     })
//   }
      

//   renderGames = () => {
//     return this.state.user.games.map(game => {
//       return <FavoriteGame {...game} key={game.id} />
//     })
//   }

//   renderReviews = () => {
//     return this.state.user.reviews.map(review => {
//       return <Review {...review} key={review.id} />
//     })
//   }

//   render() { 
//     return (
//       this.state.loading ?
//       <Loading />
//       :
//      <div style={{textAlign: "center"}}>
//        {

//        }
//         <Container className="mt-5" style={{outline: "solid"}} fluid="lg">
//           <Row style={{outline: "solid"}}>
//             <Col>
//               <h1>{this.state.user.username}</h1>
//             </Col>
//             <Col>
//               <h1>Favorite Games</h1>
//             </Col>
//           </Row>
//           <Row>
//           <Col style={{outline: "solid"}} className ="p-3">
//             <img style={imgStyle} src={this.state.user.pic} alt="profile"/>
//             {
//               this.props.user ?
//                 this.props.user.id === this.state.user.id ?
//                 <Button as={Link} to={`/users/${this.props.user.id}/edit`}>Edit Info</Button>
//                 :
//                 null
//               :
//               null
//             } 
//           </Col>
//           <Col className ="p-3">
//             <Row>
//               {this.renderGames()}
//             </Row>
//           </Col>
//         </Row>
//         <Col>
//           <h3>Reviews</h3>
//           {this.renderReviews()}  
//         </Col>
//       </Container>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user
//   }
// }


// export default connect(mapStateToProps, null) (Profile);