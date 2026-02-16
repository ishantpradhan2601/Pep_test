import useSearch from "../Hooks/UseSearch";
import UserList from "../components/UserList";

function UserSearchApp() {
  const users = ["Ishant", "Rahul", "Aman", "Rohit", "Priya"];

  const { query, setQuery, filtered } = useSearch(users);

  return (
    <div>
      <h2>User Directory</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <UserList users={filtered} />
    </div>
  );
}

export default UserSearchApp;
