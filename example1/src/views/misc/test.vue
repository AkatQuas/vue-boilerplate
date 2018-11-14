<template>
    <div class="test">
    </div>
</template>

<style lang="scss" scoped>
    .test {
        background-color: lightskyblue;
    }
</style>

<script>

    export default {
        components: {
        },
        data () {
            return {
                text: '',
                menus: [
                    {
                        label: 'one1',
                        route: { name: 'Login' }
                    },
                    {
                        label: 'one2',
                        route: { name: 'Login' }
                    },
                    {
                        label: 'one3',
                        route: { name: 'Login' }
                    },
                    {
                        label: 'two',
                        route: {
                            name: 'Test'
                        }
                    }
                ]
            };
        },
        watch: {
            text (n, o) {
                console.log('test new', n, 'test old', o);
            }
        },
        methods: {
            onClick () {
                console.log('clicked');
            }
        }
    };
</script>
