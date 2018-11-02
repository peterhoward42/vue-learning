<template>
  <div>
    <p>scratch paragraph {{suffix}}</p>
  </div>
</template>

<script>
export default {
  name: 'ScratchCpt',
  props: {
    suffix: String
  }
}
</script>