<template>
  <div>
    <p>scratch paragraph {{suffix}}</p>
    <a href="https://www.w3schools.com">This is a link</a>
    <br>
    <a :href="url">This has the url set by a prop.</a>
  </div>
</template>

<script>
export default {
  name: 'ScratchCpt',
  props: {
    suffix: String,
    url: String
  }
}
</script>