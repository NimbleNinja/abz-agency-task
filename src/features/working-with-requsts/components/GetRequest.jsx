import React, { useEffect, useState } from 'react';
import User from './User';
import Button from '../../../components/Button';
import './getrequest.scss';
import { fetchUsers } from '../users.gateway';

const GetRequest = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetchUsers(currentPage).then(data => {
      setUsers([...users, ...data.users]);
      setTotalPages(data.totalPages);
    });
  }, [currentPage]);

  const showMoreHandler = e => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };

  return (
    <article className="getrequest">
      <div className="container">
        <div className="getrequest__content">
          <h2 className="getrequest__title title">Working with GET request</h2>
          <ul className="getrequest__users-list users-list">
            {users.map(({ id, photo, position, name, phone, email }) => {
              return (
                <User
                  key={id}
                  avatarUrl={photo}
                  position={position}
                  name={name}
                  phone={phone}
                  email={email}
                />
              );
            })}
          </ul>
          <div className="getrequest__btn">
            {currentPage !== totalPages ? (
              <Button content="Show more" handler={showMoreHandler} />
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

export default GetRequest;
