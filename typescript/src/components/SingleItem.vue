<template>
  <span>{{item}} <button type="button" @click="$emit('remove', item)">Delete</button></span>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style scoped>
span {
  color: red;
}
</style>
