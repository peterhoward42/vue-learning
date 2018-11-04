<template>
  <div>
    <p>
      Time I was rendered: {{myTime}}
    </p>
  </div>
</template>

<script>
export default {
  name: "CptWithState",
  data: function () {
    return {
      myTime: Date()
    }
  },
};
</script>