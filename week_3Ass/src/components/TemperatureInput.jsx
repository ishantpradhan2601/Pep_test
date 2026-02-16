const TemperatureInput = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

export default TemperatureInput;
