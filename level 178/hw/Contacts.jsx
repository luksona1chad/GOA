import { Routes, Route, Link } from "react-router";

function Contacts() {
  return (
    <div>
      <h2>Contacts Page</h2>

      <nav>
        <Link to="email">Email</Link> |{" "}
        <Link to="phone">Phone</Link> |{" "}
        <Link to="address">Address</Link>
      </nav>

      <Routes>
        <Route path="email" element={<h3>Email: example@gmail.com</h3>} />
        <Route path="phone" element={<h3>Phone: +995 555 123 456</h3>} />
        <Route path="address" element={<h3>Address: Tbilisi, Georgia</h3>} />
      </Routes>
    </div>
  );
}

export default Contacts;