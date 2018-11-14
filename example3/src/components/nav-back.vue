<template>
    <div class="nav-back">
        <div class="holder"/>
        <div class="real">
            <div class="back" @click="handleBack">
                返回
            </div>
            <div class="title" v-if="!!title">{{title}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NavBack',
        props: {
            title: {
                type: String
            }
        },
        methods: {
            handleBack () {
                if (history.length > 1) {
                    this.$router.back();
                } else {
                    this.$router.replace({ name: 'home' });
                }
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "_var";

    .nav-back {
        @h: 1rem;
        .real {
            position: fixed;
            top: 0;
            left: 0;
            height: @h;
            width: 100%;
            padding: 0 1rem;
            z-index: 80;
            background-color: #fff;
            box-shadow: 0px 0px 10px 3px rgba(0,0,0,.2);

            .back {
                @l: .5rem;
                position: absolute;
                top: 0;
                left: 0;
                color: @theme-color;
                width: 1rem;
                text-align: center;
                line-height: @h;
                svg {
                    display: block;
                    width: @l;
                    height: @l;
                    path {
                        fill: #fff;
                    }
                }
            }

            .title {
                text-align: center;
                line-height: 1rem;
                font-size: .36rem;
            }
        }
        .holder {
            width: 100%;
            height: @h;
        }
    }
</style>
