const PlayerInput = ({ name, isEditing, setName, ...props }) => {
  const handleChange = (e) => {
    setName(e.target.value);
  };

  return isEditing ? (
    <input
      type="text"
      required
      value={name}
      onChange={handleChange}
      {...props}
    />
  ) : (
    <span {...props}>{name}</span>
  );
};

export default PlayerInput;
