<template>
  <b-container>
    <story-preview-component :story="story">Lorem ipsum dolor sit amet.</story-preview-component>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import StoryPreviewComponent from "./stories/story-preview.vue";

export default Vue.extend({
  components: { StoryPreviewComponent },
  data: () => {
    return {
      story: {
        title: "Compelling Title"
      }
    };
  }
});
</script>

<style>
</style>
