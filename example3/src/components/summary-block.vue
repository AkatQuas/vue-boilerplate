<template>
    <div class="summary-block" @click="$emit('click', uid)">
        <div class="title">{{ title }}</div>
        <div class="source">
            {{ source }} {{datetime}}
        </div>
        <div
                v-if="!shot && thumbnail"
                class="thumbnail"
                :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        />
        <div
                v-if="shot"
                class="shot"
                :style="{backgroundImage: 'url(' + shot + ')'}"
        />
    </div>
</template>

<script>
    export default {
        name: 'SummaryBlock',
        props: {
            uid: {
                required: true
            },
            title: {
                type: String,
                required: true
            },
            source: {
                type: String
            },
            datetime: {
                type: String
            },
            thumbnail: {
                type: String
            },
            shot: {
                type: String
            }
        }

    };
</script>

<style lang="less" scoped>
    @import "_var";

    @px: .2rem;
    @py: .5rem;
    .summary-block {
        position: relative;
        padding: @px @py;
        height: auto;
        min-height: 2rem;
        background-color: #fff;
        border-bottom: 1px solid @border-color;

        .title {
            font-size: .3rem;
        }

        .source {
            color: @grey-color;
            font-size: .2rem;
            position: absolute;
            left: @py;
            bottom: @px;
        }

        .thumbnail {
            @l: 1.5rem;
            position: absolute;
            top: @px;
            right: @py;
            width: @l;
            height: @l;
            background: transparent top left no-repeat;
            background-size: auto 100%;
        }
        .shot {
            width: 100%;
            margin: .2rem auto .5rem;
            height: 2.6rem;
            overflow: hidden;
            background: transparent center no-repeat;
            background-size: 100% auto;
            box-shadow: 0 5px 10px 2px rgba(0, 0, 0, .3);
        }
    }
</style>
