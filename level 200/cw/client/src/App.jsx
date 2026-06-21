import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const BASE_URL = "http://localhost:3000";
    const URL = `${BASE_URL}/api/lion`;

    const myFetch = async () => {
      const response = await fetch(URL, {
        // ...
      });

      const data = await response.json();
      setData(data);
    };

    myFetch();
  }, []);

  console.log(data);

  return (
    <>
      <h1>{data?.message}</h1>
    </>
  );
}

export default App;