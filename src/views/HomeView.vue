<script setup lang="ts">
import BlogPostLink from '../components/BlogPostLink.vue'
</script>

<template>
  <div class="flex flex-col space-y-6">
    <div>
      <h1 class="mb-1">Diary</h1>
      <p>Log of what I've been doing, mostly for myself to look back on.</p>
    </div>

    <BlogPostLink
      title="Furnace inspection"
      description="Viewing smelting progress of furnaces"
      href="#/factory-game/furnace-inspection"
      date="Dec 30, 2023"
    />

    <BlogPostLink
      title="Smelting"
      description="Building a system for smelting ore in my factory game"
      href="#/factory-game/smelting"
      date="Dec 28, 2023"
    />
  </div>
</template>
