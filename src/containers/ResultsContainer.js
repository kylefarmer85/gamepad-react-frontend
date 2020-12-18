import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SlicedGame from '../components/SlicedGame'

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
      return <SlicedGame {...game} key={game.id}/>
    })
  }

  return (
    <Container>
      
        { loading?
          <div>
            <Loading />
          </div>
        :
        <>
          <h2 style={{textAlign: "center", marginTop: "2%"}}>Results for {props.match.params.searchTerm}</h2>
          <Row className="mr-1" style={{justifyContent: "center"}}>
            {renderSearchResults()}
          </Row>
        </>
        }
      
    </Container>
  );
}


export default ResultsContainer;


