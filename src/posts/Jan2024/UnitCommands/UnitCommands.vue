<script setup lang="ts">
import PageHeader from '../../../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader title="Command system" date="Jan 3, 2024" />
    <p class="mb-2">
      Over the past few days I've been working on letting the player harvest resources, and pick up
      items in the world. This involved building a system for commanding a unit to do a series of
      actions. For example, harvesting sticks and leaves from a bush would be a walk action to get
      the unit near the bush, and a harvest action to actually do the harvesting.
    </p>

    <br />

    <p class="mb-2">
      The way I implemented this was to create a new <code>CommandComponent</code> that can be set
      on units. This component is basically just a <code>Queue</code> of <code>Command</code> where
      <code>Command</code> can be one of <code>Move</code>, <code>PickupItem</code>, or
      <code>HarvestBush</code> (currently). Units with this component then check what their current
      command is, and execute it. Each <code>Command</code> defines a function to check if it has
      been completed, and if it is, it is removed from the queue.
    </p>

    <br />

    <p>That's pretty much it!</p>
    <video width="600" controls class="rounded-md">
      <source src="./UnitCommands.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <br />

    <p class="mb-2">
      The player is now a cube because next up on the docket is building a custom controller and
      player model.
    </p>
  </div>
</template>
