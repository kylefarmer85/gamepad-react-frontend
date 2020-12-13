import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'

const ResultsContainer = (props) => {

  useEffect(() => {
    console.log(props.match.params.searchTerm)
    props.fetchSearchResults(props.match.params.searchTerm)
  },[props])

  return (
    <div>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    loading: state.loading
  }
}


export default connect(mapStateToProps, { fetchSearchResults })(ResultsContainer);
