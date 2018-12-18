<template>
  <div class="my-2">
    <story-thumbnail-component class="w-100"/>
    <h3 class="mt-3">{{ title }}</h3>
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
  props: { title: String }
});
</script>
