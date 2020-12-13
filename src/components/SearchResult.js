import React from 'react';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const imgStyle = {
  width: "100%",
  height: "60%",
}

const cardStyle = {
  width: '15rem', 
  height:'20em', 
  textAlign:"center",
  overflow: "hidden"
}

const SearchResult = (props) => {
  return (
    <Col style={{paddingTop:'5%'}}>
      <Card style={cardStyle}>
        <Card.Img style={imgStyle} variant="top" src={props.background_image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {props.released}
          </Card.Text>
        </Card.Body>
      </Card>    
    </Col>  
  );
}

export default SearchResult;
