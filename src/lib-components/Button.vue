<template>
  <button
    class="dodi button"
    :style="{ color: textColor, backgroundColor }"
    @click="$emit('click', $event)"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DodiButton",
  props: {
    textColor: {
      type: String,
      default: "black",
    },
    backgroundColor: {
      type: String,
      default: "white",
    },
  },
});
</script>

<style>
.dodi.button {
  all: unset;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 0 2px grey;
  user-select: none;
}
.dodi.button:hover,
.dodi.button:focus {
  filter: brightness(120%);
}
.dodi.button:active {
  filter: brightness(90%);
}
</style>