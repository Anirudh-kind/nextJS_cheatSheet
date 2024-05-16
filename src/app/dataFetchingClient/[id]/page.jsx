"use client";

// we can access the route name using params as well in client side rendering. see at http://localhost:3000/dynamicRoute/id

// the useRouter doesnt work in server side application

import React from "react";

import { useRouter } from "next/navigation";

const clientID = ({ params }) => {
  const router = useRouter();
  console.log(router);
  return (
    <h1>this page renders the client side dynamic route of {params.id}</h1>
  );
};

export default clientID;
