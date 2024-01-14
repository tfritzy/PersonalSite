<script setup lang="ts">
defineProps({
  href: String,
  text: String
})
</script>

<template>
  <a class="text-blue-400 hover:underline" v-bind:href="href"> {{ text }} </a>
</template>
