import React from 'react';
import UserAvatar from './UserAvatar';
import './user.scss';

const User = ({ avatarUrl, position, name, phone, email }) => {
  return (
    <li className="users-list__user user">
      <UserAvatar url={avatarUrl} />
      <h3 className="user__fullname">{name}</h3>
      <div className="user__position">{position}</div>
      <div className="user__email">{email}</div>
      <div className="user__contacts">{phone}</div>
    </li>
  );
};

export default User;
