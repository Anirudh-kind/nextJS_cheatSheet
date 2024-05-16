import React from "react";

const clientID = ({ params }) => {
  return (
    <h1>this page renders the server side dynamic route of {params.id}</h1>
  );
};

export default clientID;