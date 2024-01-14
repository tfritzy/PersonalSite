<script setup lang="ts">
import PageHeader from '../../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader title="Character controller" date="Jan 6, 2024" />
    <p class="mb-2">
      I've been working on a player model. I decided to try stick people because I've liked other
      games that use them, and they're a lot easier to model.
    </p>

    <br />

    <p class="mb-2">Here's the model I came up with:</p>
    <img class="rounded-md" width="300" src="./StickPerson.jpg" />

    <br />

    <p class="mb-2">
      Then I made a character controller for them. I initially was going to make an entirely custom
      controller, but found it was far more sane to extend the starter assets one. So far all I
      needed to add was functionality to walk to a specific point instead of just in a direction,
      and a state to pick up items.
    </p>
    <img class="rounded-md" width="600" src="./Animator.jpg" />

    <br />

    <p class="mb-2">Showcase</p>
    <video width="600" controls class="rounded-md">
      <source src="./ControllerShowcase.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <br />
  </div>
</template>
