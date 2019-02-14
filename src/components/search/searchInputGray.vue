<template>
    <div>
        <input type=text  />
    </div>
</template>

<script>
export default {
    name:'searchInputGray'
}
</script>

<style lang="scss" scoped>

$input-gray:#9F9F9F;
$input-height:30px;

div{
    position: relative;
    display: inline-block;
    height: $input-height;
    line-height: $input-height;
    &::before{
        content: '';
        display: block;
        width: 1px;
        height: 24px;
        background: $input-gray;
        position: absolute;
        right: 32px;
        top:3px;
    }
    &::after{
        content:'';
        display: block;
        width: 14px;
        height: 14px;
        background: url(../../assets/img/icon/search-icon.png) no-repeat;
        position: absolute;
        right: 9px;
        top:8px;
        z-index: 1;
    }
}

input{
    background: #404649;
    height: $input-height;
    color:#fff;
    width: 224px;
    padding-left: 8px;
    padding-right: 38px;
}
</style>

