import React, { Component } from 'react';
import ConsoleAndGenreContainer from '../containers/ConsoleAndGenreContainer'
import YearAndGenreContainer from '../containers/YearAndGenreContainer'



class Home extends Component {
  render() {
    return (
      <div>
        <ConsoleAndGenreContainer />
        <YearAndGenreContainer />

      </div>
    );
  }
}

export default Home;



