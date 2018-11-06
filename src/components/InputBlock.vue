<!--
InputBlock is where you enter the postcode and see corresponding error messages.
It is not repsonsible for interpreting what the user types in.
Instead it sends changes to the *chnangeHandler* callback.
-->

<template>
  <div class="w3-row">
    <div class="w3-col s2 w3-container w3-cell">
      <label v-if="notRecognized" class="w3-text-red">Not yet recognized</label>
    </div>
    <div class="w3-col s2">
      <input class="w3-container w3-cell" placeholder="Type postcode here..." v-model="inputTxt"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputBlock",
  props: {
    notRecognized: Boolean, // So I can display an error message.
    changedHandler: Function, // I send input changes to this callback 
  },

  data : function() {
    return {
      inputTxt: "", // The template binds input to this variable.
    }
  },

  watch: {
    // Observe changes to the input text, and alert the callback.
    inputTxt: function(val, oldVal) {
      this.changedHandler(val)
    }
  }
};
</script>