<template>
    <div>
        <NavBack title=""/>
        <div class="essay-wrapper">
            <p class="source">来源：腾讯科技 2018-11-01</p>
            <p class="author">作者：小李子</p>
            <p class="divide" />
            <div class="content"> </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            l: 1
        }),
        created () {
            console.log(this.$route.params);
        },
        beforeRouteEnter (to, from, next) {

            next(vm => {

                console.log(vm.$data.l);
            });
        }

    };
</script>

<style lang="less" scoped>
    @import "../components/_var";

    .essay-wrapper {
        padding: .3rem .5rem;

        .source, .author {
            color: @grey-color;
            font-size: .2rem;
        }
        .divide {
            width: 45%;
            height: 0;
            border-bottom: 2px solid @border-color;
        }

    }

</style>
