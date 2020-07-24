<template>
  <div>
    <h3>{{ post.title }}</h3>
    <p>{{ post.content}}</p>
    <button @click="handleBack">Go Back</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ACTIONS, GETTERS } from '../../store/types';

export default {
  name: 'PostDetail',
  mounted() {
    const { slug } = this.$route.params;
    this.$store.dispatch(ACTIONS.getPost, { slug });
  },
  computed: mapGetters({
    post: GETTERS.post,
  }),
  metaInfo() {
    const { post } = this;
    return {
      title: post.title,
      meta: [{ vmid: 'description', name: 'description', content: post.title }],
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
  },
};
</script>
