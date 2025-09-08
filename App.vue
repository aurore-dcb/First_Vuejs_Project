<template>
    <NavBar />
    <transition :name="transitionName" mode="out-in">
        <router-view :key="$route.fullPath" />
    </transition>
</template>


<script setup>
import NavBar from './components/NavBar.vue'
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const previousRouteIndex = ref(0);
const transitionName = ref("slide-left");

/* Définis un ordre pour tes routes selon la navbar */
const routeOrder = ["/", "/course", "/registration", "/results", "/contact"];

watch(
  () => route.fullPath,
  (to) => {
    const toIndex = routeOrder.indexOf(to);
    const fromIndex = previousRouteIndex.value;

    transitionName.value = toIndex >= fromIndex ? "slide-left" : "slide-right";

    previousRouteIndex.value = toIndex;
  },
  { immediate: true }
);
</script>