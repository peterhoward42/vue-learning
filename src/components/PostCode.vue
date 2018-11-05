<template>
  <div>
    <TitleBlock/>
    <InputBlock/>
    <OutputBlock/>
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
  }
};
</script>