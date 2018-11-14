<template>
    <div class="page-404">
        <div class="img">
            <img src="./404.png" alt="">
        </div>
        <div v-if="zh">
            <h1 class="title">额！你的页面走丢了...</h1>
            <p class="desc">休息一下返回瞧瞧吧~</p>
            <p class="back-btn">
                <span @click="$router.back()">返回</span>
            </p>
        </div>
        <div v-if="en">
            <h1 class="title">Page Not Found</h1>
            <p class="desc">Error 404</p>
            <p class="back-btn">
                <span @click="$router.back()">Back</span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .page-404 {
        text-align: center;
        margin-top: 1.6rem;

        .img {
            margin: .2rem auto;
            width: 10rem;

            img {
                width: 100%;
            }
        }

        .title {
            color: #59a9f0;
            font-size: 1rem;
        }

        .desc {
            font-size: .8rem;
            color: #b8b8b8;
        }

        .back-btn {
            padding: .1rem 0 0;

            span {
                background-color: #60b2f6;
                color: #fff;
                padding: .3rem 2.2rem;
                display: inline-block;
                border-radius: .2rem;
            }
        }
    }
</style>

<script>
    export default {
        name: 'page-404',
        data: () => ({
            zh: true,
            en: false
        }),
        created () {
            const language = navigator['browserLanguage'] ? navigator['browserLanguage'] : navigator.language;
            this.zh = language.indexOf('zh') > -1;
            this.en = language.indexOf('en') > -1;
        }
    };
</script>
