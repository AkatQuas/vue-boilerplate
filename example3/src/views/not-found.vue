<template>
    <div class="not-found">
        <img :src="NotFoundPng" class="img" alt="">
        <p>页面不存在！</p>
        <TypeButton type="primary" @click="home">返回首页</TypeButton>
    </div>
</template>

<script>
    import NotFoundPng from '@/assets/404.png';

    export default {
        data: () => ({
            NotFoundPng
        }),
        methods: {
            home () {
                this.$router.replace({ name: 'home' });
            }

        }
    };
</script>

<style lang="less" scoped>
    .not-found {
        text-align: center;
        padding-top: 1.6rem;
        font-size: .4rem;
        .img {
            margin: .2rem auto;
            width: 6rem;
        }

    }
</style>
