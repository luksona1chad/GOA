import React from 'react'

export default function Router() {
  const PATH = window.location.pathname;
  console.log(PATH)
  if (PATH === "/") {

    return <Home />;

  } else if (PATH === "/login") {
    return <Login />;
  } else {
    return <Notfound />;
  }
}
