<template>
  <div>
    <top-stories-component/>
    <div class="bg-light">
      <b-container>
        <timeline-component/>
      </b-container>
    </div>
    <menu-component />
    <b-modal id="storyModal" size="lg">
      <story-component />
      <div slot="modal-footer" />
    </b-modal>
    <footer-component />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import TopStoriesComponent from "./stories/top-stories.vue";
import StoryComponent from "./stories/story.vue";
import TimelineComponent from "./timeline/timeline.vue";
import MenuComponent from "./menu.vue";
import FooterComponent from "./footer/footer.vue"

export default Vue.extend({
  components: { TopStoriesComponent, StoryComponent, TimelineComponent, MenuComponent, FooterComponent }
});
</script>

<style>
  .container {
    padding-left: 72px !important;
  }
</style>
