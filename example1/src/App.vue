<template>
    <div id="app">
        <transition mode="out-in" name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="scss" scoped>

</style>

<script>
    export default {
        name: 'app',
        components: {}
    };
</script>

<style lang="scss">
    @import "style/mobile.css";

    /* @import "style/pc.css"; */

    /* @import "style/iakit.css"; */

    #app {
        /*max-width: 540px;*/
    }
    .fade-enter-active {
        animation: fade-in .3s ease-out forwards;
    }

    .fade-leave-active {
        animation: fade-out .3s ease-in forwards;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
</style>
