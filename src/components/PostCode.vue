<template>
  <div>
    <TitleBlock/>
    <InputBlock :notRecognized="notRecognized"/>
    <OutputBlock :notRecognized="notRecognized"/>
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
      notRecognized: true,
    }
  }
};
</script>