<template>
  <b-container>
    <story-thumbnail-component/>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import StoryThumbnailComponent from "./components/story-thumbnail.vue";

export default Vue.extend({
  components: { StoryThumbnailComponent }
});
</script>

<style>
</style>
