const getApi = (req, res) => {
  res.json({
    message: "API response",
    success: true
  });
};

module.exports = { getApi };