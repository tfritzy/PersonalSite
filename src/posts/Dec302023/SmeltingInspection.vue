<script setup lang="ts">
import PageHeader from '../../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader title="Smelting inspection" date="Dec 30, 2023" />
    <p class="mb-2">
      I spent most of yesterday trying to make a nice looking cel shader, but ultimately did
      <code>git reset --hard</code> because it didn't look great, I was tired, and had mangled a ton
      of files.
    </p>

    <p class="mb-2">
      Today I played around with adding grass back to the game, and making it follow a
      <a href="https://lospec.com/palette-list/punolite-plus-plus">restricted color palette</a>. I'm
      reasonably happy with the current look so going to roll with it for a while.
    </p>

    <img class="rounded-md" width="600" src="./Grass.png" />

    <br />

    <p class="mb-2">
      I also added smelting information to the character inspection modal so the player can see how
      much longer they've got until the metal is produced. I wanted to also show the recipe
      currently being smelted, and a tick for the ore's melting point, but it was hard to make that
      look alright.
    </p>

    <br />

    <video width="600" controls class="rounded-md">
      <source src="./SmeltingInspection.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
