import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'

const ResultsContainer = (props) => {

  useEffect(() => {
    console.log(props.match.params.searchTerm)
    fetchSearchResults(props.match.params.searchTerm)
  },[props.match.params.searchTerm])

  return (
    <div>
      
    </div>
  );
}



export default connect(null, { fetchSearchResults })(ResultsContainer);
