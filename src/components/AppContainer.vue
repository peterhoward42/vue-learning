<template>
  <div>
    <ScratchCpt suffix=".XYZ" url="https://www.google.com"/>
  </div>
</template>

<script>
import ScratchCpt from './ScratchCpt.vue'
export default {
  name: "AppContainer",
  components: {
    ScratchCpt,
  }
};
</script>