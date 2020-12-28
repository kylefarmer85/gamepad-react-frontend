import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoriteGame from '../components/FavoriteGame'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Review from '../components/Review'
import FollowButton from '../components/FollowButton'
import FollowersContainer from './FollowersContainer'
import FollowingContainer from './FollowingContainer'


const ProfileContainer = (props) => {

  const [user, setUser] = useState({})
  const [showFollowers, setShowFollowers] = useState(true)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${props.match.params.id}`)
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      
      } else {
        console.log(user)

        setUser(user)
        setLoading(false)
      }
    })
  }, [props.match.params.id]);


  const removeFavoriteFromProfile = (gameId) => {
    const updatedGames = user.games.filter(game => {
    return game.id !== gameId
    })

    setUser({
      ...user,
      games: updatedGames
    })
  }


  const renderFavorites = () => {

    return user.games.map(game => {
      return <FavoriteGame {...game} gameUserId={user.id} removeFavoriteFromProfile={removeFavoriteFromProfile} key={game.id} />
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


  const addFollowerToProfile = () => {
    setUser(prevState => {
      return {
        ...prevState,
        followers: [...prevState.followers, props.user]
      }
    })
  }
  

  const removeFollowerFromProfile = () => {
    const updatedFollowers = user.followers.filter(f => {
    return f.id !== props.user.id
    })

    setUser(prevState => {
      return {
        ...prevState,
        followers: updatedFollowers
      }
    })
  }


  const toggleShowFollowers = () => {
      setShowFollowers(prevState => !prevState) 
      setUser(prevState => prevState)
    }

  const renderFollowersContainer = () => {
    return <FollowersContainer followers={user.followers} />
  }

  const renderFollowingContainer = () => {
    return <FollowingContainer followings={user.followings} />
  }

  let photoUrl = `http://localhost:3000${user.photo}`

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
                <img style={imgStyle} src={photoUrl} alt="profile"/>
                {
                  props.user ?
                    props.user.id === user.id ?
                      <Button as={Link} to={`/users/${props.user.id}/edit`}>Edit Info</Button>
                    :
                      <FollowButton followedUserId={user.id} followerId={props.user.id} addFollowerToProfile={addFollowerToProfile} removeFollowerFromProfile={removeFollowerFromProfile}/>
                  :
                    <Button as={Link} to={'/login'}>Login to Follow User</Button>
                } 
              </Col>
              <Col className ="p-3">
                <Row>
                 {renderFavorites()}
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <ToggleButton
                  type="radio"
                  variant="none"
                  name="radio"
                  value={showFollowers}
                  checked={showFollowers}
                  onChange={toggleShowFollowers}
                > Followers: {user.followers.length}
                </ToggleButton>

                <ToggleButton
                  type="radio"
                  variant="none"
                  name="radio"
                  value={!showFollowers}
                  checked={!showFollowers}
                  onChange={toggleShowFollowers}
                > Following: {user.followings.length}
                </ToggleButton>

                {
                showFollowers ?
                  renderFollowersContainer()
                :
                  renderFollowingContainer()
                }

              </Col>
              <Col>
                <h3>Reviews</h3>
                {renderReviews()}  
              </Col>
            </Row>
          </Container>
        </div>
      }
    </div>
  );
}


  const imgStyle = {
    width: "50%",
    margin: "25%",
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  

  export default connect(mapStateToProps, null) (ProfileContainer);
