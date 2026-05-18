import { useEffect } from "react";

export default function Lomi(
  useEffect(() => {
    const handleApiGet = async () => {
      const url = "https://jsonplaceholder.typicode.com/todos/1";
      const request = await fetch(url);
      const respond = await request.json();

      setData(respond);
    };
  }, []);)
)

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(Response => Response.json)
  .then(json => console.log(json))