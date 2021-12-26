<script setup lang="ts">
import router from "@/router"

function tob() {
    router.push("/b")
}
function toc() {
    router.push("/c")
}
</script>

<template>
    <button @click="tob">to b</button>
    <button @click="toc">to c</button>
</template>

<style lang="less"></style>
