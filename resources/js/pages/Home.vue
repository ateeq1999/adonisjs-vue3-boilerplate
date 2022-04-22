<template>
    <h1>Home</h1>
</template>

<script>
    import { defineComponent, onMounted, ref } from 'vue'

    export default {
        name: 'Home',
        setup(){
            
            const name = ref("Home")

            const sayHi = () => {
                console.log(name.value)
            }

            onMounted(() => {
                sayHi()
            })

            return {
                sayHi,
            }
        }
    }
</script>