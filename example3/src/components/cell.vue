<template>
    <div class="cell-wrapper" @touchend="handleTap">
        <div class="label">{{label}}</div>
        <div class="content" v-if="content">{{content}}</div>
        <div class="fn" v-if="!!fn"></div>
    </div>
</template>

<script>
    export default {
        name: 'Cell',
        props: {
            label: {
                type: String,
                default: '',
                required: true
            },
            content: {
                type: String,
                default: ''
            },
            fn: {
                type: [Function, null],
                default: null
            }
        },

        methods: {
            handleTap () {
                const { fn } = this.$props;
                fn && fn();
            }

        }
    };
</script>

<style lang="less" scoped>
    @import "_var";

    .cell-wrapper {
        background-color: #fff;
        border-top: 1px solid @border-color;
        border-bottom: 1px solid @border-color;
        display: flex;
        padding: .2rem;
        line-height: .5rem;

        &:last-of-type {
            margin-bottom: .5rem;
        }

        & + & {
            border-top-color: transparent;
        }
        .label {
            flex: 1;
        }

        .content {
            flex: 2;
            text-align: right;
        }

        .fn {
            display: inline-block;
            width: .2rem;
            height: .5rem;
            background: transparent url("../assets/next.png") no-repeat center;
            background-size: auto .4rem;
        }
    }
</style>
