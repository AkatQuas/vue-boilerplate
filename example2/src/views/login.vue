<template>
    <div class="login">
        <el-card>
            <div slot="header" class="clearfix">
                <span>example System</span>
            </div>
            <el-form
                    label-position="left"
                    label-width="80px"
                    :model="form"
                    :rules="rules"
                    :ref="L"
            >
                <el-form-item label="账号" prop="username">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="form.password" type="password"/>
                </el-form-item>
            </el-form>

            <el-button
                    type="primary"
                    size="medium"
                    style="width: 100%;"
                    @click="handleLogin"
            >登录
            </el-button>
        </el-card>
    </div>
</template>

<script>
    import { ACTIONS } from '@/store/types';
    import { ROUTE_NAME } from '@/router/route';

    export default {
        name: 'login',
        data: () => ({
            L: 'l_ref',
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }),
        methods: {
            handleLogin () {
                const { L } = this.$data;
                this.$refs[L].validate(valid => {
                    if (valid) {
                        const { form } = this.$data;
                        this.$store.dispatch(ACTIONS.USER_LOGIN, form).then(this.jump);
                    }
                });
            },
            jump () {
                this.$router.replace({
                    name: ROUTE_NAME.APPS
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .login {
        width: 400px;
        margin: 200px auto 0;
    }
</style>