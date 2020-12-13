import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'

class ResultsContainer extends Component {

  componentDidMount() {
    console.log(this.props.match.params.searchTerm)
    this.props.fetchSearchResults(this.props.match.params.searchTerm)
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchSearchResults })(ResultsContainer);


