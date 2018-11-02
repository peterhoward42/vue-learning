<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ScratchCpt suffix=".XYZ"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ScratchCpt from './components/ScratchCpt.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ScratchCpt
  }
}
</script>