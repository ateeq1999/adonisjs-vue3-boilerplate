<template>
    <h1>Vue 3 App</h1>
    {{ count }}
</template>

<script setup>
    import { ref, onMounted } from 'vue'

    const count = ref(10)

    function increment() {
        count.value++
    }

    onMounted(() => {
        console.log(`The initial count is ${count.value}.`)
    })
</script>