import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import { addReview } from '../../actions/reviews';
import { toast } from 'react-toastify';
import API from '../../API';

const ReviewForm = ({ gameName, gameApiId, gameImage }) => {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleSubmit = e => {
    e.preventDefault();
    if (!content) {
      return toast.error('Review cannot be blank!', {
        position: 'bottom-center',
        autoClose: 3000
      });
    }

    let photoUrl = `${API}/${user.photo}`;

    const reviewObj = {
      user_id: user.id,
      username: user.username,
      user_pic: photoUrl,
      content: content,
      rating: rating,
      game_name: gameName,
      game_api_id: gameApiId,
      game_image: gameImage
    };
    dispatch(addReview(reviewObj));
    setRating(1);
    setContent('');
  };

  return (
    <Form
      style={{ padding: '5% 20% 5% 3%', textAlign: 'left' }}
      onSubmit={handleSubmit}
    >
      <Form.Group controlId='formReview'>
        <Form.Label>Leave a review!</Form.Label>
        <Form.Control
          name='content'
          value={content}
          as='textarea'
          rows={3}
          onChange={e => setContent(e.target.value)}
        />
      </Form.Group>
      <Form.Group style={{ width: '65px' }} controlId='fromRating'>
        <Form.Label>Rating</Form.Label>
        <Form.Control
          as='select'
          name='rating'
          value={rating}
          onChange={e => setRating(e.target.value)}
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
};

export default ReviewForm;
