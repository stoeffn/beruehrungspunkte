<template>
  <div>
    <story-thumbnail-component/>
    <h3 class="mt-3">{{ story.title }}</h3>
    <p class="text-secondary">
      <slot/>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import StoryThumbnailComponent from "./story-thumbnail.vue";

export default Vue.extend({
  components: { StoryThumbnailComponent },
  props: { story: Object }
});
</script>

<style>
</style>
