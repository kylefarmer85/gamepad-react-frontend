import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (searchTerm === '') {
      return toast.error('Search cannot be blank!', {
        position: 'bottom-center'
      });
    }
    history.push(`/games/search/${searchTerm}`);
    setSearchTerm('');
  };

  const handleUserSearch = () => {
    if (searchTerm === '') {
      return toast.error('Search cannot be blank!', {
        position: 'bottom-center'
      });
    }
    history.push(`/users/search/${searchTerm}`);
    setSearchTerm('');
  };

  return (
    <div>
      <Form className='mx-2' inline onSubmit={handleSubmit}>
        <Form.Group controlId='formSearchTerm'>
          <Button type='submit' variant='outline-light' className='mr-2'>
            Search Games
          </Button>

          <Form.Control
            type='text'
            name='searchTerm'
            value={searchTerm}
            className='mr-2 mt-1 mb-1'
            placeholder='Search Games / Users'
            onChange={e => setSearchTerm(e.target.value)}
          />

          <Button onClick={handleUserSearch} variant='outline-light'>
            Search Users
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
