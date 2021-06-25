import React from 'react';
import { useSelector } from 'react-redux';
import ConsoleAndGenreContainer from './ConsoleAndGenreContainer';
import YearAndGenreContainer from './YearAndGenreContainer';
import TopByConsoleContainer from './TopByConsoleContainer';
import UsersByConsoleAndGenreContainer from './UsersByConsoleAndGenreContainer';
import HighestRatedByFollowingsContainer from './HighestRatedByFollowingsContainer';

const HomePage = () => {

  const user = useSelector(state => state.user);

  return (
    <div className='mb-4'>
      <ConsoleAndGenreContainer />
      <YearAndGenreContainer />
      <TopByConsoleContainer />
      {user ? (
        <>
          <HighestRatedByFollowingsContainer />
          <UsersByConsoleAndGenreContainer />
        </>
      ) : null}
    </div>
  );
};

export default HomePage;