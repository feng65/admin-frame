<template>
    <div class=home-sider
        ref=sider>
        <div class=box>
            <ul>
                <li v-for="(item,index) in menuList"
                    :key="index">
                    <router-link :to="item.path">
                        <div class=icon>
                            <img :src="item.icon" />
                        </div>
                        <div class=title v-text="item.title"></div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import PAGE_API from '@/apis/pageApi'

import barManagerIcon from '@/assets/img/icon/u542.png'
import staffManageIcon from '@/assets/img/icon/u544.png'
import accountSafeIcon from '@/assets/img/icon/u546.png'
import operationLogIcon from '@/assets/img/icon/u548.png'

export default {
    name: 'homeSider',
    data() {
        return {
            menuList: [
                // 网吧管理
                {
                    path: PAGE_API.home.children.barManager.path,
                    title: PAGE_API.home.children.barManager.title,
                    icon: barManagerIcon
                },
                // 员工管理
                {
                    path: PAGE_API.home.children.staffManage.path,
                    title: PAGE_API.home.children.staffManage.title,
                    icon: staffManageIcon
                }, 
                // 账号安全
                {
                    path: PAGE_API.home.children.accountSafe.path,
                    title: PAGE_API.home.children.accountSafe.title,
                    icon: accountSafeIcon
                }, 
                // 操作日志
                {
                    path: PAGE_API.home.children.operationLog.path,
                    title: PAGE_API.home.children.operationLog.title,
                    icon: operationLogIcon
                }]
        }
    },
    mounted() {
        this.$domFn.addAnimateClass(this.$refs.sider, 'animated fadeInLeftBig')
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";

$li-height: 60px;

.home-sider {
    position: absolute;
    width: 60px;
    line-height: 60px;
    padding-top: 0px;
    top: 0;
    bottom: 0;
    background: $black-bg;
    color: $white-word;
    overflow: hidden;
    transition: all 0.2s;
    z-index: 90;
    &:hover {
        width: 270px;
    }
}
.box {
    border-top: 1px solid #525252;
    ul {
        width: 270px;
        text-align: left;
        padding-top:10px;
    }
    li {
        height: $li-height;
        cursor: pointer;
        a {
            display: block;
            overflow: hidden;
            color: #fff;
            transition: all 0.3s;
            &:hover {
                background: $cyan;
            }
            &.router-link-active {
                background: $cyan;
            }
        }
        .icon {
            float: left;
            width: 60px;
            text-align: center;
        }
        .title {
            float: left;
            width: 210px;
            text-align: left;
        }
    }
}
</style>

