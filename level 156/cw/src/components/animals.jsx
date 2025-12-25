function animals() {
  const my_local_data = [
    {
      name: "davit",
      age: 21,
    },
    {
      name: "gio",
      age: 28,
    },
    {
      name: "sali",
      age: 27,
    },
  ];

  return (
    <ul>
      {my_local_data.map((item, index) => {
        return (
          <li key={index}>
            <div>{item.name}</div>
            <div>{item.age}</div>
          </li>
        );
      })}
    </ul>
  );
}

export default animals;
