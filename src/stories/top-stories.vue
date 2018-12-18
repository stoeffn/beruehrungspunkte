<template>
  <div>
    <mapbox
      class="top-stories-map"
      access-token="pk.eyJ1Ijoic3RvZWZmbiIsImEiOiJjanB1MXZhajAwNzNpM3hwdTZ3bngybXZkIn0.aarS9BWZ55ymMRU_ATMZgA"
      :map-options="{
        style: 'mapbox://styles/stoeffn/cjpu2g6g51lzw2rpbhhd7p8zc',
        center: [9.7326, 52.3726],
        zoom: 12
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left'
      }"
    />
    <div class="top-stories-container px-5">
      <story-preview-component title="Compelling Title" />
      <story-preview-component title="Compelling Title" />
      <story-preview-component title="Compelling Title" />
      <story-preview-component title="Compelling Title" />
      <story-preview-component title="Compelling Title" />
      <story-preview-component title="Compelling Title" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mapbox from "mapbox-gl-vue";
import StoryPreviewComponent from "../stories/story-preview.vue";

export default Vue.extend({
  components: { Mapbox, StoryPreviewComponent }
});
</script>

<style>
  .top-stories-map {
    width: 100%;
  }
  .top-stories-container {
    margin-top: -100px;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .top-stories-container > div {
    display: inline-block;
    width: 320px;
    margin: 8px;
  }

  .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
    bottom: 100px !important;
  }

  @media (min-width: 768px) {
    .top-stories-map {
      height: 512px;
    }
  }
</style>
