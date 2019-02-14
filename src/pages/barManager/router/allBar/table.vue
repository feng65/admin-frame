<template>
    <div>
        <div class="table-header row">
            <div>
                <input type="checkbox"
                    v-model="isSelectAll"
                    @change="selectAllChange">
            </div>
            <div>
                网吧名称/网吧ID
            </div>
            <div>
                所在分组
            </div>
            <div>
                外网IP
            </div>
            <div>服务器</div>
            <div>客户机</div>
            <div>路由器</div>
            <div>授权验证端口</div>
            <div>远程代理端口</div>
            <div>操作</div>
        </div>
        <div class="table-body">
            <div class=row
                v-for="(item,index) in cacheTableList"
                :key="index">
                <!-- 选中 -->
                <div>
                    <input type="checkbox" v-model="item.select">
                </div>
                <!-- 网吧名以及id -->
                <div class=bar-name>
                    <p v-text="item.barName"></p>
                    <p v-text="item.barId"></p>
                </div>
                <!-- 网吧分组名 -->
                <div>
                    <span v-text="item.groupName"></span>
                </div>
                <!-- 外网ip -->
                <div>
                    <span v-text="item.outerIp"></span>
                </div>
                <!-- 服务器 -->
                <div class=server>
                    <div class="{'online':item.serverOnline>0,'offline':item.serverOnline==0}">
                        <!-- 在线的icon -->
                        <img src=@/assets/img/icon/u424.png
                            v-show="item.serverOnline>0" />
                        <!-- 离线的icon -->
                        <img src=@/assets/img/icon/u422.png
                            v-show="item.serverOnline==0" />
                        <span>
                            在线
                        </span>
                        <span v-text="item.serverOnline"></span>
                        <span>/</span>
                        <span v-text="item.serverTotal"></span>
                    </div>
                </div>
                <!-- 客户机在线数/总数 -->
                <div>
                    <span v-text="item.clientOnline"></span>
                    <span>/</span>
                    <span v-text="item.clientTotal"></span>
                </div>
                <!-- 路由器总数 -->
                <div>
                    <span v-text="item.routerTotal"></span>
                </div>
                <!-- 授权验证端口 -->
                <div>
                    <span v-text="item.authPort"></span>
                </div>
                <!-- 远程代理端口 -->
                <div>
                    <span v-text="item.remotePort"></span>
                </div>
                <div>
                    <a href=#>远程</a>
                    <a href=#>生成远程授权码</a>
                    <a href=#>更多</a>
                </div>
            </div>
            <!-- <div class=row>
                <div>
                    <input type="checkbox">
                </div>
                <div class=bar-name>
                    <p>ABC网吧</p>
                    <p>12345678</p>
                </div>
                <div>
                    分组1
                </div>
                <div>
                    192.168.100.128
                </div>
                <div class=server>
                    <div class=online>
                    <img src=@/assets/img/icon/u422.png />
                    <span>
                        在线
                    </span>
                    <span>1</span>
                    <span>/</span>
                    <span>1</span>
                </div>
                    <div class=offline>
                        <img src=@/assets/img/icon/u424.png />
                        <img src=@/assets/img/icon/u422.png
                            style="display:none" />
                        <span>
                            在线
                        </span>
                        <span>0</span>
                        <span>/</span>
                        <span>1</span>
                    </div>
                </div>
                <div>客户机</div>
                <div>路由器</div>
                <div>授权验证端口</div>
                <div>远程代理端口</div>
                <div>操作</div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'tableData',
    props: {
        tableList: {
            type: Array,
            default() {
                return []
            }
        }
    },
    data() {
        return {
            isSelectAll: false,
            cacheTableList: []
        }
    },
    watch:{
        tableList(){
            this.isSelectAll = false
            this.cacheTableList = this.tableList.map((item, index) => {
                item.select = false
                return item
            })
        }
    },
    // computed: {
    //     // 表格数据进行一次转换,添加选中数据
    //     tableListVal() {
    //         this.isSelectAll = false
    //         console.log(234)
    //         this.cacheTableList = this.tableList.map((item, index) => {
    //             item.select = false
    //             return item
    //         })
    //         return this.cacheTableList
    //     }
    // },
    methods: {
        selectAllChange() {
            if (this.isSelectAll) {
                this.cacheTableList.forEach((item, index) => {
                    item.select = true
                })
            }else{
                this.cacheTableList.forEach((item, index) => {
                    item.select = false
                })
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";

@mixin ellipsis() {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.row {
    width: 100%;
    overflow: hidden;
    > div {
        float: left;
        text-align: left;
        text-overflow: ellipsis;
        span {
            @include ellipsis();
            display: inline-block;
            max-width: 100%;
        }
        p {
            @include ellipsis();
            max-width: 100%;
        }
        a {
            text-align: left;
            text-indent: 0px;
            margin-right: 8px;
            color: $blue;
        }
        input {
            cursor: pointer;
        }
    }
    > div:nth-child(1) {
        width: 4%;
        text-indent: 10px;
        input {
            position: relative;
            top: 2px;
        }
    }
    > div:nth-child(2) {
        width: 14%;
    }
    > div:nth-child(3) {
        width: 10%;
    }
    > div:nth-child(4) {
        width: 10%;
    }
    > div:nth-child(5) {
        width: 10%;
    }
    > div:nth-child(6) {
        width: 6%;
    }
    > div:nth-child(7) {
        width: 6%;
    }
    > div:nth-child(8) {
        width: 8%;
    }
    > div:nth-child(9) {
        width: 8%;
    }
    > div:nth-child(10) {
        width: 22%;
    }
}

.table-header {
    text-align: left;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background: #f5f6fa;
    overflow: hidden;
    > div {
        height: 30px;
        line-height: 30px;
    }
}
.table-body {
    > div {
        height: 50px;
        line-height: 50px;
    }
    .row {
        border-bottom: 1px solid #e5e5e5;
        transition: all 0.2s;
        &:hover {
            background: rgba(245, 246, 250, 0.5);
        }
    }
}

.bar-name {
    p {
        line-height: normal;
        line-height: 14px;
    }
    p:nth-child(1) {
        padding-top: 10px;
    }
}
.server {
    .online {
        span {
            color: $green;
        }
    }
    .offline {
        span {
            color: $gray-word;
        }
    }
    img {
        position: relative;
        vertical-align: top;
        top: 18px;
        margin-right: 4px;
    }
}
</style>
