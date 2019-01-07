<template>
  <div class="story-thumbnail-container" v-b-modal.storyModal>
    <audio id="story-audio-preview">
      <source src="audio/test.wav" />
    </audio>
    <div class="story-thumbnail-spacer" />
    <div class="story-thumbnail">
      <img class="story-thumbnail-image" src="img/story-thumbnail.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<script>

function initialize() {
  const elements = document.getElementsByClassName("story-thumbnail");

  for (var i = 0; i < elements.length; ++i) {
    elements[i].addEventListener("mouseenter", playSound);
    elements[i].addEventListener("mouseleave", stopSound);
  }
}

function playSound() {
    const audio = document.getElementById("story-audio-preview");
    audio.play();
}

function stopSound() {
    const audio = document.getElementById("story-audio-preview");
    audio.pause();
}

window.onload = initialize;
</script>

<style>
.story-thumbnail-container {
  display: inline-block;
  position: relative;
}
.story-thumbnail-spacer {
  margin-top: 75%;
}
.story-thumbnail {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-width: 128px;
  overflow: hidden;

  background-color: white;
  box-shadow: 0 10px 25px 0 rgba(50, 94, 128, .2);
  border-radius: 4px;
  cursor: pointer;

  transition: transform 0.4s cubic-bezier(.4, 0, .2, 1);
}
.story-thumbnail:hover {
  transform: scale(1.05);
}
.story-thumbnail:active {
  filter: brightness(92.5%);
}
.story-thumbnail-image {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
}
</style>
