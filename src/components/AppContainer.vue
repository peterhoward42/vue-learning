<!--
AppContainer exists to provide the top level container layout
for the app. For example, later it might provide a responsive grid conainer.
-->

<template>
  <div>
    <PostCode/>
  </div>
</template>

<script>
import PostCode from './PostCode.vue'
export default {
  name: "AppContainer",
  components: {
    PostCode,
  }
};
</script>