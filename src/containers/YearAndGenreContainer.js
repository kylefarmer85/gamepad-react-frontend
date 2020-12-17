import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class YearAndGenreContainer extends Component {
  state = {
    year: "",
    genre: ""
  }


  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Choose a Year</Form.Label>
            <Form.Control as="select">
              <option>1977</option>
              <option>1978</option>
              <option>1979</option>
              <option>1980</option>
              <option>1981</option>
              <option>1982</option>
              <option>1983</option>
              <option>1984</option>
              <option>1985</option>
              <option>1986</option>
              <option>1987</option>
              <option>1988</option>
              <option>1989</option>
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
              <option>1993</option>
              <option>1994</option>
              <option>1995</option>
              <option>1996</option>
              <option>1997</option>
              <option>1998</option>
              <option>1999</option>
            </Form.Control>
            </Form.Group> 
            <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Choose a Genre</Form.Label>
            <Form.Control as="select">
              <option>Action</option>
              <option>Adventure</option>
              <option>Platformer</option>
              <option>Arcade</option>
              <option>RPG</option>
              <option>Fighting</option>
              <option>Sports</option>
              <option>Racing</option>
              <option>Puzzle</option>
              <option>Strategy</option>
              <option>Family</option>
            </Form.Control>
            </Form.Group>     
          <Button type="submit">Browse Games</Button>
        </Form>
      </div>
    );
  }
}

export default YearAndGenreContainer;
