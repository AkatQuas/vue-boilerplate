<template>
    <div class="page-404">
        <div class="img">
            <img src="@/assets/404.png" alt="">
        </div>
        <div v-if="zh">
            <h1 class="title">额！相关页面不存在...</h1>
            <p class="desc">请检查你的地址~</p>
            <p class="back-btn">
                <span @click="handleBack">返回</span>
            </p>
        </div>
        <div v-if="en">
            <h1 class="title">Page Not Found</h1>
            <p class="desc">Error 404</p>
            <p class="back-btn">
                <span @click="handleBack">Back</span>
            </p>
        </div>
    </div>
</template>

<script>
    import { ROUTE_NAME } from '@/router/route';

    export default {
        name: 'not-found',
        data: () => {
            const language = navigator['browserLanguage'] ? navigator['browserLanguage'] : navigator.language;
            const zh = language.indexOf('zh') > -1;
            const en = language.indexOf('en') > -1;
            return {
                zh,
                en
            };
        },
        methods: {
            handleBack () {
                const { $router } = this;
                if (window.history.length > 2) {
                    $router.back();
                } else {
                    $router.replace({
                        name: ROUTE_NAME.LOGIN
                    });
                }

            }
        }
    };
</script>

<style lang="less" scoped>
    .page-404 {
        text-align: center;
        margin-top: 160px;
        .img {
            margin: 20px auto;
            width: 400px;
            img {
                width: 100%;
            }
        }
        .title {
            color: #59a9f0;
            font-size: 32px;
        }
        .desc {
            font-size: 28px;
            color: #b8b8b8;
        }
        .back-btn {
            padding: 10px 0 0;
            span {
                background-color: #60b2f6;
                color: #fff;
                padding: 10px 30px;
                display: inline-block;
                border-radius: 10px;
            }
        }
    }
</style>
