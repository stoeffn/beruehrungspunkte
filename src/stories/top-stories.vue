<template>
  <div>
    <div id="top-stories" />
    <mapbox
      class="top-stories-map"
      access-token="pk.eyJ1Ijoic3RvZWZmbiIsImEiOiJjanB1MXZhajAwNzNpM3hwdTZ3bngybXZkIn0.aarS9BWZ55ymMRU_ATMZgA"
      :style="{ filter: mapBlur }"
      :map-options="{
        style: 'mapbox://styles/stoeffn/cjpu4ztqv01572smwk4mjwzkb',
        center: [9.7326, 52.3556],
        zoom: 12
      }"
      :geolocate-control="{
        show: true,
        position: 'top-right'
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
      const scrollPosition = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) - 192;
      if (scrollPosition <= 0) {
        this.mapBlur = "none";
      } else {
        const radius = scrollPosition / 12;
        const saturation = 100 + scrollPosition / 4;
        this.mapBlur = `blur(${radius <= 16 ? radius : 16}px) saturate(${saturation <= 180 ? saturation : 180}%)`;
      }
    },
  }
});
</script>

<style>
  .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-top-left {
    left: 72px !important;
  }

  #top-stories {
    position: absolute;
    top: 0;
  }

  .top-stories-map {
    z-index: -1;
    position: fixed !important;
    top: 0;
    width: 100%;
    height: 256px;
  }
  .top-stories-container {
    margin-top: 284px;
    padding: 0 calc(72px - 8px);
    overflow-x: scroll;
    white-space: nowrap;
    background-image: linear-gradient(#F8F9FA00, #F8F9FAFF);
  }

  .top-stories-container > div {
    display: inline-block;
    width: 320px;
    margin: 8px;
  }

  @media (min-width: 576px) {
    .top-stories-container {
      padding: 0 calc((100% - 540px) / 2 + 72px - 8px);
    }
  }

  @media (min-width: 768px) {
    .top-stories-map {
      height: 768px;
    }
    .top-stories-container {
      margin-top: 412px;
      padding: 0 calc((100% - 720px) / 2 + 72px - 8px);
    }

    .mapboxgl-ctrl-bottom-left, .mapboxgl-ctrl-bottom-right {
      bottom: 100px !important;
    }
  }

  @media (min-width: 992px) {
    .top-stories-container {
      padding: 0 calc((100% - 960px) / 2 + 72px - 8px);
    }
  }

  @media (min-width: 1200px) {
    .top-stories-container {
      padding: 0 calc((100% - 1140px) / 2 + 72px - 8px);
    }
  }
</style>
