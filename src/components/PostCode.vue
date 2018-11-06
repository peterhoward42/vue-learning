<!--
PostCode composes the app from three high level components.
Specifically, a title block, and inputs block and an outputs
block.

It owns state about if the postcode has been recognized, and
the corresponding lat/long values when so.
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

export default {
  name: "PostCode",

  components: {
    TitleBlock,
    InputBlock,
    OutputBlock,
  },

  data : function() {
    return {
      notRecognized: false,
      lat: 6789,
      long: 3456,
    }
  },
  methods: {
    inputChanged(inputText) {
        alert("Input changed: " + inputText);
    },
  }
};
</script>