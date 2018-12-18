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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Mapbox from "mapbox-gl-vue";

export default Vue.extend({
  components: { Mapbox }
});
</script>

<style>
  .top-stories-map {
    width: 100%;
    height: 256px;
  }
  @media (min-width: 768px) {
    .top-stories-map {
      height: 512px;
    }
  }
</style>
