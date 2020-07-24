import { ACTIONS, GETTERS, MUTATIONS } from './types';

export default {
  state: {
    post: {
      title: '',
      content: '',
      slug: '',
      published: false,
    },
    posts: [
      {
        slug: 'a-sample-blog-post',
        title: 'A Sample Blog Post',
        content: 'This is the blog post content',
        published: true,
      },
      {
        slug: 'an-unpublished-blog-post',
        title: 'An Unpublished Blog Post',
        content: 'This is the blog post content',
        published: false,
      },
      {
        slug: 'another-blog-post',
        title: 'Another Blog Post',
        content: 'This is the blog post content',
        published: true,
      },
    ],
  },

  getters: {
    [GETTERS.post]: (state) => state.post,
    [GETTERS.publishedPosts]: (state) => state.posts.filter((post) => post.published),
    [GETTERS.publishedPostsCount]: (_, getters) => getters.publishedPosts.length,
  },

  mutations: {
    [MUTATIONS.getPost]: (state, { slug }) => {
      state.post = state.posts.find((post) => post.slug === slug);
    },
  },

  actions: {
    [ACTIONS.getPost]: ({ commit }, payload) => {
      commit('getPost', payload);
    },
  },
};
