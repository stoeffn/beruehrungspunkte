<template>
  <div class="story-container" v-b-modal.storyModal>
    <div class="row">
      <p>Bild</p>
      <h2>Mein Leben am Raschplatz</h2>
      
      
    </div>
    <p>Hallo</p>
    <!-- <div class="story-picture">
      <img class="story-image" src="img/story-thumbnail.jpg" />
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
.story-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.story-image {
  margin: 0;
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  /* height: 100%; */
}
.cell {
  padding: 10pt;
  margin: 10pt;
}
.row {
  display: flex;
}
.story-picture {
  display: inline;
  min-width: 128px;
  overflow: hidden;
  flex: 1 1 auto;
  box-flex: 1;
  max-width: 128px;

  /* background-color: white;
  box-shadow: 0 10px 25px 0 rgba(50, 94, 128, .2);
  border-radius: 4px; */
  cursor: pointer;
}
</style>
