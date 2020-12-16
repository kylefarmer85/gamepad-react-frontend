import React, { useEffect, useState } from 'react';
import SearchResult from '../components/SearchResult'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ResultsContainer = (props) => {

  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        search_term: props.match.params.searchTerm
      })
    }

    fetch("http://localhost:3000/api/v1/games/search", reqObj)
    .then(resp => resp.json())
    .then(data => {
      setSearchResults(data.results)
      setLoading(false)
    }) 
  }, [props.match.params.searchTerm]);
 


  const renderSearchResults = () => {
    if (searchResults === null) {
      return alert ("Please try your search again.")
    }
    return searchResults.map(game => {
      return <SearchResult {...game} key={game.id}/>
    })
  }

  return (
    <Container>
      <Row>
        { loading?
          <div style={{marginLeft:"45%", marginTop:"25%"}}>
            <Loading />
          </div>
        :
          renderSearchResults()
        }
      </Row>
    </Container>
  );
}


export default ResultsContainer;


