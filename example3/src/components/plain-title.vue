<template>
    <div class="plain-title">{{title}}</div>
</template>

<script>
    export default {
        name: 'PlainTitle',
        props: {
            title: {
                type: String,
                required: true
            }
        }
    };
</script>

<style lang="less" scoped>
    .plain-title {
        background-color: transparent;
        font-size: .22rem;
        color: #999;
        padding: .2rem .2rem .1rem;
    }
</style>