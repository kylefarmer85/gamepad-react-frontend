import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/search'
import SearchResult from '../components/SearchResult'
import Loading from '../components/Loading'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: this.props.match.params.searchTerm
    }
  }

  componentDidMount() {
    console.log(this.props.match.params.searchTerm)
    this.props.fetchSearchResults(this.state.searchTerm)
  }

  renderSearchResults = () => {
    return this.props.searchResults.map(game => {
      return <SearchResult {...game} key={game.id}/>
    })
  }

  render() {
    return (
      <Container>
        <Row>
          <h3>{this.props.match.params.searchTearm}</h3>
          { this.props.loading?
          <Loading />
          :
          this.renderSearchResults()
          }
        </Row>
      </Container>
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


