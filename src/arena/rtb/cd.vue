<script setup lang="ts">
defineProps<{
    name2: string
}>()
const arr = Array.from({ length: 30 }, (_, i) => i)
</script>

<template>
    <div>{{ name2 }}---</div>
    <div class="container">
        <div class="item" v-for="n in arr" :key="n"></div>
    </div>
</template>

<style lang="less" scoped>
.container {
    display: grid;
    gap: 10px;
    margin: 0 100px;
    outline: 2px solid red;
    // 瀑布布局
    // https://www.w3cplus.com/css/grid-layout-part-17.html
    // grid: masonry / repeat(auto-fill, minmax(250px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
.item {
    height: 100px;
    background-color: #66ccff;
    outline: 2px solid red;
}
</style>
