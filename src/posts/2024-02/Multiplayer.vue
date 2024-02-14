<script setup lang="ts">
import { onMounted, ref } from 'vue'
// @ts-ignore
import Prism from 'prismjs'
import 'prismjs/components/prism-csharp'
import 'prismjs/themes/prism-tomorrow.css'
import PageHeader from '../../components/PageHeader.vue'

const smeltingRecipe = ref(`new SmeltingRecipe(
    inputs: new Dictionary<ItemType, uint>() {
        {ItemType.Chalcopyrite, 57_000_000}
    },
    outputs: new Dictionary<ItemType, uint>() {
        {ItemType.CopperBar, 1},
        {ItemType.IronSiliconSlag, 37_200_000}
    }
)`)

const tempChange = ref(`float temperatureChange_C =
  energyAdded_Joules /
  recipeBeingSmelted.AverageSpecificHeat_JPerMgPerC /
  recipeBeingSmelted.TotalMassOfIngredients_Mg;`)

onMounted(() => {
  Prism.highlightAll()
})
</script>

<template>
  <div>
    <PageHeader title="Multiplayer" date="Feb 13, 2024" />

    <p>
      For the past month I've been working on building multiplayer. I had been putting this off for
      a while, which made me nervous because the systems I was building could need to be refactored
      significanlty when I eventually did. I'm really glad I did it now, because that was a very
      valid concern :D
    </p>

    <br />

    <p>Explaining the setup in words sounded hard so I made a diagram.</p>
    <img class="rounded-md" src="./Setup.jpg" width="600" height="600" />

    <br />

    <p>
      I pretty much only have unit transform updates flowing right now, but the foundation in place
      so it should be pretty quick to get all the other types of updates flowing. This is my current
      state though:
    </p>

    <video width="600" controls class="rounded-md">
      <source src="./runnin.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</template>
