<template>
  <div id="app">
    <div id="nav">
      <template v-for="(item,idx) in list">
        <router-link :to="item.link" :key="item.link">
          {{item.label}}
          <span v-if="idx < (list.length -1)">|</span>
        </router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          label: 'Home',
          link: '/',
        },
        {
          label: 'About',
          link: '/about',
        },
        {
          label: 'Join',
          link: '/join',
        },
        {
          label: 'Post',
          link: '/post',
        },
        {
          label: 'AsyncCallback',
          link: '/async-callback',
        },
      ],
    };
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
