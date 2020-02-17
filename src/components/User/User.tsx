import React from 'react';
import IUser from '../../models/user';

interface UserProps {
  user: IUser,
}

interface Params {
  id?: string | undefined,
}

const UserComponent = (props: UserProps) => (
  <div>
    <p>Author: {props.user.name}</p>
    <p>{props.user.email}</p>
  </div>
);

export default UserComponent;
