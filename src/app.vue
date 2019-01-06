<template>
  <div>
    <top-stories-component/>
    <div class="bg-light">
      <b-container>
        <timeline-component/>
      </b-container>
    </div>
    <menu-component />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TopStoriesComponent from "./stories/top-stories.vue";
import TimelineComponent from "./timeline/timeline.vue";
import MenuComponent from "./menu.vue";

export default Vue.extend({
  components: { TopStoriesComponent, TimelineComponent, MenuComponent }
});
</script>

<style>
  .container {
    padding-left: 72px !important;
  }
</style>
