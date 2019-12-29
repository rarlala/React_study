import React from 'react';

function User({user}){
  return(
      <div>
        <b>{user.username}</b> <span>({user.email})</span>
      </div>
  );
}

function UserList(){
  const users = [
    {
      id: 1,
      username: 'jungsuji',
      email: 'jungsuji@example.com'
    },
    {
      id: 2,
      username: 'ohsejin',
      email: 'ohsejin@example.com'
    },
    {
      id: 3,
      username: 'rarla',
      email: 'rarla@example.com'
    }
  ];

  return (
    <div>
      {
        users.map(
          // key를 사용하는것이 더 효율적이다.
          // user=> (<User user={user} key={user.id} />)
          (user, index)=> (<User user={user} />)
        )
      }
    </div>
  );
}

export default UserList;