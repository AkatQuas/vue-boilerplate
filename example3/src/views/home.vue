<template>
    <div class="home">
        <div class="content">
            <router-view></router-view>
        </div>
        <!--<div class="menu"> <MenuBar /> </div>-->
    </div>
</template>

<script>
    // import MenuBar from '@/components/menu-bar.vue';

    export default  {
        // components: {
        //     MenuBar
        // }
    }
</script>

<style lang="less" scoped>
    @import "../components/_var";

    .home {
        height: 100vh;
        display: flex;
        flex-direction: column;

        .content {
            flex: 1;
            overflow-y: scroll;
        }
        .menu {
        }
    }
</style>
