<template>
    <div :class="['button','ripple',type, {block: block}]" @touchend="$emit('click')">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: 'TypeButton',
        props: {
            type: {
                default: 'default',
                validator: type => {
                    if (typeof type === 'string') {
                        switch (type) {
                        case 'default':
                        case 'plain':
                        case 'primary':
                        case 'info':
                        case 'success':
                        case 'warning':
                        case 'danger':
                        case 'black':
                            return true;
                        default:
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            },
            block: {
                default: false,
                type: Boolean
            }
        }

    };
</script>

<style lang="less" scoped>
    @import "_var";

    .button {
        @typeColor: rgba(255, 255, 255, 1);
        display: inline-block;
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
        border: none;
        border-radius: .1rem;
        position: relative;
        padding: .2rem .3rem;
        margin: 0 .1rem;
        font-size: .3rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0;
        will-change: box-shadow, transform;
        transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        text-decoration: none;
        background: transparent;
        color: rgba(0, 0, 0, 0.87);
        &:active {
            box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
        }
        &.default {
            background-color: #eeeeee;
            color: rgba(0, 0, 0, 0.87);
        }
        &.plain {
            background-color: transparent;
            color: rgba(0, 0, 0, 0.87);
        }
        &.primary {
            background-color: @theme-color;
            color: @typeColor;
        }
        &.success {
            background-color: #4caf50;
            color: @typeColor;
        }
        &.info {
            background-color: #03a9f4;
            color: @typeColor;
        }
        &.warning {
            background-color: #ffc61d;
            color: @typeColor;
        }
        &.danger {
            background-color: #f44336;
            color: @typeColor;
        }
        &.black {
            background-color: #000000;
            color: @typeColor;
        }
        &.block {
            display: block;
            width: 80%;
            margin: .1rem auto;
        }
    }

    .ripple {
        position: relative;
        overflow: hidden;
        &:after {
            content: "";
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            background: radial-gradient(circle, #000000 10%, transparent 10.01%) no-repeat center;
            transform: scale(10, 10);
            opacity: 0;
            transition: transform .5s, opacity 1s
        }
        &:active:after {
            transform: scale(0, 0);
            opacity: .2;
            transition: 0s
        }
    }
</style>
