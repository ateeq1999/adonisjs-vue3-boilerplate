<template>
    <h1>Vue 3 App</h1>
    <Home />
</template>

<script setup>
    import { ref, onMounted, defineComponent } from 'vue'

    import Home from './pages/Home.vue'

    onMounted(() => {
        console.log("From App")
    })

</script>