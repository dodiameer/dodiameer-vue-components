<template>
  <component
    :is="tag"
    class="dodi flex"
    :style="{
      flexDirection: column ? 'column' : 'row',
      ...(center
        ? { alignItems: 'center', justifyContent: 'center' }
        : { alignItems, justifyContent }),
      gap,
    }"
  >
    <slot></slot>
  </component>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "DodiFlex",
  props: {
    center: Boolean,
    column: Boolean,
    alignItems: {
      type: String,
      default: "initial",
      validator: (value) => {
        const validValues = [
          "center",
          "baseline",
          "initial",
          "inherit",
          "unset",
          "flex-start",
          "flex-end",
          "stretch",
        ];
        return validValues.indexOf(value) !== -1;
      },
    },
    justifyContent: {
      type: String,
      default: "initial",
      validator: (value) => {
        const validValues = [
          "center",
          "start",
          "end",
          "flex-start",
          "flex-end",
          "left",
          "right",
          "normal",
          "space-between",
          "space-evenly",
          "space-around",
          "stretch",
          "inherit",
          "initial",
          "unset",
        ];
        return validValues.indexOf(value) !== -1;
      },
    },
    gap: {
      type: String,
      default: "0px",
    },
    tag: {
      type: String,
      default: "div",
    },
  },
});
</script>

<style>
.dodi.flex {
  display: flex;
}
</style>