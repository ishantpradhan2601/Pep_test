const Display = ({ text, remaining }) => {
  return (
    <div>
      <p>Total Characters: {text.length}</p>
      <p>Remaining: {remaining}</p>

      {remaining <= 10 && (
        <p style={{ color: "red" }}>Warning: Limit almost reached!</p>
      )}
    </div>
  );
};

export default Display;
