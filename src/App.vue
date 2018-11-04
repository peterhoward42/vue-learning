<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ScratchCpt suffix=".XYZ" url="https://www.google.com"/>
    <CptWithState></CptWithState>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ScratchCpt from './components/ScratchCpt.vue'
import CptWithState from './components/CptWithState.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    ScratchCpt,
    CptWithState,
  }
}
</script>