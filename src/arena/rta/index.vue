<script setup lang="ts">
import { useObservable } from "@/hooks/useObservable"
import router from "@/router"
import { stream$ } from "./subj"

function tob() {
    router.push("/b")
}
function toc() {
    router.push("/c")
}

const arrn = useObservable(stream$, [])
</script>

<template>
    <button @click="tob">to b</button>
    <button @click="toc">to c</button>
    <div class="container">
        <div v-for="n in arrn" :key="n" class="item">
            <div class="itemin">{{ n }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@keyframes item {
    0% {
        width: 0;
    }
    100% {
        width: 200px;
    }
}
.container {
    display: flex;
    margin: 200px auto;
    width: min-content;
    max-width: 630px;
    outline: 2px solid red;
    white-space: nowrap;
    justify-content: flex-end;
    overflow: hidden;
    .item {
        position: relative;
        margin: 0 5px;
        flex-shrink: 0;
        width: 200px;
        height: 400px;
        background-color: aqua;
        animation: item 0.3s linear;
    }
    .itemin {
        position: absolute;
        left: 0;
        top: 0;
        width: 200px;
        height: 400px;
        font-size: 100px;
        text-align: center;
        line-height: calc(400px * 0.8);
    }
}
</style>
