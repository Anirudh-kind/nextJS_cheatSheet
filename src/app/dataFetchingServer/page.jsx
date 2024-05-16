import React from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://dummyjson.com/users", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
    // This will activate the closest `error.js` Error Boundary
  }
  return res.json();

}

const DataFetchingServer = async () => {
  const data = await getData();

  return (
    <>
      <h1>we are doing server side rendering here</h1>
      {data &&
        data.users &&
        data.users.map((ele) => (
          <div key={ele.id}>
            <Link
              style={{ cursor: "pointer" }}
              href={`dataFetchingServer/${ele.firstName}`}
              key={ele.id}
            >
              {ele.firstName}
            </Link>
          </div>
        ))}
    </>
  );
};

export default DataFetchingServer;