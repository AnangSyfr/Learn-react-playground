import { useEffect } from "react";

const Two = () => {
  useEffect(() => {
    console.log("from two component");
  }, []);
  return <div>Two</div>;
};

export default Two;
