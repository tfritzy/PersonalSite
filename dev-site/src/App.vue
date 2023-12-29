<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MyBio from './components/MyBio.vue'
import BlogPostLink from './components/BlogPostLink.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center bg-neutral-900">
    <div class="flex flex-row items-center w-[1024px]">
      <MyBio class="flex-[1]" />

      <div class="h-screen w-[1px] m-8 bg-neutral-600" />

      <div class="flex-[3]">
        <BlogPostLink
          title="Smelting"
          description="Building a system for smelting ore in my factory game"
          href="/factory-game/smelting"
          date="December 28, 2023"
        />
      </div>
    </div>
  </div>
</template>
