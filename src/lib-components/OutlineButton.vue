<template>
  <button
    class="dodi outline-button"
    :style="{
      border: `${borderWidth} solid ${color}`,
      backgroundColor: transparent ? 'transparent' : 'white',
      color
    }"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DodiOutlineButton",
  props: {
    color: {
      type: String,
      default: "black",
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    borderWidth: {
      type: String,
      default: "1px"
    }
  },
});
</script>

<style>
.dodi.outline-button {
  all: unset;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0 0 2px grey;
  user-select: none;
}
.dodi.outline-button:hover,
.dodi.outline-button:focus {
  filter: brightness(120%);
}
.dodi.outline-button:active {
  filter: brightness(90%);
}
</style>