import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addReview } from '../actions/reviews'

class ReviewForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        content: "",
        rating: "",
        gameName: this.props.gameName,
        gameApiId: this.props.gameApiId,
        gameImage: this.props.gameImage,
      }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.props.user) {

      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: this.props.user.id,
          username: this.props.user.username,
          user_pic: this.props.user.pic,
          content: this.state.content,
          rating: this.state.rating,
          game_name: this.state.gameName,
          game_api_id: this.state.gameApiId,
          game_image: this.state.gameImage
        })
      }
      fetch(`http://localhost:3000/api/v1/reviews`, reqObj)
      .then(resp => resp.json())
      .then(review => {
        this.props.addReview(review)
        this.props.handleAddReview(review)

        this.setState({
          content: "",
          rating: ""
        })
      })
    } else {
      alert("You must be logged in to submit a review.")
    }
  }


  render() {
    return (
      <Form style={{padding: "5% 50% 5% 5%"}} onSubmit={this.handleSubmit}>
        <Form.Group controlId="formReview">

          <Form.Label>Leave a Review</Form.Label>
          <Form.Control name="content" value={this.state.content} as="textarea" rows={3} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group controlId="fromRating" >
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" name="rating" value={this.state.rating} onChange={this.handleChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Form.Control>
        </Form.Group>
        
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    reviews: state.reviews
  }
}

export default connect (mapStateToProps,{ addReview }) (ReviewForm);
