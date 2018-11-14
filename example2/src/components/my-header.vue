<template>
    <div class="header">
        <div class="holder">example</div>
        <el-dropdown @command="handleCommand">
            <span>{{name}}<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import { ACTIONS, GETTERS } from '@/store/types';
    import { ROUTE_NAME } from '@/router/route';

    export default {
        name: 'MyHeader',
        computed: {
            name () {
                return this.$store.getters[GETTERS.USER_NAME] || 'username';
            }
        },
        methods: {
            handleCommand (command) {
                switch (command) {
                case 'logout':
                    this.handleLogout();
                default:
                    return false;
                }
            },
            handleLogout () {
                this.$store.dispatch(ACTIONS.USER_LOGOUT).then(this.jump);
            },
            jump () {
                this.$router.replace({
                    name: ROUTE_NAME.LOGIN
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .header {
        height: 100%;
        display: flex;
        align-items: center;

        .holder {
            flex: 1;
        }

    }

</style>