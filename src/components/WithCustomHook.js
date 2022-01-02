import React from "react";
import { useFetch } from "../hooks/useFetch";

const WithCustomHook = () => {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );

  console.log(response);
  return (
    <div>
      <h1>With Custom Hook</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        <ol>
          {response?.map((result) => (
            <li key={result?.id}>{result?.name}</li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default WithCustomHook;
