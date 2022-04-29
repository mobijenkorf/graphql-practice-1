import React from "react";
import "./App.css";
import LaunchListContainer from "./components/LaunchList/LaunchListContainer";
import LaunchProfileContainer from "./components/LaunchProfile/LaunchProfileContainer";

function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId: number) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchListContainer handleIdChange={handleIdChange} />
      <LaunchProfileContainer id={id} />
    </div>
  );
}

export default App;
