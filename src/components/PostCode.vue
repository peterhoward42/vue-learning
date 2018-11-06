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
import TitleBlock from './TitleBlock.vue'
import InputBlock from './InputBlock.vue'
import OutputBlock from './OutputBlock.vue'

// Get some help from library functions.
import { getLatLong } from "../lib/get-lat-long.js"

export default {
  name: "PostCode",

  components: {
    TitleBlock,
    InputBlock,
    OutputBlock,
  },

  data : function() {
    return {
      notRecognized: true,
      lat: 0,
      long: 0,
    }
  },

  methods: {
    // Handler for when postcode input text changes.
    inputChanged(inputText) {
        // Delegate to a library function, then update
        // state for this component accordingly.
        Object.assign(this, getLatLong(inputText))
    },
  }
};
</script>