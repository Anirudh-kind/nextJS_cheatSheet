"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from 'swr';

const clientFetching = () => {
  
  const fetcher = (...args) => fetch(...args).then((res) => res.json())//instead of traditional fetching using useEffect we will use useswr
  const { data, error } = useSWR('https://dummyjson.com/users', fetcher)
  
  // const [data, setData] = useState({});
  // useEffect(() => { // we dont need this useEffect anymore
  //   const get = async () => {
  //     const res = await fetch("https://dummyjson.com/users");
  //     setData(await res.json());
  //   };
  //   get();
  // }, []);
  
  useEffect(() => console.log(data), [data]);

  if(error){
    return <h1>ERROR OCCURED </h1>
  }

  return (
    <>
      <h1>client data Fetching</h1>
      {data && data.users &&
        data.users.map((ele) => (
          <div key={ele.id}>
            <Link
              style={{ cursor: "pointer" }}
              href={`dataFetchingClient/${ele.firstName}`}
              key={ele.id}
            >
              {ele.firstName}
            </Link>
          </div>
        ))}
    </>
  );
};

export default clientFetching;
// benefits of useSwr: ya lightweight ha , ya realtime work krta ha, ya caching provide krta ha, code ko small/readable bnata ha 