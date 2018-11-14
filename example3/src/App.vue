<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    import { ACTIONS } from '@/store/types';

    export default {
        created () {
            this.$store.dispatch(ACTIONS.SETTING_FETCH);
        }
    };
</script>
<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html, body {
        background-color: #fcfcfc;
    }
</style>
