<template>
    <div class=header>
        <header-tag :title="$PAGE_API.home.children.barManager.children.allBar.title+' (23/23)'"></header-tag>
        <div class=right>
            <a href=#>如何删除网吧ID</a>
            <a href=#
                class=blue-btn>注册网吧ID</a>
            <a href=#
                class=default-btn>更多</a>
            <a href=#
                class=default-btn>刷新</a>
        </div>
    </div>
</template>

<script>
// 头部tag内容
import HeaderTag from '_c/tagTitle/headerTag'

export default {
    name:'allBarHeader',
    components: {
        HeaderTag
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";

.header {
    padding-left: 30px;
    // padding-top: 20px;
    text-align: left;
}
.right {
    float: right;
    padding-right:20px;
    a{
        margin-left:6px;
        line-height: normal;
    }
    a:nth-child(1){
        color:$blue;
    }
}
</style>

