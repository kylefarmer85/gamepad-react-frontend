import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import { addReview } from '../../actions/reviews';
import { toast } from 'react-toastify';
import API from '../../API';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      rating: 1,
      gameName: this.props.gameName,
      gameApiId: this.props.gameApiId,
      gameImage: this.props.gameImage
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.content) {
      return toast.error('Review cannot be blank!', {
        position: 'bottom-center',
        autoClose: 3000
      });
    }

    let photoUrl = `${API}/${this.props.user.photo}`;

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.user.id,
        username: this.props.user.username,
        user_pic: photoUrl,
        content: this.state.content,
        rating: this.state.rating,
        game_name: this.state.gameName,
        game_api_id: this.state.gameApiId,
        game_image: this.state.gameImage
      })
    };

    fetch(`${API}/api/v1/reviews`, reqObj)
      .then(resp => resp.json())
      .then(review => {
        this.props.addReview(review);

        toast.success('Review posted!', {
          position: 'bottom-center',
          autoClose: 3000
        });

        this.setState({
          content: '',
          rating: 1
        });
      });
  };

  render() {
    return (
      <Form
        style={{ padding: '5% 20% 5% 3%', textAlign: 'left' }}
        onSubmit={this.handleSubmit}
      >
        <Form.Group controlId='formReview'>
          <Form.Label>Leave a review!</Form.Label>
          <Form.Control
            name='content'
            value={this.state.content}
            as='textarea'
            rows={3}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group style={{ width: '65px' }} controlId='fromRating'>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as='select'
            name='rating'
            value={this.state.rating}
            onChange={this.handleChange}
          >
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

        <button type='submit' className='btn-nes primary'>
          Submit
        </button>
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { addReview })(ReviewForm);
