<template>
  <div>
    <p>scratch paragraph {{suffix}}</p>
    <a href="https://www.w3schools.com">This is a link</a>
    <br>
    <a :href="url">This has the url set by a prop.</a>
    <br>
    <a :href="provideUrl()">This has the url set by a method call.</a>
    <br>
    <a :href="compUrlProperty">This has the url set by a computed property.</a>
  </div>
</template>

<script>
export default {
  name: "ScratchCpt",
  props: {
    suffix: String,
    url: String
  },
  methods: {
    provideUrl: function() {
      return "/foo/bar.com";
    }
  },
  // Computed properties are superior to methods because Vue can
  // use cached results if the model is unchanged.
  computed: {
    compUrlProperty: function () {
      return Date.now();
    }
  }
};
</script>