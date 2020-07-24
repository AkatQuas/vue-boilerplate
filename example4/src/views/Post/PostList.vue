<template>
  <section>
    <h4>
      There are
      <u>{{ postsCount }}</u> published posts
    </h4>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <router-link :to="'post/' + post.slug">{{ post.title }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import { GETTERS } from '@/store/types';

export default {
  name: 'PostList',
  computed: mapGetters({
    posts: GETTERS.publishedPosts,
    postsCount: GETTERS.publishedPostsCount,
  }),
};
</script>
