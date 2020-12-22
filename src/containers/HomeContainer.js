import React, { Component } from 'react';
import ConsoleAndGenreContainer from './ConsoleAndGenreContainer'
import YearAndGenreContainer from './YearAndGenreContainer'
import TopByConsoleContainer from './TopByConsoleContainer';
import UsersByConsoleAndGenreContainer from './UsersByConsoleAndGenreContainer'


class HomeContainer extends Component {
  render() {
    return (
      <div>
        <ConsoleAndGenreContainer />
        <YearAndGenreContainer />
        <TopByConsoleContainer />
        <UsersByConsoleAndGenreContainer />
      </div>
    );
  }
}

export default HomeContainer;



