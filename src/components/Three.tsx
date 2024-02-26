import { useEffect } from "react";

const Three = () => {
  useEffect(() => {
    console.log("from three component");
  }, []);
  return <div>Three</div>;
};

export default Three;
