<script setup lang="ts">
import { ref, computed } from 'vue'
import PageWithSidebar from './components/PageWithSidebar.vue'
import HomeView from './views/HomeView.vue'
import SmeltingLog from './posts/SmeltingLog/SmeltingLog.vue'
import SmeltingInspection from './posts/Dec302023/SmeltingInspection.vue'

const routes = {
  '/': HomeView,
  '/factory-game/furnace-inspection': SmeltingInspection,
  '/factory-game/smelting': SmeltingLog
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  // @ts-ignore
  return routes[currentPath.value.slice(1) || '/'] || HomeView
})
</script>

<template>
  <div class="content-container">
    <PageWithSidebar>
      <template v-slot:content>
        <component :is="currentView" />
      </template>
    </PageWithSidebar>
  </div>
</template>
