<script setup lang="ts">
import PageHeader from '../../../components/PageHeader.vue'
</script>

<template>
  <div>
    <PageHeader title="Migrating from JSON to protobuf" date="Jan 9, 2024" />
    <p class="mb-2">
      I offhandedly asked chat gpt what it takes to get protobuf working in a Unity project and was
      shocked to learn you just have to drop the dll in from nuget. I assumed it was a tedious
      process and had opted to use json instead to avoid it. I decided that wasn't a good enough
      reason to put more strain on the network so I did a migration.
    </p>

    <br />

    <p class="mb-2">
      Overall it was a pretty painless process, and I'm a lot happier with the new setup. I was
      especially happy to replace the json custom converters for polymorphic types with logic
      entirely written by myself. Those always felt a bit spooky.
    </p>

    <br />

    <p class="mb-2">
      The size savings ended up being surprisingly good. Taking a movement update message as an
      example, the protobuf version is 73% smaller than the json. That should make my life a lot
      easier when writing the net code. It also made the world's save file 64% smaller.
    </p>

    <img class="rounded-md border border-gray-600" width="600" src="./SizeComparison.jpg" />

    <br />
  </div>
</template>
