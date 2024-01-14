<script setup lang="ts">
import PageHeader from '../../../components/PageHeader.vue'
import BlueLink from '../../../components/BlueLink.vue'
</script>

<template>
  <div>
    <PageHeader title="NAT punch-through" date="Jan 13, 2024" />
    <p class="mb-2">
      The past couple days I've started working on getting peer to peer connections working. I went
      in knowing basically nothing about the process, and it's a lot more complicated than I thought
      😅. I don't want to use a third party service like steamworks, because it's less aesthetic and
      makes cross-platform more difficult. It sounded like the most typical way to do a peer-to-peer
      connection is through
      <BlueLink
        href="https://en.wikipedia.org/wiki/Hole_punching_(networking)"
        text="NAT punch-through"
      />, so that's first method in the fallback chain I implemented.
    </p>

    <br />

    <p class="mb-2">
      I set up a simple azure vm that waits for clients to connect. When it finds a pair, it
      exchanges the ip and port between the two so they can start talking to each other. It took me
      embarrasingly long to get the vm configred to allow incoming connections, but I got there
      eventually 😓.
    </p>

    <br />

    <p class="mb-2">
      In this screenshot my desktop is talking directly to my laptop through the IP and port the vm
      noted them using.
    </p>

    <img class="rounded-md border border-gray-600" width="600" src="./NatPunchthrough.jpg" />

    <br />
  </div>
</template>
