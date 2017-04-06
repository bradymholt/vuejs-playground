<template>
  <span>{{item}} <button type="button" @click="$emit('remove', item)">Delete</button></span>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component({ props: { item: String } })
  export default class SingleItem extends Vue { }
</script>

<style scoped>
span {
  color: red;
}
</style>
