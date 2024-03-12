<script setup lang="ts">
import BlogPostLink from '../components/BlogPostLink.vue'
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div>
      <h1 class="mb-1">Diary</h1>
      <p>Log of what I've been working on.</p>
    </div>

    <BlogPostLink
      title="Smooth movement around conveyor curves"
      description="Making items follow a smooth path around curved conveyors"
      href="#/smooth-curves"
      date="Mar 12, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Multiplayer"
      description="Sending game logic through a peer to peer connection"
      href="#/multiplayer"
      date="Feb 13, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="NAT punch-through"
      description="Getting started on peer to peer connections"
      href="#/nat-punchthrough"
      date="Jan 13, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Protobuf migration"
      description="Migrating from JSON to protobuf"
      href="#/protobuf-migration"
      date="Jan 9, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Tinkering"
      description="Playing around with the game's style"
      href="#/style-tinkering"
      date="Jan 7, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Character controller"
      description="Creating a character model and controller"
      href="#/character-controller"
      date="Jan 6, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Unit commands"
      description="Building a system for issuing commands to units."
      href="#/unit-commands"
      date="Jan 3, 2024"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Furnace inspection"
      description="Viewing smelting progress of furnaces"
      href="#/factory-game/furnace-inspection"
      date="Dec 30, 2023"
    />

    <div class="w-full border-b border-[1px] border-neutral-700" />

    <BlogPostLink
      title="Smelting"
      description="Building a system for smelting ore in my factory game"
      href="#/factory-game/smelting"
      date="Dec 28, 2023"
    />

    <br />
    <br />
    <br />
  </div>
</template>
