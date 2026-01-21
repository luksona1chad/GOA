import React, { useState } from "react";    
export default function GetApi() {
    const [data, setData] = useState("this is nothing");

    async function handleGetApi() {
        const URI = "https://jsonplaceholder.typicode.com/todos/1";

        fetch(URI)
            .then((res) => res.json())
            .then((data) => setData(data));
    }

    return (
        <div className="space-y-2">
            <div>{JSON.stringify(data)}</div>
            <hr />
            <button
                onClick={handleGetApi}
                className="bg-red-500 text-white px-2 py-1 rounded"
            >
                get api
            </button>
        </div>
    );
}
