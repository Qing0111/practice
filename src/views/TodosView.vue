<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "../stores/todos";

const newTodo = ref("");
const todoStore = useTodosStore();
const { filterTodo } = storeToRefs(todoStore);
const { addTodo, toggleTodo, updateFilter } = todoStore;

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};
</script>

<template>
  <main>
    <div>
      <button @click="updateFilter('all')">all</button>
      <button @click="updateFilter('finished')">finished</button>
      <button @click="updateFilter('unFinished')">unFinished</button>
    </div>
    <input type="text" v-model="newTodo" @keyup.enter="addNewTodo(newTodo)" />
    <button @click="addNewTodo(newTodo)">Add</button>
    <div v-for="todo in filterTodo" :key="todo.id" style="display: flex">
      <h1 :style="todo.isFinished && { textDecoration: 'line-through' }">
        {{ todo.text }}
      </h1>
      <button @click="toggleTodo(todo.id)">toggle</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
