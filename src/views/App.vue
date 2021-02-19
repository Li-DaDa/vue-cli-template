<!--  -->
<template>
  <div class="aa">
    <input type="text" />
    <div class="abc">test1</div>
  </div>
</template>

<script>
export default {
  mounted() {
    debugger;
    console.log("abc");
  },
};
</script>
<style lang='scss'>
$color: red;
.aa {
  .abc {
    color: $color;
    box-sizing: border-box;
  }
}
</style>