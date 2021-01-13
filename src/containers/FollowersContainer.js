import React from 'react';
import UserThumb from '../components/UserThumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FollowersContainer = ({ followers, nextFollowers, followersLength }) => {
  
  const renderFollowers = () => {
    return followers.map((user) => {
      return <UserThumb {...user} key={user.id} />;
    });
  };

  return (
    <>
      {followersLength === 0 ? (
        <Col>
          <p>No followers.</p>
        </Col>
      ) : (
        <Col>
          <Row>
            <Col className='d-flex flex-wrap align-items-center justify-content-center'>
              {renderFollowers()}
            </Col>
          </Row>
          <Row>
            <Col>
              {followersLength < 4 ? null : (
                <button
                  type='button'
                  className='btn-nes secondary'
                  onClick={nextFollowers}
                >
                  more{'>'}
                </button>
              )}
            </Col>
          </Row>
        </Col>
      )}
    </>
  );
};

export default FollowersContainer;
