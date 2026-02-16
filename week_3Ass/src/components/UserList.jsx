const UserList = ({ users }) => {
  return (
    <div>
      <h3>Total Users: {users.length}</h3>

      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
    </div>
  );
};

export default UserList;
