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
import Comment from '../components/Comment'


const ProfileContainer = (props) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({})

  const [showFollowers, setShowFollowers] = useState(true)
  const [showReviews, setShowReviews] = useState(true)

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


  const handleAddComment = (comment) => {
    const reviewCommentsUpdated = user.reviews.map(review => {
      if (review.id === comment.review_id) {
        return {
          ...review,
          comments: [...review.comments, comment]
        }
      } else {
        return review
      }
    })
    setUser(prevState => {
      return {
        ...prevState,
        reviews: reviewCommentsUpdated
      }
    })
  }

  const handleDeleteComment = (commentId, reviewId) => {
    const reviewsCommentDeleted = user.reviews.map(review => {
      if (review.id === reviewId) {
        const updatedComments = review.comments.filter(comment => comment.id !== commentId)
        return {
          ...review,
          comments: updatedComments
        }
      } else {
        return review
      }
    })
    setUser({
      ...user,
      reviews: reviewsCommentDeleted
    })
  }

  const handleDeleteFromUserComment = (commentId) => {
    const updatedComments = user.comments.filter(comment => {
      return comment.id !== commentId
    })
    setUser({
      ...user,
      comments: updatedComments
    })
  }

  const toggleShowReviews = () => {
    setShowReviews(prevState => !prevState) 
  }

  const renderReviews = () => {
    return user.reviews.map(review => {
      return <Review {...review} key={review.id} handleDelete={handleDelete} handleDeleteComment={handleDeleteComment} handleAddComment={handleAddComment} />
    })
  }

  const renderComments = () => {
    return user.comments.map(comment => {
      return <Comment {...comment} key={comment.id} handleDeleteComment={handleDeleteFromUserComment} />
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

  const removeFavoriteFromProfile = (gameId) => {
    const updatedGames = user.games.filter(game => {
    return game.id !== gameId
    })

    setUser({
      ...user,
      games: updatedGames
    })
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

          <Row className="mt-5">
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
                      renderReviews()  
                    : 
                      renderComments()
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

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
export default connect(mapStateToProps, null) (ProfileContainer);
