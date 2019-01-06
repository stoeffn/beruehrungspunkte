<template>
  <div class="py-4">
    <timeline-month-component month="Diesen Monat" id="january-2019">
      <b-col cols="12" sm="6" md="7">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" sm="6" md="5">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
    </timeline-month-component>
    <timeline-month-component month="Letzten Monat" id="december-2018">
      <b-col cols="12" sm="6">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" sm="6">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
    </timeline-month-component>
    <timeline-month-component month="November 2018" id="november-2018">
      <b-col cols="12" sm="7">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" sm="5">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
      <b-col cols="12" md="4">
        <story-preview-component title="Compelling Title">Lorem ipsum dolor sit amet.</story-preview-component>
      </b-col>
    </timeline-month-component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TimelineMonthComponent from "./timeline-month.vue";
import StoryPreviewComponent from "../stories/story-preview.vue";

export default Vue.extend({
  components: { TimelineMonthComponent, StoryPreviewComponent }
});
</script>
