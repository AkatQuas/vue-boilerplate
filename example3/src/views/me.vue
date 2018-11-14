<template>
    <div class="me-wrapper">
        <div class="info">

            info
        </div>
        <PlainTitle title="About"/>
        <Cell label="关于"/>
        <Cell label="反馈给我们" :fn="goFeedback"/>
        <Cell label="版本号" content="1.0.0"/>
    </div>
</template>

<script>
    export default {
        methods: {
            goFeedback () {
                this.$router.push({ name: 'feedback' });
            }
        }
    };
</script>

<style lang="less" scoped>
    @import "../components/_var";

    .me-wrapper {
        .info {
            padding: 1rem;
            background-color: @theme-color;
            color: #fff;
            margin-bottom: .5rem;
        }
    }
</style>
