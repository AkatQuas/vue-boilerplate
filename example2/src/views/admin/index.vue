<template>
    <el-container style="height: 100%;">
        <el-header>
            <MyHeader/>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <SideBar/>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import MyFooter from '@/components/my-footer';
    import MyHeader from '@/components/my-header';
    import SideBar from '@/components/side-bar';

    export default {
        name: 'admin',
        components: {
            SideBar,
            MyHeader,
            MyFooter
        }
    };
</script>

<style lang="less">
    .el-header, .el-aside {
        background-color: #fff;
    }

    .el-header {
        z-index: 99;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
    }

</style>
