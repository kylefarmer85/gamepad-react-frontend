import React from 'react';
import UserThumb from '../components/UserThumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FollowingContainer = ({
  followings,
  nextFollowings,
  followingsLength,
}) => {
  
  const renderFollowings = () => {
    return followings.map((user) => {
      return <UserThumb {...user} key={user.id} />;
    });
  };

  return (
    <>
      {followingsLength === 0 ? (
        <Col>
          <p>Not following anyone.</p>
        </Col>
      ) : (
        <Col>
          <Row>
            <Col className='d-flex flex-wrap align-items-center justify-content-center'>
              {renderFollowings()}
            </Col>
          </Row>
          <Row>
            <Col>
              {followingsLength < 4 ? null : (
                <button
                  type='button'
                  className='btn-nes secondary'
                  onClick={nextFollowings}
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

export default FollowingContainer;
