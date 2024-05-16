import styles from "./page.module.css";

export default function Home() {
  return (
    // everything in nextjs is a server component unless we declare it as client
    <main className={styles.main}>
      <h1>next js start </h1>

      {/* nested routes */}
      {/* app folder ka andar kpoi bhi folder create krenge to vo ek route bn jaega  */}
      {/* uske andar default hume page.jsx bnana padega example: /about, about/user */}

      {/*group routing*/}

      {/* see the example in group routing folder, inside group routing folder we have two nested routes we can access them /groupRoute1 or /groupRoute2 no need for prefixing 'groupRouting/' */}

      {/* dynamic routing */}
      {/* in the dynamic route folder there is an id and from params we are accessing the id */}

      {/* catch all routes */}
      {/* it catches all the nonsence routes passed and sends a default route for ex pass catchAll/wdgfvuyefg it will gona priont the one inside [...catchAll] also it has something called params which throws the array of the things which arw in route*/}

      {/*  parallel routes or conditional routes */}

      {/* client side data fetching in next js  */}
      {/* 
        in next js there are either server component or client side component for rendering a component we use "use client" hook in the beginnig. 
        apart from traditional fetch api next provide us swr(stale-while-revalidate) refer doc: https://nextjs.org/docs/pages/building-your-application/data-fetching/client-side
        stale means :not fresh 
      */}

      {/* server side data fetching  */}
      {/*  in server side rendering we fetch the data before then we render the page, the page will be populated based on fetched data.
      
      in client side firstly the page is rendered, then the APIs are fetched load and then the data is populated cozing loading state etc
      */}

      {/* next image component */}

      {/* authentication in next js*/}
      {/* need to install next auth */}

      {/* authentication in next js  */}
      {/* its done using nextauth " npm install next-auth " 
          check /nextauth route , also check component/SessionWrapper;   */}


      
    </main>
  );
}
