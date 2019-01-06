<template>
  <div class="menu">
    <div class="menu-background" />
    <b-nav class="menu-content" v-b-scrollspy:nav-scroller>
      <div @click="scrollIntoView" href="#top-stories" class="menu-item">
        <img src="img/star.png" />
        <p>Top Stories</p>
      </div>
      <div @click="scrollIntoView" href="#january-2019" class="menu-item">
        <h3>01/19</h3>
        <p>Januar 2019</p>
      </div>
      <div @click="scrollIntoView" href="#december-2018" class="menu-item">
        <h3>12/18</h3>
        <p>Dezember 2018</p>
      </div>
      <div @click="scrollIntoView" href="#november-2018" class="menu-item">
        <h3>11/18</h3>
        <p>November 2018</p>
      </div>
    </b-nav>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  methods: {
    scrollIntoView(evt: any) {
      evt.preventDefault();
      const href = evt.target.getAttribute('href');
      const el = href ? document.querySelector(href) : null;
      if (el) {
        document.scrollingElement.scrollTop = el.offsetTop - 8;
      }
    }
  },
});
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
    overflow-x: hidden;
    display: initial !important;

    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);

    transition: .1s ease-out;
  }
  .menu:hover .menu-content {
    width: 320px;
    overflow-x: visible;

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
  .menu-item {
    width: 320px;
    cursor: pointer;

    transition: transform 0.4s cubic-bezier(.4, 0, .2, 1);
  }
  .menu-item:hover {
    box-shadow: 0 10px 25px 0 rgba(50, 94, 128, .2);
    background-color: #ffffff;
    transform: scale(1.02);
  }
  .menu-item:active {
    filter: brightness(92.5%);
  }
  .menu-item h3, .menu-item p, .menu-item img {
    pointer-events: none;
  }
  .menu-item h3, .menu-item p {
    display: inline-block;
    padding: 16px 6px;
    margin: 0;
  }
  .menu-item img {
    margin: 12px 16px;
    height: 32px;
    width: 32px;

    opacity: .85;
  }
  .menu-item h3 {
    font-size: 20px;
    opacity: .85;
  }
  .menu-item p {
    opacity: .7;
    font-size: 17px;
  }
</style>
