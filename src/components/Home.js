import React, { Component } from 'react';
import ConsoleAndGenreContainer from '../containers/ConsoleAndGenreContainer'
import YearAndGenreContainer from '../containers/YearAndGenreContainer'
import TopByConsoleContainer from '../containers/TopByConsoleContainer';



class Home extends Component {
  render() {
    return (
      <div>
        <ConsoleAndGenreContainer />
        <YearAndGenreContainer />
        <TopByConsoleContainer />
      </div>
    );
  }
}

export default Home;



