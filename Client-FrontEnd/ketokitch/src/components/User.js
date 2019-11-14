import React from 'react';

const User = props => {
  return (
    <div>
      <p>{props.user.username}</p>
      <p>{props.user.email}</p>
      <p>{props.user.password}</p>
    </div>
  )
}

export default User;
