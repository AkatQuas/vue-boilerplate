<template>
    <div class="concern-bar">
        <div class="holder"></div>
        <div class="bar-wrapper">
            <div class="bar">
                <div
                        v-if="!open"
                        class="concern list"
                >
                    <div class="concern-list">
                        <div
                                v-for="item in my_concern"
                                :class="['list-item', concern_active === item.code ? 'active' : '']"
                                :key="item.code"
                                @click="handleChoose(item.code)"
                        >{{item.value}}
                        </div>
                    </div>
                </div>

                <div
                        v-else
                        class="concern all"
                >所有频道
                </div>

                <div :class="['btn', open ? 'open': 'close']" @click="toggle">谢谢</div>
            </div>
            <div :class="['fields', open ? 'open' : 'close']">
                <div class="field-list">
                    <div
                            v-for="item in concerns"
                            :class="['field-item', my_concern_codes.includes(item.code) ? 'active' : '']"
                            :key="item.code"
                            @click="toggleConcern(item)"
                    >
                        {{item.value}}
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { GETTERS, MUTATIONS } from '../store/types';
    import { mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'ConcernBar',
        data: () => ({
            open: false,
            active: '',
            list: []
        }),
        computed: {
            ...mapGetters({
                concerns: GETTERS.SETTING,
                concern_active: GETTERS.SETTING_ACTIVE,
                my_concern: GETTERS.SETTING_ME
            }),
            my_concern_codes () {
                return this.$store.getters[GETTERS.SETTING_ME].map(item => item.code);
            }
        },
        methods: {
            toggle () {
                const { open } = this.$data;

                this.$data.open = !open;
                open && this.saveConcern();
            },
            handleChoose (code) {
                this.$store.commit(MUTATIONS.SETTING_ACTIVE_SET, code);
            },
            ...mapMutations({
                toggleConcern: MUTATIONS.SETTING_ME_TOGGLE,
                saveConcern: MUTATIONS.SETTING_ME_SAVE
            })
        },
        created () {
        }
    };
</script>

<style lang="less" scoped>
    @import "_var";

    .concern-bar {
        @l: 1rem;
        @h: .75rem;
        position: relative;

        .holder {
            height: @h;
            margin-bottom: .2rem;
        }

        .bar-wrapper {
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            right: 0;
            background-color: #fff;
            height: @h;
            z-index: 99;
            border-bottom: 1px solid @border-color;
            box-shadow: 0px 3px 10px 3px #ececec;
            .bar {
                padding-left: @l;
                display: flex;
                .concern {
                    flex: 1;

                    &.list {
                        width: 100%;
                        height: 100%;
                        overflow-x: scroll;

                        .concern-list {
                            display: flex;
                            height: 100%;

                            .list-item {
                                text-align: center;
                                line-height: .75rem;
                                margin: 0 .2rem;
                                color: #999;
                                white-space: nowrap;
                                position: relative;

                                &.active {
                                    color: #000;
                                    &:after {
                                        content: ' ';
                                        position: absolute;
                                        height: 0;
                                        left: 10%;
                                        right: 10%;
                                        bottom: .1rem;
                                        border-bottom: .06rem solid #1d8ce0;
                                    }
                                }
                            }
                        }

                    }
                    &.all {
                        text-align: center;
                        line-height: @h;
                    }

                }

                .btn {
                    width: @l;
                    height: @h;
                    text-align: center;
                    line-height: @h;

                    &.open {
                        color: red;
                    }

                    &.close {
                        color: #1d8ce0;
                    }
                }
            }

            .fields {
                overflow: hidden;
                transition: height 500ms;
                z-index: 98;
                background-color: #fff;
                border-bottom: 1px solid @border-color;
                height: 0;

                &.open {
                    padding-top: .1rem;
                    height: 3rem;
                }

                .field-list {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    .field-item {
                        border: 1px solid @border-color;
                        border-radius: 1rem;
                        padding: .1rem .2rem;
                        margin: .05rem .1rem;
                        background-color: #f0f0f0;

                        &.active {
                            color: @theme-color;
                        }
                    }
                }
            }
        }
    }

</style>