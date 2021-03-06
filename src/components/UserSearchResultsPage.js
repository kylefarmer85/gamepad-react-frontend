import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import history from '../history';
import UserThumb from './reusable/UserThumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import API from '../API';

const UserSearchResultsPage = props => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_term: props.match.params.searchTerm
      })
    };

    fetch(`${API}/api/v1/users/search`, reqObj)
      .then(resp => resp.json())
      .then(fetchedUsers => {
        if (fetchedUsers.length === 0) {
          toast.error('No user found matching that name.', {
            position: 'top-center',
            autoclose: 3000
          });
          history.push('/');
        } else {
          setUsers(fetchedUsers);
          setLoading(false);
        }
      });
  }, [props.match.params.searchTerm]);

  const renderUsers = () => {
    return users.map(user => {
      return <UserThumb key={user.id} {...user} />;
    });
  };

  return (
    <Container fluid className='m-4 text-center'>
      <h3>Results for {props.match.params.searchTerm}</h3>
      <Row>
        <Col className='mt-4 d-flex flex-wrap justify-content-center'>
          {loading ? null : renderUsers()}
        </Col>
      </Row>
    </Container>
  );
};

export default UserSearchResultsPage;
