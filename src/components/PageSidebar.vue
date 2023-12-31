<script setup lang="ts">
import { Twitter, Github, MapPin } from '@iconoir/vue'
import SocialMediaLink from './SocialMediaLink.vue'
</script>

<template>
  <div
    class="flex flex-row space-x-4 pt-[400px] border-r border-neutral-800 min-h-screen pr-2 mr-10"
  >
    <div class="w-[50px] h-[50px]">
      <img alt="Logo" class="logo rounded-full" src="../assets/Logo.png" width="50" height="50" />
    </div>

    <div class="max-w-60 min-w-60">
      <h1 class="mb-1 mt-0">Tyler Fritz</h1>
      <p>Software engineer and hobbyist game developer</p>
      <br />

      <div class="flex flex-col space-y-1">
        <div class="text-gray-300 flex flex-row space-x-2 items-center">
          <div class="translate-y-[2px]">
            <MapPin color="white" width="16" height="16" />
          </div>
          <div class="flex flex-row space-x-1 text-gray-300">Redmond, WA</div>
        </div>

        <SocialMediaLink name="Twitter" href="https://twitter.com/mossytrie">
          <template v-slot:icon>
            <Twitter color="white" width="16" height="16" />
          </template>
        </SocialMediaLink>

        <SocialMediaLink name="GitHub" href="https://github.com/tfritzy">
          <template v-slot:icon>
            <Github color="white" width="16" height="16" />
          </template>
        </SocialMediaLink>
      </div>
    </div>
  </div>
</template>
