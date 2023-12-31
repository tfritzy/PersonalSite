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
    <PageHeader title="Smelting" date="Dec 28, 2023" />

    <br />

    <p>
      <span
        >Recently I&#39;ve been making a push to get a significant amount of core logic implemented
        before spending more time on the "frontend". So this week that means giving the player the
        ability to convert ore into metal.</span
      >
    </p>

    <br />

    <h2><span>Furnaces</span></h2>
    <p>
      <span
        >Smelting ore happens within furnaces. These are a type of building that accepts ore, and
        uses some form of the energy to melt it and extract the desired metals.
      </span>
    </p>

    <br />

    <span>The two main types are:</span>
    <ul>
      <li>
        <span><b>Combustion</b> - Burning some sort of fuel to produce heat.</span>
      </li>
      <li>
        <span
          ><b>Induction</b> - Using electricity to generate magnetic fields that create currents
          that thrash back and forth and generate heat through resistance.</span
        >
      </li>
    </ul>

    <br />

    <p>
      <span
        >Each type of furnace has a value for what percent of energy it uses goes into heating the
        ore. The rest is lost as heat. Lower tier furnaces are much less efficient than higher tier
        furnaces, meaning that they use much more energy and time to heat ore to its melting point.
      </span>
    </p>

    <br />

    <p>
      <span
        >For example the basic clay furnace has an efficiency of 20%, while a well insulated,
        forced-air blast furnace has an efficiency of 50%. Induction furnaces have the highest
        efficiency because their energy goes directly into the ore, but are mostly inaccessible to
        early game players since they require power generation, which has significant prerequisites.
      </span>
    </p>

    <br />

    <p>
      <span
        >I haven&rsquo;t started working on power systems yet, so this week I focused on combustion
        furnaces. Most of this logic will still apply to induction furnaces though.
      </span>
    </p>

    <br />

    <p>
      <span>The setup is that each <code>Furnace</code> has a set of components:</span>
    </p>
    <ul>
      <li>
        <span><code>Smelt</code> - Houses the logic for consuming fuel and smelting metals.</span>
      </li>
      <li>
        <span><code>ItemPort</code> - Responsible for moving items to/from conveyors</span>
      </li>
      <li>
        <span><code>Inventory</code> - Holds the metal and slag outputted by smelting.</span>
      </li>
      <li>
        <span
          ><code>OreInventory</code> - A special type of inventory only holds ores, and is drawn
          from by <code>Smelt</code>.</span
        >
      </li>
      <li>
        <span
          ><code>FuelInventory</code> - A special type of inventory that only holds combustible
          materials and is drawn from by <code>Smelt</code>.</span
        >
      </li>
    </ul>

    <br />

    <p>
      <span>Most of the interesting things happen in the <code>Smelt</code> component</span>
    </p>

    <br />

    <h2>The <code>Smelt</code> component</h2>
    <p>
      <span
        >The first thing this component needs to do is identify whether its owner has the necessary
        materials to do any smelting. This means having enough of an ore to produce a bar, and any
        fuel to heat that ore. The ore part is handled by comparing the contents of the
        Owner&rsquo;s <code>OreInventory</code> with the known <code>SmeltingRecipes</code>, a
        simple data structure that determines the output items from a given set of input items. For
        example 57kg of Chalcopyrite(CuFeS&#8322;) yields 1 copper bar (20kg) and about 37kg of
        Iron/Silicon slag.
      </span>
    </p>

    <br />

    <pre class="language-csharp"><code>{{smeltingRecipe}}</code></pre>

    <br />

    <p>
      <span
        >Each fuel type has a <code>BurnRate</code> in milligrams/second. This is an over
        simplification, since the amount of fuel that burns over time depends on many different
        factors such as oxygen availability and water content, but I felt it wouldn&rsquo;t add much
        to the experience to calculate this value more accurately, and an approximation would
        do.</span
      >
    </p>

    <br />

    <p>
      <span
        >Each frame, the smelt component combusts a small amount of fuel in its Owner&rsquo;s
        <code>FuelInventory</code> according to the fuel's <code>BurnRate</code>. When the game is
        running at 60 fps, this ends up being 60-150 mg per frame.</span
      >
    </p>

    <br />

    <p>
      <span>The combusted mass is then multiplied it by the fuel&rsquo;s </span
      ><span><a href="https://en.wikipedia.org/wiki/Heat_of_combustion">calorific value</a></span
      ><span
        >&nbsp;to determine how many joules to add to the ore (after multiplying by the
        furnace&rsquo;s efficiency). Some examples from the types of coals I added to the
        game:</span
      >
    </p>
    <ul>
      <li>
        <span><b>Anthracite</b> - 30 Joules / mg</span>
      </li>
      <li>
        <span><b>Bituminous</b> - 24 Joules / mg</span>
      </li>
      <li>
        <span><b>Lignite</b> - 12 Joules / mg</span>
      </li>
    </ul>

    <br />

    <p>
      <span
        >Not all ores heat up the same amount per joule however. This is based on the
        material&rsquo;s </span
      ><span
        ><a href="https://en.wikipedia.org/wiki/Specific_heat_capacity"
          >specific heat capacity</a
        ></span
      ><span
        >. Thankfully this is an easy value to find for most materials and I could just add it as a
        property to each ore.
      </span>
    </p>

    <br />

    <p>
      <span>The change in temperature can then be calculated as:</span>
    </p>

    <pre class="language-csharp"><code>{{ tempChange }}</code></pre>

    <br />

    <p>
      <span
        >Finally, we just need to check if the temperature of the ore is sufficiently above its
        melting point (I went with 20%), and remove the recipe&rsquo;s inputs from the ore inventory
        and add the outputs to the normal inventory if it is.
      </span>
    </p>

    <br />

    <p>
      <span>Putting it all together:</span>
    </p>

    <img class="rounded-md" src="./SmeltScreenshot.png" width="600px" height="600px" />
  </div>
</template>
