import { useEffect } from "react";
import One from "./components/One";
import Three from "./components/Three";
import Two from "./components/Two";

function App() {
  useEffect(() => {
    console.log("from root component");
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <One />
      <Two />
      <Three />
      Root Component
    </div>
  );
}

export default App;
