import React, { useEffect } from "react";

const One = () => {
  useEffect(() => {
    console.log("from one component");
  }, []);
  return <div>One</div>;
};

export default One;
