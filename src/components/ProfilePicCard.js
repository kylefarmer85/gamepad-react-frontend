import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProfilePicCard = ({username, profilePic, favConsole, favGenre, favGame}) => {

  const rowStyle = {
    outline: "4px solid white",
    padding: "20px 0"
  }

  const picStyle = {
    height: "200px",
    width: "200px",
    border: "8px solid white",
    borderRadius: "3%"
  }

  return (
    <Row style={rowStyle} className="m-4 align-items-center justify-content-center">
      <Col>
        <img style={picStyle} src={profilePic} alt="profile pic" />
      </Col>
      <Col>
        <h3>{username}</h3>
        <p>Favorite Console: <br/> {favConsole}</p>
        <p>Favorite Genre: <br/> {favGenre}</p>
        <p>Favorite Game: <br/> {favGame}</p>
      </Col>
    </Row>
  );
}

export default ProfilePicCard;
