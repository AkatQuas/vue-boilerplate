<template>
    <div>
        <NavBack title="反馈abc"/>
        <div class="textarea">
            <textarea placeholder="想要告诉我们点什么？" v-model="content"/>
        </div>
        <TypeButton type="primary" block @click="handleSubmit">提交</TypeButton>
    </div>
</template>

<script>
    import * as iakit from 'iakit';
    import { postData } from '../http';
    import { API } from '../http';

    export default {
        data: () => ({
            content: ''
        }),
        methods: {
            handleSubmit () {
                const { content } = this.$data;
                if (!content) {
                    return iakit.toast.showTop('你是不是忘了写内容啊？');
                }
                // todo
                // postData(API.FEEDBACK).then().catch();
            }
        }
    };
</script>

<style lang="less" scoped>
    .textarea {
        margin: .2rem;

        textarea {
            width: 100%;
            height: 4rem;
        }
    }
</style>
