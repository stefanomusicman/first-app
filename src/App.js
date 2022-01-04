import React, { useState, useEffect } from 'react';
import UserForm from './Components/UserForm';
import UsersContainer from './Components/UsersContainer';

const getSessionOrDefault = (key, defaultValue) => {
  const stored = sessionStorage.getItem(key);
  if(stored === null) {
    return defaultValue;
  }
  return JSON.parse(stored);
}

function App() {

  const [users, setUsers] = useState(getSessionOrDefault('userInfo', []));
  useEffect(() => {
    sessionStorage.setItem('userInfo', JSON.stringify(users))
  }, [users]);

  const dataTransferHandler = (data) => {
    setUsers(prevUsers => [data, ...prevUsers]);
  };

  const deleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  }

  return (
    <>
      <UserForm formTransfer={dataTransferHandler}/>
      {users.length > 0 && <UsersContainer onDeleteUser={deleteUser} data={users} />}
    </>
  );
}

export default App;

