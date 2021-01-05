<script lang="ts">
import Vue from "vue";
import { DodiButton, DodiFlex, DodiOutlineButton } from "@/entry";

export default Vue.extend({
  name: "App",
  components: {
    DodiButton,
    DodiFlex,
    DodiOutlineButton,
  },
  data() {
    return {
      column: true,
    };
  },
  methods: {
    handleClick(e: MouseEvent) {
      console.log("Clicked! Event:\n", e);
    },
  },
});
</script>

<template>
  <div id="app">
    <dodi-flex
      :column="column"
      center
      gap="10px"
      tag="section"
      class="full-width button-container"
    >
      <dodi-button @click="handleClick">Default style</dodi-button>
      <dodi-button
        textColor="white"
        backgroundColor="#00adee"
        @click="handleClick"
      >
        Blue button
      </dodi-button>
      <dodi-button
        @click="handleClick"
        textColor="white"
        backgroundColor="var(--custom-color)"
      >
        Custom background color (CSS custom properties)
      </dodi-button>
      <dodi-outline-button @click="handleClick">
        Outline button
      </dodi-outline-button>
      <dodi-outline-button color="red" @click="handleClick">
        Red outline button
      </dodi-outline-button>
      <dodi-outline-button borderWidth="5px" @click="handleClick">
        Wide border
      </dodi-outline-button>
      <dodi-outline-button transparent @click="handleClick">
        Transparent background
      </dodi-outline-button>
    </dodi-flex>
    <dodi-flex
      center
      gap="8px"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      "
    >
      <label for="flex-column">Flex column:</label>
      <input type="checkbox" id="flex-column" v-model="column" />
    </dodi-flex>
  </div>
</template>

<style scoped>
.full-width {
  width: 100vw;
}
.button-container {
  --custom-color: #ff3f0f;
}
</style>
<style>
body {
  overflow-x: hidden;
  font-family: sans-serif;
  background: #ececec;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div#app {
  margin-top: 10px;
}
</style>