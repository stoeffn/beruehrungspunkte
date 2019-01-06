<template>
  <div class="menu">
    <div class="menu-background" />
    <div class="menu-content">
      
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style>
  .menu {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 64px;
    z-index: 1024;
    overflow-x: visible;
  }
  .menu-content {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 64px;

    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    transition: .1s ease-out;
  }
  .menu:hover .menu-content {
    width: 320px;

    background-color: #ffffff96;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 10px 25px 0 rgba(50, 94, 128, .2);
  }
  .menu-background {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;

    transition: .1s ease-out;
  }
  .menu:hover .menu-background {
    background: #00000048;
  }
</style>
