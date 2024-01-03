const postsData = require("../data/postsData");

//usecase
exports.getPosts = function () {
  return postsData.getPosts();
};

exports.savePost = function (post) {
  return postsData.savePost(post);
};

exports.deletePost = function (id) {
  return postsData.deletePost(id);
};
