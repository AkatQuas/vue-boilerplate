<template>
    <div>
        <el-table
                :data="tableData"
                border
                style="width: 100%; margin-bottom: 20px;">
            <el-table-column
                    v-for="col in columns"
                    :fixed="col.fixed"
                    :key="col.prop"
                    :prop="col.prop"
                    :label="col.label"
                    :width="col.width">
            </el-table-column>
            <slot name="right-col-menu"></slot>
        </el-table>

        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pageNum"
                :page-sizes="pageSizes"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next"
                :total="total"
                style="text-align:right;"
        >
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'PaginationTable',
        props: {
            fetchData: {
                type: Function,
                required: true
            },
            columns: {
                type: Array,
                required: true
            }
        },
        data: () => {
            const pageSizes = [10, 20, 50, 100];
            return {
                tableData: [],
                pageNum: 1,
                pageSizes,
                pageSize: pageSizes[0],
                total: 0
            };
        },
        methods: {
            handleSizeChange (size) {
                this.$data.pageSize = size;
                this.getData();
            },
            handleCurrentChange (page) {
                this.$data.pageNum = page;
                this.getData();
            },
            refresh () {
                this.getData();
            },
            reload () {
                this.handleCurrentChange(1);
            },
            getData () {
                const { pageNum, pageSize } = this.$data;
                this.fetchData(pageNum, pageSize).then(res => {
                    this.$data.tableData = res.list;
                    this.$data.total = res.total;
                });
            }
        },
        mounted () {
            this.getData();
        }
    };
</script>

<style lang="less">
    .el-pagination {
        /*text-align: right;*/
    }

</style>