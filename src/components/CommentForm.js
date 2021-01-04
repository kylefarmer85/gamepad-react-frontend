import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import { connect } from 'react-redux'
import { addComment } from '../actions/comments'
import { toast } from 'react-toastify'


class CommentForm extends Component {
  constructor(props) {
    super(props)
      this.state = {
        content: ""
      }
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }  

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.state.content) {
      return toast.error("Please enter a comment!", {position: "bottom-center", autoClose: 3000})
    }
    
    let photoUrl = `http://localhost:3000/${this.props.user.photo}`

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
        user_id: this.props.user.id,
        review_id: this.props.reviewId,
        review_user_id: this.props.reviewUserId,
        review_username: this.props.reviewUsername,
        username: this.props.user.username,
        user_pic: photoUrl,
        game_name: this.props.gameName,
        game_api_id: this.props.gameApiId,
      })
    }
    fetch(`http://localhost:3000/api/v1/comments`, reqObj)
    .then(resp => resp.json())
    .then(comment => {
      
      this.props.addComment(comment)
      this.props.handleAddComment(comment)

      toast.success("Comment posted!", {position: "bottom-center", autoClose: 3000})

      this.setState({
        content: "",
      })
    })
  }


  render() {
    return (
      <Form style={{padding: "5% 50% 5% 5%"}} onSubmit={this.handleSubmit}>

        <Form.Group>
          <Form.Label>Leave a comment!</Form.Label>
          <Form.Control name="content" value={this.state.content} as="textarea" rows={3} onChange={this.handleChange}/>
        </Form.Group>
        
        <button type="submit" className="btn-nes primary">Submit</button>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    comments: state.comments
  }
}

export default connect (mapStateToProps,{ addComment }) (CommentForm);
