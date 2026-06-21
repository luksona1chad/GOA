const getUsers = (req, res) => {
  const users = [
    {
      id: 1,
      name: "Giorgi",
    },
    {
      id: 2,
      name: "Nino",
    },
    {
      id: 3,
      name: "Luka",
    },
  ];

  res.json(users);
};

module.exports = {
  getUsers,
};