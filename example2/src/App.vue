<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    };
</script>

<style lang="less">
    html, body {
        background-color: #fcfcfc;
        height: 100%;
    }

    #app {
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .clearfix {
        &::before {
            display: table;
            content: "";
        }

        &::after {
            display: table;
            content: "";
            clear: both;
        }
    }
</style>
