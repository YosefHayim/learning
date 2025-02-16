const removeUnnecessaryTags = (text) => {
  return text.replace(/<[^>]*>/g, "");
};

module.exports = removeUnnecessaryTags;
