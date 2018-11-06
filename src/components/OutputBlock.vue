<!--
OutputBlock is where you see the lat/long output.
-->

<template>
  <div>
    <div class="w3-row-padding">
      <div class="w3-col s2 w3-cell">
        <label>Latitude:</label>
      </div>
      <div class="w3-col s1 w3-cell">
        <label v-if="notRecognized==false" class="w2-left-align">{{lat}}</label>
      </div>
    </div>
    <div class="w3-row-padding">
      <div class="w3-col s2 w3-cell">
        <label>Longitude:</label>
      </div>
      <div class="w3-col s1 w3-cell">
        <label v-if="notRecognized==false" class="w2-left-align">{{long}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OutputBlock",
  props: {
    notRecognized: Boolean,
    lat: Number,
    long: Number,
  },
};
</script>