<script setup lang="ts">
import { ref, computed } from 'vue'
import PageWithSidebar from './components/PageWithSidebar.vue'
import HomeView from './views/HomeView.vue'
import SmeltingLog from './posts/SmeltingLog.vue'

const routes = {
  '/': HomeView,
  '/factory-game/smelting': SmeltingLog
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <PageWithSidebar name="Twitter" href="https://twitter.com/mossytrie">
    <template v-slot:content>
      <component :is="currentView" />
    </template>
  </PageWithSidebar>
</template>
