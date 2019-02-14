<template>
    <div class="modal"
        :class="{'modal-show':show}">
        <div class="box">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// 一级模态窗
export default {
    name: 'fadeDownModal',
    props: {
        show: Boolean
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    & .box {
        max-height: 100%;
        max-width: 100%;
        overflow: auto;
        color: #000;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-60%);
        transition: all 0.3s;
    }
}

// 模态窗显示样式
.modal-show {
    opacity: 1;
    // display: block;
    visibility: visible;
    & .box {
        transform: translateX(-50%) translateY(-50%);
    }
}
</style>