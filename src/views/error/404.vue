<template>
    <div class="page-404">
        <div class="img">
            <img src="./404.png" alt="">
        </div>
        <div v-if="zh">
            <h1>访问的页面不存在</h1>
            <p>页面未找到! <span @click="$router.back()">返回上一页</span> 或者 <span @click="$router.replace('/')">回到首页</span></p>
        </div>
        <div v-if="en">
            <h2>Page Not Found, Error 404</h2>
            <p>You can return to
                <span @click="$router.replace('/')">home page</span>,
                or return to <span @click="$router.back()">previous page</span>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .page-404 {
        text-align: center;
        margin-top: 80px;

        .img {
            margin: 10px auto;
            width: 200px;

            img {
                width: 100%;
            }
        }

        span {
            color: #66ccff;
            text-decoration: underline;
            cursor: pointer;
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
        created() {
            const language = navigator['browserLanguage'] ? navigator['browserLanguage'] : navigator.language;
            this.zh = language.indexOf('zh') > -1;
            this.en = language.indexOf('en') > -1;
        }
    };
</script>