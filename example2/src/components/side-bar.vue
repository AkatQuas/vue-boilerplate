<template>
    <div>
        <el-menu
                @select="handleSelect"
                default-active="apps"
        >
            <template v-for="item in menus">
                <el-menu-item :index="item.index" :key="item.index">
                    <i :class="item.icon"></i>
                    <span slot="title">{{item.label}}</span>
                </el-menu-item>
            </template>
        </el-menu>

    </div>

</template>

<script>
    import { ROUTE_NAME } from '@/router/route';

    export default {
        name: 'SideBar',
        data: () => ({
            menus: [
                {
                    label: 'label1',
                    icon: 'el-icon-document',
                    index: ROUTE_NAME.APPS
                },
                {
                    label: 'label3',
                    icon: 'el-icon-menu',
                    index: ROUTE_NAME.MIDDLEWARES
                },

            ]
        }),
        methods: {
            handleSelect (index) {
                const { $route } = this;
                if (index === $route.name) {
                    return false;
                }
                this.$router.push({
                    name: index
                });
            }
        }
    };
</script>

<style scoped>

</style>