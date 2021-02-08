import React from 'react';
import UserThumb from '../reusable/UserThumb';

const SearchedUsersContainer = props => {
  const renderUsers = props.users.map(user => {
    return <UserThumb {...user} key={user.id} />;
  });

  return renderUsers;
};

export default SearchedUsersContainer;
