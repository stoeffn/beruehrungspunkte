<template>
  <div>
    <top-stories-component/>
    <b-container>
      <timeline-component/>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TopStoriesComponent from "./stories/top-stories.vue";
import TimelineComponent from "./timeline/timeline.vue";

export default Vue.extend({
  components: { TopStoriesComponent, TimelineComponent }
});
</script>
