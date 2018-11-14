<template>
    <div>
        <div class="pages">
            <span
                    v-for="item in pages"
                    v-bind:key="item.key"
                    @click="goPage(item.key)"
            >{{item.label}}</span>
        </div>
        <hr>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <hr>
        <PaginationTable
                :columns="columns"
                :fetchData="fetchData"
        >
            <el-table-column
                    slot="right-col-menu"
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>

        </PaginationTable>
    </div>
</template>

<script>
    import { ROUTE_NAME } from '@/router/route';
    import { API, getData } from '@/http';

    export default {
        name: 'test',
        data: () => ({
            pages: Object.keys(ROUTE_NAME).map(key => ({
                label: key,
                key
            })),
            columns: [
                {
                    prop: 'id',
                    label: 'ID'
                },
                {
                    prop: 'memo',
                    label: 'MEMO'
                },
                {
                    prop: 'appCode',
                    label: 'app code'
                },
                {
                    prop: 'appName',
                    label: 'app code !'
                },
                {
                    prop: 'gitAddr',
                    label: 'git address'
                }
            ]
        }),
        methods: {
            goPage (key) {
                this.$router.push({
                    name: ROUTE_NAME[key]
                });
            },
            handleClick (a) {
                console.log(a);

            },
            fetchData (pageNum, pageSize) {
                return getData(API.APP_LIST, {
                    pageSize,
                    pageNum
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .pages {
        display: flex;
        justify-content: space-around;
        span {
            margin: 10px;
            cursor: pointer;
        }
    }

</style>