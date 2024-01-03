const axios = require("axios");
const crypto = require("crypto");
const postsService = require("../service/postsService");
const postsData = require("../data/postsData");

const generateText = function () {
  return crypto.randomBytes(20).toString("hex");
};

const request = function (url, method, data) {
  return axios({
    url,
    method,
    data,
  });
};

test("Should get posts", async function () {
  // given - dado que
  const post1 = await postsService.savePost({
    title: generateText(),
    content: generateText(),
  });
  const post2 = await postsService.savePost({
    title: generateText(),
    content: generateText(),
  });
  const post3 = await postsService.savePost({
    title: generateText(),
    content: generateText(),
  });

  // when - quando acontecer

  const response = await request("http://localhost:3000/posts", "get");
  const posts = response.data;
  // then - então
  expect(posts).toHaveLength(3);
  await postsService.deletePost(post1.id);
  await postsService.deletePost(post2.id);
  await postsService.deletePost(post3.id);
});

test("Should save a post", async function () {
  // given - dado que
  const data = {
    title: generateText(),
    content: generateText(),
  };

  // when - quando acontecer
  const response = await request("http://localhost:3000/posts", "post", data);
  const post = response.data;
  // then - então
  expect(post.title).toBe(data.title);
  expect(post.content).toBe(data.content);
  await postsService.deletePost(post.id);
});

test("Should update a post", async function () {
  // given - dado que
  const post = await postsService.savePost({
    title: generateText(),
    content: generateText(),
  });
  post.title = generateText();
  post.content = generateText();

  // when - quando acontecer
  await request(`http://localhost:3000/posts/${post.id}`, "put", post);
  const updatePost = await postsService.getPost(post.id);
  // then - então
  expect(updatePost.title).toBe(post.title);
  expect(updatePost.content).toBe(post.content);
  await postsService.deletePost(post.id);
});

test("Should delete a post", async function () {
  // given - dado que
  const post = await postsService.savePost({
    title: generateText(),
    content: generateText(),
  });

  // when - quando acontecer
  await request(`http://localhost:3000/posts/${post.id}`, "delete");
  const posts = await postsService.getPosts();
  // then - então
  expect(posts).toHaveLength(0);
});
