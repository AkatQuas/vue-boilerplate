<template>
    <div id="app">
        <transition mode="out-in" name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<style lang="scss" scoped="">

</style>

<script>
    export default {
        name: 'app',
        components: {}
    };
</script>

<style lang="scss">
    @import "style/normalize.css";

    .slide-enter-active {
        animation: slide-in .3s ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out .3s ease-in forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
</style>
