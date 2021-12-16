<script setup lang="ts">
import router from "@/router";

function tob() {
    router.push("/b");
}
</script>

<template>
    <button @click="tob">to b</button>
</template>

<style lang="less"></style>
