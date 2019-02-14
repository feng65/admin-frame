<template>
    <div class=sider-list-1
        ref=sider>
        <div class=sider-title
            v-text="title"></div>
        <ul class=list-1>
            <li>
                <router-link :to="$PAGE_API.home.children.barManager.children.allBar.path">
                    <span>全部网吧</span>
                    <div>
                        <span v-text="allBar.onlineNum"></span>
                        <span>/</span>
                        <span v-text="allBar.totalNum"></span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="$PAGE_API.home.children.barManager.children.recentRemote.path"
                    @click.native="getRecentRemoteNum">
                    <span>最近远程</span>
                    <div>
                        <span v-text="recentRemoteNum"></span>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link :to="$PAGE_API.home.children.barManager.children.recentRemote.path"
                @click.native="getServerOfflineBarNum">
                    <span>服务器离线的网吧</span>
                    <div>
                        <span v-text="serverOfflineBarNum"></span>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class=line></div>
        <ul class=list-2>
            <li>
                <router-link :to="$PAGE_API.home.children.barManager.children.recentRemote.path"
                @click.native="getRecentRemoteNum">
                    <span>远程协助记录</span>
                    <div>
                        <span>23</span>
                    </div>
                </router-link>
            </li>
        </ul>
        <div class=line></div>
        <ul class=list-3>
            <li v-for="(item,index) in groupList"
                :key="index">
                <router-link :to="$PAGE_API.home.children.barManager.children.recentRemote.path">
                    <span v-text="item.groupName"
                        :title="item.groupName"></span>
                    <div>
                        <span v-text="item.activeBarCnt"></span>
                        <span>/</span>
                        <span v-text="item.totalBarCnt">23</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import PAGE_API from '@/apis/pageApi'
import { 
    getBarGroupList, 
    getRecentRemoteNum,
    getServerOfflineBarNum,
    getAllBarOnlineTotalNum,
} from '@/requests/bar'


export default {
    data() {
        return {
            title: PAGE_API.home.children.barManager.title,
            // 网吧分组名数据
            groupList: [],
            //  最近远程数
            recentRemoteNum: 0,
            //  服务器离线的网吧数
            serverOfflineBarNum:0,
            // 全部网吧在线/总数
            allBar:{
                onlineNum:0,
                totalNum:0
            }
        }
    },
    mounted() {
        this.$domFn.addAnimateClass(this.$refs.sider, 'animated zoomInLeft')
    },
    methods: {
        // 组件数据初始化
        init(){
            this.getRecentRemoteNum()
            this.getBarGroupList()
            this.getServerOfflineBarNum()
            this.getAllBarOnlineTotalNum()
        },
        // 获取网吧分组列表
        async getBarGroupList() {
            this.groupList = await getBarGroupList()
        },
        // 获取最近远程数
        async getRecentRemoteNum(){
            this.recentRemoteNum = await getRecentRemoteNum()
        },
        // 获取服务器离线的网吧数
        async getServerOfflineBarNum(){
            this.serverOfflineBarNum=await getServerOfflineBarNum()
        },
        // 获取全部网吧的在线数-总数
        async getAllBarOnlineTotalNum(){
            let res=await getAllBarOnlineTotalNum()
            this.allBar.onlineNum=res.onlineNum
            this.allBar.totalNum=res.totalNum
        }
    }
}
</script>

<style lang="scss" scoped>
.sider-list-1 {
    width: 200px;
    position: absolute;
    top: 0;
    bottom: 0;
    background: #eaedf1;
    text-align: left;
    text-indent: 20px;
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
}
.sider-title {
    height: 70px;
    line-height: 70px;
    background: #d9dee4;
    font-size: 14px;
    font-weight: 600;
}
.list-1,
.list-2,
.list-3 {
    padding-top: 10px;
    padding-bottom: 10px;
    li {
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        overflow: hidden;
        a {
            display: block;
            color: #333;
            padding-right: 10px;
            transition: all 0.3s;
            &:hover {
                background: #fff;
            }
            &.router-link-active {
                background: #fff;
            }
            > span {
                max-width: 100px;
                display: inline-block;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                text-indent: 0px;
            }
            > div {
                float: right;
                max-width: 70px;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
        }
    }
}
.list-1 {
    padding-bottom: 5px;
}
.list-2 {
    padding-top: 5px;
    padding-bottom: 5px;
}
.list-3 {
    padding-top: 5px;
    a {
        text-align: left;
    }
}
.line {
    width: 90%;
    margin: auto;
    height: 1px;
    background: #d9dee4;
}
</style>

