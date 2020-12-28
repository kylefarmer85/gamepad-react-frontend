import React, { Component } from 'react';
import ConsoleAndGenreContainer from './ConsoleAndGenreContainer'
import YearAndGenreContainer from './YearAndGenreContainer'
import TopByConsoleContainer from './TopByConsoleContainer';
import UsersByConsoleAndGenreContainer from './UsersByConsoleAndGenreContainer'
import { connect } from 'react-redux'


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <ConsoleAndGenreContainer />
        <YearAndGenreContainer />
        <TopByConsoleContainer />
        {
        this.props.user ?
          <UsersByConsoleAndGenreContainer />
        :
          null
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, null) (HomeContainer);


