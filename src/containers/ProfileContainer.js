import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Review from '../components/Review'
import FollowButton from '../components/FollowButton'
import FollowersContainer from './FollowersContainer'
import FollowingContainer from './FollowingContainer'
import FavoritesContainer from './FavoritesContainer'
import ProfilePicCard from '../components/ProfilePicCard'
import Comment from '../components/Comment'
import { addFetchedReviews } from '../actions/reviews'
import { addFetchedComments } from '../actions/comments'
import API from '../API'


const ProfileContainer = ({addFetchedReviews, addFetchedComments, authUser, reviews, comments, match}) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  const [showFollowers, setShowFollowers] = useState(true)
  const [showReviews, setShowReviews] = useState(true)

  const [gamesIndex, setGamesIndex] = useState(0)
  const [followersIndex, setFollowersIndex] = useState(0)
  const [followingsIndex, setFollowingsIndex] = useState(0)


  useEffect(() => {

    fetch(`${API}/api/v1/users/${match.params.id}`)
    .then(resp => resp.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      
      } else {
        console.log(user)

        addFetchedReviews(user.reviews)
        addFetchedComments(user.comments)

        setUser(user)
        setLoading(false)
      }
    })
  }, [match.params.id, addFetchedReviews, addFetchedComments]);


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


  const toggleShowReviews = () => {
    setShowReviews(prevState => !prevState) 
  }


  const renderReviews = () => {
    return reviews.map(review => {
      return <Review {...review} key={review.id} />
    })
  }


  const renderComments = () => {
    return comments.map(comment => {
      return <Comment {...comment} key={comment.id} />
    })
  }


  const addFollowerToProfile = () => {
    setUser(prevState => {
      return {
        ...prevState,
        followers: [...prevState.followers, authUser]
      }
    })
  }


  const removeFollowerFromProfile = () => {
    const updatedFollowers = user.followers.filter(f => {
    return f.id !== authUser.id
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
    return <FollowersContainer followers={slicedFollowers()} nextFollowers={nextFollowers} followersLength={user.followers.length}/>
  }


  const renderFollowingContainer = () => {
    return <FollowingContainer followings={slicedFollowings()} nextFollowings={nextFollowings} followingsLength={user.followings.length} />
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


  let photoUrl = `${API}/${user.photo}`

  return (
    <div>
      {
      loading ?
        <Loading />
      :
        <Container fluid className="text-center">

          <Row className="mt-5 align-items-center justify-content-center" >
            <Col>

              <ProfilePicCard username={user.username} profilePic={photoUrl} favConsole={user.fav_console} favGenre={user.fav_genre} favGame={user.fav_game} />

              {
                authUser ?
                  authUser.id === user.id ?
              
                    <Link to={`/users/${authUser.id}/edit`}>
                      <button type="button" className="btn-nes primary">Edit User Info</button>
                    </Link>  
            
                  :
                    <FollowButton followedUserId={user.id} followerId={authUser.id} addFollowerToProfile={addFollowerToProfile} removeFollowerFromProfile={removeFollowerFromProfile}/>
                :
                <>
                  <br/>
                  <Link to={'/login'}>
                    <button type="button" className="btn-nes primary">Login to Follow User</button>
                  </Link>  
                </>
              } 
            </Col>

            <Col>
              <Row>
                <Col>

                  <ToggleButton
                    type="checkbox"
                    variant="none"
                    style={{color: "white"}}
                    name="radio"
                    value={showFollowers}
                    checked={showFollowers}
                    onChange={toggleShowFollowers}
                  > Followers: {user.followers.length}
                  </ToggleButton>

                  <ToggleButton
                    type="checkbox"
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
              {/* more columns and rows in follows containers */}
                  {
                  showFollowers ?
                    renderFollowersContainer()
                  :
                    renderFollowingContainer()
                  }

              </Row>
            </Col>  
          </Row>

          <Row className="mt-5">
            <Col>
              <Row>
                <Col>

                  <h3>Favorite Games</h3>
                  {
                    user.games.length > 4 ?
                      <button type="button" className="btn-nes secondary" onClick={nextGames}>more{'>'}</button>
                    :
                      user.games.length === 0 ?
                        <p>{user.username} has no favorite games.</p>
                      :
                        null
                  }
                </Col>
              </Row>
              <Row>
                <Col className="d-flex flex-wrap justify-content-around slide-in">

                  <FavoritesContainer slicedFavorites={slicedGames()} gameUserId={user.id} removeFavoriteFromProfile={removeFavoriteFromProfile} />
                
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-5">  
            <Col>
              <Row>
                <Col>
                  <ToggleButton
                    type="checkbox"
                    variant="none"
                    style={{color: "white"}}
                    name="radio"
                    value={showReviews}
                    checked={showReviews}
                    onChange={toggleShowReviews}
                  > Reviews
                  </ToggleButton>

                  <ToggleButton
                    type="checkbox"
                    variant="none"
                    style={{color: "white"}}
                    name="radio"
                    value={!showReviews}
                    checked={!showReviews}
                    onChange={toggleShowReviews}
                  > Comments
                  </ToggleButton>

                </Col>
              </Row>
              <Row>
                <Col>

                  {
                    showReviews ?
                      reviews.length > 0 ?
                        renderReviews()  
                      :
                        <p>No reviews yet.</p>
                    : 
                      comments.length > 0 ?
                        renderComments()
                      :
                        <p>No comments yet.</p>
                  }

                </Col>
              </Row>
            </Col>
          </Row>
          
        </Container>
      }
    </div>
  );
}

  const mapStateToProps = state => {
    return {
      authUser: state.user,
      reviews: state.reviews,
      comments: state.comments
    }
  }
  
export default connect(mapStateToProps, { addFetchedReviews, addFetchedComments }) (ProfileContainer);
