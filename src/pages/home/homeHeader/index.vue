<template>
    <div class=header
        ref=header>
        <div class=left
            ref=left>
            <!-- logo部分 -->
            <div class=logo
                ref=logo>
                <router-link to="/"
                    exact>
                    <img src=@/assets/img/icon/logo.png
                        width=40px/>
                    <img src=@/assets/img/icon/weihudashi.png
                        width=100px/>
                    <span>远程管理平台</span>
                </router-link>
            </div>
            <!-- 搜索网吧部分 -->
            <div class=search>
                <search-bar-input></search-bar-input>
            </div>
        </div>
        <div class=right
            ref=right>
            <!-- 栏目部分 -->
            <header-menu class=menu-list></header-menu>
        </div>

    </div>
</template>

<script>
// 搜索框组件
import SearchBarInput from '_c/search/searchInputGray'
// 菜单组件
import HeaderMenu from './menu'

export default {
    name: 'home',
    components: {
        SearchBarInput,
        HeaderMenu
    },
    mounted() {
        // this.$domFn.addAnimateClass(this.$refs.header, 'animated fadeInDownBig')
        this.$domFn.addAnimateClass(this.$refs.left, 'animated fadeInLeftBig')
        this.$domFn.addAnimateClass(this.$refs.right, 'animated fadeInRightBig')
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";
.header {
    text-align: left;
    height: 60px;
    line-height: 60px;
    width: 100%;
    background: $black-bg;
    color: $white-word;
    position: relative;
    z-index: 100;
    overflow: hidden;
}
// 左侧样式
.left {
    float: left;
    overflow: hidden;
}
// 左侧log部分样式
.logo {
    float: left;
    a{
        color:#fff;
    }
    img {
        position: relative;
        top: 10px;
        margin-left: 20px;
    }
    img + img {
        top: 0;
    }
    span {
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
        font-size: 14px;
    }
}
// 搜索框样式
.search {
    float: left;
    margin-left: 40px;
}
// 右侧样式
.right {
    float: right;
}
// 菜单样式
.menu-list {
    float: left;
}
// 头像
.header-icon {
    float: left;
}
</style>

