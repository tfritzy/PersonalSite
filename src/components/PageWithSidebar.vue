<script setup lang="ts">
import MyBio from './MyBio.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center">
    <div class="flex flex-row items-center">
      <!-- <MyBio id="sidebar" class="flex-[1]" /> -->

      <!-- <div class="h-screen w-[1px] m-8 bg-neutral-700" /> -->

      <div class="flex-[3] max-h-screen overflow-y-auto max-w-[800px] py-[150px] p-4">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
