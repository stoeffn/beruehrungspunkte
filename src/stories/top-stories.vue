<template>
  <div>
    <mapbox
      class="top-stories-map"
      access-token="pk.eyJ1Ijoic3RvZWZmbiIsImEiOiJjanB1MXZhajAwNzNpM3hwdTZ3bngybXZkIn0.aarS9BWZ55ymMRU_ATMZgA"
      :style="{ filter: mapBlur }"
      :map-options="{
        style: 'mapbox://styles/stoeffn/cjpu4ztqv01572smwk4mjwzkb',
        center: [9.7326, 52.3726],
        zoom: 12
      }"
      :geolocate-control="{
        show: true,
        position: 'top-left'
      }"
    />
    <div class="top-stories-container">
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
  components: { Mapbox, StoryPreviewComponent },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  data: function() {
    return {
      mapBlur: "none"
    }
  },
  methods: {
    onScroll() {
      if (document.body.scrollTop <= 64) {
        this.mapBlur = "none";
      } else {
        const radius = (document.body.scrollTop - 64) / 12;
        const saturation = 100 + (document.body.scrollTop - 64) / 4;
        this.mapBlur = `blur(${radius <= 16 ? radius : 16}px) saturate(${saturation <= 180 ? saturation : 180}%)`;
      }
    },
  }
});
</script>

<style>
  .top-stories-map {
    z-index: -1;
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 256px;
  }
  .top-stories-container {
    margin-top: 284px;
    padding: 0 7px;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .top-stories-container > div {
    display: inline-block;
    width: 320px;
    margin: 8px;
  }

  @media (min-width: 576px) {
    .top-stories-container {
      padding: 0 calc((100% - 540px) / 2 + 7px);
    }
  }

  @media (min-width: 768px) {
    .top-stories-map {
      height: 512px;
    }
    .top-stories-container {
      margin-top: 412px;
      padding: 0 calc((100% - 720px) / 2 + 7px);
    }

    .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
      bottom: 100px !important;
    }
  }

  @media (min-width: 992px) {
    .top-stories-container {
      padding: 0 calc((100% - 960px) / 2 + 7px);
    }
  }

  @media (min-width: 1200px) {
    .top-stories-container {
      padding: 0 calc((100% - 1140px) / 2 + 7px);
    }
  }
</style>
