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
        gameImage: this.props.gameImage
      }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleSubmit = (e) => {
    e.preventDefault()
    
    !this.props.user ?
    alert("You must be logged in to submit a review.")
    :
    this.props.addReview(this.state, this.props.user.id, this.props.user.username)
    
    this.setState({
      content: "",
      rating: ""
    })
   
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formReview">
          <Form.Label>Review</Form.Label>
          <Form.Control name="content" value={this.state.content} as="textarea" rows={3} placeholder="Add a Review!" onChange={this.handleChange}/>
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
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps,{ addReview }) (ReviewForm);
