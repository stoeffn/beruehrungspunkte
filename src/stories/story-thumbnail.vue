<template>
  <div class="story-thumbnail-container">
    <div class="story-thumbnail-spacer" />
    <div class="story-thumbnail" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.story-thumbnail-container {
  display: inline-block;
  position: relative;
}
.story-thumbnail-spacer {
  margin-top: 75%;
}
.story-thumbnail {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 128px;

  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(50, 94, 128, .2);
  border-radius: 4px;
  cursor: pointer;

  transition: transform 0.4s cubic-bezier(.4, 0, .2, 1);
}
.story-thumbnail:hover {
  transform: scale(1.05);
}
.story-thumbnail:active {
  filter: brightness(92.5%);
}
</style>
