<template>
  <div>
    <form>
      <input v-model="newItem" />
      <button type="button" @click="addItem">Add Item</button>
    </form>
    <ul>
      <li v-for="item in items">
        <SingleItem v-bind:item="item" v-on:remove="removeItem"></SingleItem>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
 import App from './App';
 export default App;
</script>

<style>
form {
  border: solid 1px black;
}
</style>
