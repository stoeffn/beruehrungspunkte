<template>
  <div class="mt-5">
    <h1 class="my-3">{{ month }}</h1>
    <b-row>
      <slot/>
    </b-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { month: String }
});
</script>
