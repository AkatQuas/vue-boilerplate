<template>
    <div class="home">
        <img src="../assets/logo.png">
        <h1>{{ msg }}</h1>
    </div>
</template>

<style lang="scss" scoped>
    .home {
        img {
            width: 5rem;
        }
    }

</style>

<script>
    export default {
        name: 'home',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        }
    };
</script>
