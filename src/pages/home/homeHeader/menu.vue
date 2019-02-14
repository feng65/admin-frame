<template>
    <div>
        <ul>
            <li>
                <router-link to="/">远程协助</router-link>
            </li>
            <li>
                <router-link to="/">联系技术专家</router-link>
            </li>
            <li>
                <router-link to="/">帮助中心</router-link>
            </li>
            <li>
                <router-link to="/">软件下载</router-link>
            </li>
            <li>
                <user-icon></user-icon>
            </li>
        </ul>
    </div>
</template>

<script>
// 头像部分
import UserIcon from './userIcon'

export default {
    name: 'sideMenu',
    components: {
        UserIcon
    }
}
</script>

<style lang="scss" scoped>
ul {
    overflow: hidden;
    li {
        float: left;
        cursor: pointer;
        a {
            display: block;
            color: #fff;
            font-size: 14px;
            padding-left: 12px;
            padding-right: 12px;
            transition: all 0.3s;
        }
        &:hover {
            background: #0c1014;
            a {
                color: #00ccff;
            }
        }
    }
}
</style>

