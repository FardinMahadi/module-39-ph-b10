import { useState } from "react";

export default function Team() {
  const [team, setTeam] = useState(11);

  const handleAdd = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };

  const handleRemove = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };

  const teamStyle = {
    border: "2px solid purple",
    borderRadius: "10px",
    marginBottom: "20px",
    padding: "20px",
  };
  return (
    <div style={teamStyle}>
      <h3>Players: {team}</h3>
      <button style={{ marginRight: "10px" }} onClick={handleAdd}>
        +
      </button>
      <button style={{ marginLeft: "10px" }} onClick={handleRemove}>
        -
      </button>
    </div>
  );
}
