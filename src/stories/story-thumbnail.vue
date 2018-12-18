<template>
  <div class="story-thumbnail"/>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.story-thumbnail {
  width: 300px;
  height: 180px;

  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(50, 94, 128, 0.2);
  border-radius: 4px;
  cursor: pointer;

  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  display: block;
}
.story-thumbnail:hover {
  transform: scale(1.05);
}
.story-thumbnail:active {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><f…type="linear" slope="0.925" /></feComponentTransfer></filter></svg>#filter');
  filter: brightness(92.5%);
}
</style>
