<script setup lang="ts">
import { useObservable } from "@/hooks/useObservable"
import router from "@/router"
import { SubjCount } from "@/subjects/count"
import CD from "./cd.vue"

function tohome() {
    router.push("/")
}
/** 点击数 */
const c = useObservable(SubjCount.count$, 2)
function plusone() {
    const v = SubjCount.count$.value + 1
    SubjCount.count$.next(v)
}
</script>

<template>
    <button @click="tohome" class="btn">to home</button>
    <div>
        <button @click="plusone">+1</button>
        <button @click="SubjCount.add_one">+1</button>
        <span>{{ c }}</span>
    </div>
    <CD name2="qwer" />
</template>

<style lang="less">
.btn {
    color: red;
}
</style>
