<template>
    <div v-text="title"></div>
</template>

<script>
export default {
    name:'headerTag',
    props:{
        title:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
@import "_style/_color.scss";
div{
    display: inline-block;
    position: relative;
    font-size:14px;
    line-height: normal;
    &::before{
        content: '';
        display: block;
        width: 2px;
        height: 14px;
        background: $blue;
        position: absolute;
        top:3px;
        left:-8px;
    }
}
</style>


