const postsData = require("../data/postsData");

//usecase
exports.getPosts = function () {
  return postsData.getPosts();
};
