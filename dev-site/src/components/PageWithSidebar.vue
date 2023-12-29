<script setup lang="ts">
import MyBio from './MyBio.vue'
</script>

<template>
  <div class="h-screen w-screen flex justify-center bg-neutral-900">
    <div class="flex flex-row items-center w-[1024px]">
      <MyBio class="flex-[1]" />

      <div class="h-screen w-[1px] m-8 bg-neutral-700" />

      <div class="flex-[3] max-h-screen overflow-y-scroll py-[150px] pr-[15px]">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
