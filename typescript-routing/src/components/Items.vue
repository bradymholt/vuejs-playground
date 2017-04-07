<template>
  <div>
    <form>
      <input v-model="newItem" />
      <button type="button"
              @click="addItem">Add Item</button>
    </form>
    <ul>
      <li v-for="item in items">
        <SingleItem v-bind:item="item"
                    v-on:remove="removeItem"></SingleItem>
      </li>
    </ul>
    <router-link to="about">About</router-link>
  </div>
</template>

<script lang="ts">
  import Items from './Items';
  export default Items;
</script>

<style scoped>
span {
  color: red;
}
</style>
