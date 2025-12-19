import React, { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    name: "Luka",
    age: "11/12",
    email: "ldatiashvili48@gmail.com",
  });

  function handleSetNewUser() {
    setUser({
      name: "LUKA",
      age: "12",
      email: "Ldatiashvili48@gmail.com",
    });
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.email}</h1>

      <button onClick={handleSetNewUser}>
        IF U CICK U ARE G.. NO I JOKE HEHEHE
      </button>
    </div>
  );
}

export default App;