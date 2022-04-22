<template>
    <n-card content-style="padding: 0;">
        <n-tabs
            type="line"
            size="large"
            :tabs-padding="20"
            pane-style="padding: 20px;"
        >
            <n-tab-pane name="home">
                <Home />
            </n-tab-pane>
            
            <n-tab-pane name="about">
                about
            </n-tab-pane>
        </n-tabs>
    </n-card>
</template>

<script setup>
    import { ref, onMounted, defineComponent } from 'vue'

    import Home from './pages/Home.vue'

    onMounted(() => {
        console.log("From App")
    })

</script>