<template>
  <div class="w3-row">
    <div class="w3-col s2 w3-container w3-cell">
      <label v-if="notRecognized" class="w3-text-red">Not yet recognized</label>
    </div>
    <div class="w3-col s2">
      <input class="w3-container w3-cell" placeholder="Type postcode here..."/>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  props: {
    notRecognized: Boolean
  }
};
</script>