<script setup lang="ts">
import { ref, computed } from 'vue'
import PageWithSidebar from './components/PageWithSidebar.vue'
import HomeView from './views/HomeView.vue'
import SmeltingLog from './posts/SmeltingLog/SmeltingLog.vue'
import SmeltingInspection from './posts/Dec302023/SmeltingInspection.vue'
import UnitCommands from './posts/Jan2024/UnitCommands/UnitCommands.vue'
import CharacterController from './posts/Jan2024/CharacterController/CharacterController.vue'
import StyleTinkering from './posts/Jan2024/StyleTinkering/StyleTinkering.vue'
import ProtobufMigration from './posts/Jan2024/Protobuf/ProtobufMigration.vue'
import NatPunchthrough from './posts/Jan2024/NatPunchthrough/NatPunchthrough.vue'
import Multiplayer from './posts/2024-02/Multiplayer/MultiplayerHelloWorld.vue'
import SmoothItems from './posts/2024-03/SmoothItems/SmoothItems.vue'

const routes = {
  '/': HomeView,
  '/multiplayer': Multiplayer,
  '/nat-punchthrough': NatPunchthrough,
  '/protobuf-migration': ProtobufMigration,
  '/style-tinkering': StyleTinkering,
  '/character-controller': CharacterController,
  '/factory-game/furnace-inspection': SmeltingInspection,
  '/factory-game/smelting': SmeltingLog,
  '/unit-commands': UnitCommands,
  '/smooth-curves': SmoothItems
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
./posts/2024-02/Multiplayer/Multiplayer.vue./posts/2024-02/Multiplayer/MultiplayerHelloWorld.vue
