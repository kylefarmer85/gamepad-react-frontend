import React from 'react';
import SlicedGame from '../components/SlicedGame'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const SlicedGamesContainer = (props) => {

  const renderGames = props.slicedGames.map(game => {
    return <SlicedGame {...game} key={game.id} />
  })



  return (
    <Col>
      <Row>
      { renderGames }
      </Row>
    </Col>
  );
}

export default SlicedGamesContainer;
