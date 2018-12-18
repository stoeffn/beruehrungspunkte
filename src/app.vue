<template>
  <b-container>
    <timeline-component />
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import TimelineComponent from "./timeline/timeline.vue";

export default Vue.extend({
  components: { TimelineComponent }
});
</script>
