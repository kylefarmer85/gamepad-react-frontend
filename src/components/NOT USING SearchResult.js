import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const imgStyle = {
  width: "100%",
  height: "60%",
}

const cardStyle = {
  width: '15em', 
  height:'20em', 
  textAlign:"center",
  overflow: "hidden"
}

const SearchResult = ({id, background_image, name, released}) => {
  return (
    <Link to={`/games/${id}`}>
      <Col>
        <Card className="m-4" style={cardStyle}>
          <Card.Img style={imgStyle} variant="top" src={background_image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {released}
            </Card.Text>
          </Card.Body>
        </Card>    
      </Col>  
    </Link>
  );
}

export default SearchResult;
