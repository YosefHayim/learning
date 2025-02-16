const makeDateReadable = (date) => {
  return new Date(date).toLocaleDateString();
};

module.exports = makeDateReadable;
