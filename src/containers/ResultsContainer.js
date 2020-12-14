import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'
import SearchResult from '../components/SearchResult'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const ResultsContainer = (props) => {

  useEffect(() => {
    props.fetchSearchResults(props.match.params.searchTerm)
  }, [props.match.params.searchTerm]);
 


  const renderSearchResults = () => {
    return props.searchResults.map(game => {
      return <SearchResult {...game} key={game.id}/>
    })
  }

  return (
    <Container>
      <Row>
        { props.loading?
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


const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchSearchResults })(ResultsContainer);


