import React, { Component } from 'react';
import ConsoleAndGenreContainer from './ConsoleAndGenreContainer';
import YearAndGenreContainer from './YearAndGenreContainer';
import TopByConsoleContainer from './TopByConsoleContainer';
import UsersByConsoleAndGenreContainer from './UsersByConsoleAndGenreContainer';
import HighestRatedByFollowingsContainer from './HighestRatedByFollowingsContainer';
import { connect } from 'react-redux';

class HomePage extends Component {
  render() {
    return (
      <div className='mb-4'>
        <ConsoleAndGenreContainer />
        <YearAndGenreContainer />
        <TopByConsoleContainer />
        {this.props.user ? (
          <>
            <HighestRatedByFollowingsContainer />
            <UsersByConsoleAndGenreContainer />
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, null)(HomePage);
