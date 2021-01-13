import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SlicedGame from '../components/SlicedGame';
import { toast } from 'react-toastify';
import API from '../API';

const ResultsContainer = (props) => {

  const [loading, setLoading] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        search_term: props.match.params.searchTerm,
      }),
    };

    fetch(`${API}/api/v1/games/search`, reqObj)
      .then((resp) => resp.json())
      .then((data) => {
        
        setSearchResults(data.results);
        setLoading(false);
      });
  }, [props.match.params.searchTerm]);

  const renderSearchResults = () => {
    if (!searchResults) {
      return toast.error('Please try your search again', {
        position: 'bottom-center',
        autoClose: 3000,
      });
    }

    return searchResults.map((game) => {
      return <SlicedGame {...game} key={game.id} />;
    });
  };

  return (
    <Container fluid className='mt-4 text-center'>
      <h2>Results for {props.match.params.searchTerm}</h2>
      <Row>
        <Col className='m-4 d-flex flex-wrap justify-content-center'>
          {loading ? <Loading /> : renderSearchResults()}
        </Col>
      </Row>
    </Container>
  );
};

export default ResultsContainer;
