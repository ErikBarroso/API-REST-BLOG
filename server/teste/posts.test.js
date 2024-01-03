const axios = require("axios");
const crypto = require("crypto");
const postsService = require("../service/postsService");
const { func } = require("../infra/database");

const generateText = function () {
  return crypto.randomBytes(20).toString("hex");
};

const request = function (url, method, data) {
return axios({
    url, method, data})
}

test.only("Should get posts", async function () {
  // given - dado que
  const post1 = await postsService.savePost( {
    title: generateText(),
    content: generateText()
  });
    const post2 = await postsService.savePost( {
    title: generateText(),
    content: generateText()
  });
    const post3 = await postsService.savePost( {
    title: generateText(),
    content: generateText()
  });

  // when - quando acontecer

  const response = await  request('http://localhost:3000/posts',  'get')
  const posts = response.data;
  // then - então
  expect(posts).toHaveLength(3);
  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
});

