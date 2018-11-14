<template>
    <div class="menu-bar">
        <div
                :class="['item', {active: currentName === HOME}]"
                @touchend="rep(HOME)"
        >
            <HomeSvg/>
        </div>

        <div
                :class="['item', {active: currentName === ME}]"
                @touchend="rep(ME)"
        >
            <MeSvg/>
        </div>

    </div>
</template>

<script>
    import HomeSvg from '@/assets/home.svg';
    import MeSvg from '@/assets/me.svg';

    export default {
        components: {
            HomeSvg,
            MeSvg
        },
        data: () => ({
            HOME: 'home',
            ME: 'me'
        }),
        computed: {
            currentName () {
                return this.$route.name;
            }
        },
        methods: {
            rep (name) {
                this.$router.replace({ name });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "_var";

    .menu-bar {
        border-top: 1px solid @border-color;
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        .item {
            @l: .8rem;
            padding: 0.1rem 0.5rem;
            svg {
                width: @l;
                height: @l;
                display: block;
                path {
                    fill: @counter-theme-color;

                }
            }
            &.active svg path {
                fill: @theme-color;
            }
        }
    }
</style>
