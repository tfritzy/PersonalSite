<script setup lang="ts">
import PageSidebar from './PageSidebar.vue'
</script>

<template>
  <div class="relative max-w-[1000px] flex flex-row">
    <PageSidebar class="sidebar" />
    <div class="content p-8">
      <slot name="content" />
    </div>
  </div>
</template>
