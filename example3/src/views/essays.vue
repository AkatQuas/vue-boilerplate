<template>
    <div class="essays">
        <ConcernBar/>

        <template v-for="item in list">
            <SummaryBlock
                    @click="handleBlockClick"
                    :uid="item.uid"
                    :key="item.uid"
                    :title="item.title"
                    :source="item.source"
                    :datetime="item.datetime"
                    :thumbnail="item.thumbnail"
                    :shot="item.shot"
            />
        </template>

        <p class="end-line">你触及到我的底线了！</p>
    </div>
</template>

<script>
    import SummaryBlock from '@/components/summary-block';
    import ConcernBar from '@/components/concern-bar';
    import * as API from '@/http/api'
    import { getData } from '../http';

    export default {
        components: {
            [ConcernBar.name]: ConcernBar,
            [SummaryBlock.name]: SummaryBlock
        },
        data: () => {
            return {

                list: [
                    {
                        uid: '1',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds',
                        shot: 'https://tse1-mm.cn.bing.net/th?id=OIP.Q38tOcKyrGPy3v6FWSYQgQHaEE&w=185&h=105&c=8&rs=1&qlt=90&pid=3.1&rm=2'
                    },
                    {
                        uid: '2',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    },
                    {
                        uid: '3',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    },
                    {
                        uid: '4',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    },
                    {
                        uid: '5',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    },
                    {
                        uid: '6',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    },
                    {
                        uid: '7',
                        title: 'CSS 选择器参考手册',
                        source: 'Bing网络',
                        datetime: '2018-10-11',
                        thumbnail: 'http://s.cn.bing.net/th?id=OJ.mDkr90Thwm5CCQ&w=75&h=75&c=8&pid=MSNJVFeeds'
                    }
                ]
            };
        },
        methods: {
            getEssays () {
            },
            handleBlockClick (id) {
                this.$router.push({
                    name: 'essay',
                    params: {
                        id
                    }
                });
            }
        },
        created() {
        }
    };
</script>

<style lang="less" scoped>
    .essays {

        .end-line {
            padding: .2rem 0 .1rem;
            text-align: center;
            color: #999;
        }
    }
</style>
