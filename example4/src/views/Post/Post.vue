<template>
  <section>
    <router-view></router-view>
  </section>
</template>

<script>
export default {
  metaInfo: {
    title: 'Post Home',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'The home page of posts',
      },
    ],
  },
};
</script>
