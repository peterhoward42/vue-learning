<!--
PostCode composites the app from three high level components.
Specifically, a title block, and inputs block and an outputs
block.

It observes postcode changes being emitted from the input block,
evaluationg the lat/long (or failure to do so), and reflecting 
these conclusions to the output block.
-->

<template>
  <div>
    <TitleBlock/>
    <InputBlock :notRecognized="notRecognized" :changedHandler="inputChanged"/>
    <OutputBlock :notRecognized="notRecognized" :lat="lat" :long="long"/>
  </div>
</template>

<script>
import axios from "axios"

import TitleBlock from "./TitleBlock.vue";
import InputBlock from "./InputBlock.vue";
import OutputBlock from "./OutputBlock.vue";

export default {
  name: "PostCode",

  components: {
    TitleBlock,
    InputBlock,
    OutputBlock
  },

  data: function() {
    return {
      notRecognized: true,
      lat: 0,
      long: 0
    };
  },

  methods: {
    // Handler for when postcode input text changes.
    inputChanged(postCode) {
      // Fetch the corresponding lat/long from a REST API.
      // Treating errors as no-op - likely unknown/incomplete postcode.
      this.notRecognized = true
      axios.get("https:/postcodes.io/postcodes/" + postCode)
      .then(response => {
        this.notRecognized = false
        this.lat = response.data.result.latitude
        this.long = response.data.result.longitude
      })
      .catch( () => {})
    }
  }
};
</script>