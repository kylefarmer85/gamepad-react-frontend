import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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
import FavoritesContainer from './FavoritesContainer'


const ProfileContainer = (props) => {

  const [user, setUser] = useState({})
  const [showFollowers, setShowFollowers] = useState(true)
  const [loading, setLoading] = useState(true)

  const [gamesIndex, setGamesIndex] = useState(0)
  const [followersIndex, setFollowersIndex] = useState(0)
  const [followingsIndex, setFollowingsIndex] = useState(0)


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


  const slicedGames = () => {
    if (gamesIndex > user.games.length) {
      setGamesIndex(0)
    }
    return user.games.slice(gamesIndex, gamesIndex +4)
  }

  const nextGames = () => {
    setGamesIndex(prevState => prevState + 4)
  }


  const slicedFollowers = () => {
    if (followersIndex > user.followers.length) {
      setFollowersIndex(0)
    }
    return user.followers.slice(followersIndex, followersIndex + 3)
  }

  const slicedFollowings = () => {
    if (followingsIndex > user.followings.length) {
      setFollowingsIndex(0)
    }
    return user.followings.slice(followingsIndex, followingsIndex + 3)
  }

  const nextFollowers = () => {
    setFollowersIndex(prevState => prevState + 3)
  }
  
  const nextFollowings = () => {
    setFollowingsIndex(prevState => prevState + 3)
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

  const removeFavoriteFromProfile = (gameId) => {
    const updatedGames = user.games.filter(game => {
    return game.id !== gameId
    })

    setUser({
      ...user,
      games: updatedGames
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
    }

  const renderFollowersContainer = () => {
    return <FollowersContainer followers={slicedFollowers()} nextFollowers={nextFollowers} followersCount={user.followers.count}/>
  }

  const renderFollowingContainer = () => {
    return <FollowingContainer followings={slicedFollowings()} nextFollowings={nextFollowings} followingsCount={user.followings.count} />
  }

  let photoUrl = `http://localhost:3000${user.photo}`

  return (
    
    <div>
      {
      loading ?
        <Loading />
      :
        <Container fluid className="text-center">

          <Row className="mt-5 align-items-center justify-content-center" >

            <Col>
              <h3>{user.username}</h3>
              <img style={{height: "150px", width: "150px"}} src={photoUrl} alt="profile"/>

              {
                props.user ?
                  props.user.id === user.id ?
                    <>
                    <br/>
                    <Button as={Link} to={`/users/${props.user.id}/edit`}>Edit Info</Button>
                    </>
                  :
                    <FollowButton followedUserId={user.id} followerId={props.user.id} addFollowerToProfile={addFollowerToProfile} removeFollowerFromProfile={removeFollowerFromProfile}/>
                :
                
                  <Button as={Link} to={'/login'}>Login to Follow User</Button>
              } 
            </Col>
            <Col>
              <Row>
                <Col>
                  <ToggleButton
                    type="radio"
                    variant="none"
                    style={{color: "white"}}
                    name="radio"
                    value={showFollowers}
                    checked={showFollowers}
                    onChange={toggleShowFollowers}
                  > Followers: {user.followers.length}
                  </ToggleButton>

                  <ToggleButton
                    type="radio"
                    variant="none"
                    style={{color: "white"}}
                    name="radio"
                    value={!showFollowers}
                    checked={!showFollowers}
                    onChange={toggleShowFollowers}
                  > Following: {user.followings.length}
                  </ToggleButton>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-wrap align-items-center justify-content-center">
  
                  {
                  showFollowers ?
                    renderFollowersContainer()
                  :
                    renderFollowingContainer()
                  }

                </Col>
              </Row>
            </Col>  
          </Row>

          <Row className="mt-4">
  
          <Col>
              <Row>
                <Col>
                  <h3>Favorite Games</h3>
                  <Button style={{fontSize: "17px"}} variant="outline-light" onClick={nextGames}>more→</Button>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-wrap align-items-center justify-content-center">

                  <FavoritesContainer slicedFavorites={slicedGames()} gameUserId={user.id} removeFavoriteFromProfile={removeFavoriteFromProfile} />
                
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-4">  
            <Col>
              <h3>Reviews</h3>
              {renderReviews()}  
            </Col>
          </Row>
        </Container>
      }
    </div>
  );
}

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
export default connect(mapStateToProps, null) (ProfileContainer);
