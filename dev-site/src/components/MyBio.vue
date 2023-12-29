<script setup lang="ts">
import { Twitter, Github, MapPin } from '@iconoir/vue'
import SocialMediaLink from './SocialMediaLink.vue'
</script>

<template>
  <div class="flex flex-row space-x-2">
    <div>
      <img alt="Logo" class="logo rounded-full" src="@/assets/logo.png" width="100" height="100" />
    </div>

    <div>
      <h1 class="green text-lg text-gray-100 mb-1">Tyler Fritz</h1>
      <h3 class="text-gray-300">Software engineer and game developer</h3>

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
