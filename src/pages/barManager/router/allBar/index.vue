<template>
    <div ref="box"
        style="display:none;">
        <!-- 头部 -->
        <div class=bar-manager-header>
            <header-top></header-top>
        </div>
        <!-- 表格部分 -->
        <div class="table-content">
            <table-content
                :table-list="tableData.list"></table-content>
        </div>
        <div class="table-pagination">
            <page-component :total="total"
                :current-page='page'
                @pagechange="getAllBarList"></page-component>
        </div>
    </div>
</template>

<script>
// 头部tag内容
import HeaderTop from './header'
// 表格内容
import TableContent from './table'
// 分页功能
import PageComponent from '_c/pagination/pageComponent'

import { getBarList } from '@/requests/bar'

export default {
    name: 'allBar',
    components: {
        HeaderTop,
        TableContent,
        PageComponent
    },
    data() {
        return {
            total: 0,
            page: 1,
            tableData:{
                list:[]
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.$domFn.addAnimateClass(this.$refs.box, 'animated fadeInRight')
                this.$refs.box.style.display = "block"
            })
        })
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>{
            vm.getAllBarList(1)
        })
    },
    methods: {
        // 获取所有网吧列表
        async getAllBarList(page) {
            let res= await getBarList({
                groupName: "",
                page,
                pageSize: 20,
                searchTxt: ""
            })
            this.tableData.list =res.list
            this.total=parseInt(res.total)
            this.page=parseInt(res.pageNo)
        }
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";

.bar-manager-header {
    height: 70px;
    line-height: 70px;
    border-bottom: 1px solid #d9dee4;
}
.table-content {
    padding-top: 10px;
    padding-left: 30px;
    padding-right: 30px;
}
.table-pagination {
    text-align: right;
    padding-right: 80px;
    padding-top: 20px;
    > div {
        display: inline-block;
    }
}
</style>
