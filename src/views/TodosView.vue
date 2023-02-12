<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "../stores/todos";

const newTodo = ref("");
const todoStore = useTodosStore();
const { filterTodo, filter } = storeToRefs(todoStore);
const { addTodo, toggleTodo, updateFilter, removeTodo } = todoStore;

const addNewTodo = (text) => {
  addTodo(text);
  newTodo.value = "";
};
</script>

<template>
  <main>
    <div class="btn-group">
      <button
        @click="updateFilter('all')"
        :class="{ active: filter === 'all' }"
      >
        all
      </button>
      <button
        @click="updateFilter('finished')"
        :class="{ active: filter === 'finished' }"
      >
        finished
      </button>
      <button
        @click="updateFilter('unFinished')"
        :class="{ active: filter === 'unFinished' }"
      >
        unFinished
      </button>
    </div>
    <div class="input">
      <input type="text" v-model="newTodo" @keyup.enter="addNewTodo(newTodo)" />
      <button class="addBtn" @click="addNewTodo(newTodo)">Add</button>
    </div>
    <article v-for="todo in filterTodo" :key="todo.id">
      <input
        type="checkbox"
        @click="toggleTodo(todo.id)"
        v-model="todo.isFinished"
      />
      <h1 :style="todo.isFinished && { textDecoration: 'line-through' }">
        {{ todo.text }}
      </h1>
      <button type="button" @click="removeTodo(todo)">delete</button>
    </article>
  </main>
</template>

<style lang="scss" scoped>
main {
  max-width: 520px;
  margin: 0 auto;
  .btn-group {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    button {
      border: 1px solid #fff;
      background-color: transparent;
      color: #fff;
      padding: 8px 16px;
      cursor: pointer;
      border-radius: 20px;
      &.active {
        background-color: #fff;
        color: #000;
      }
    }
  }
  .input {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    input {
      padding: 8px 20px;
      width: 100%;
      background-color: transparent;
      border: 1px solid #fff;
      border-right: 0px;
      color: #fff;
      border-radius: 20px 0 0 20px;
    }
    .addBtn {
      padding: 8px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 0 20px 20px 0;
      background-color: transparent;
    }
  }
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    input {
      appearance: none;
      width: 28px;
      height: 28px;
      border: 1px solid #fff;
      border-radius: 50%;
      text-align: center;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        inset: 0 0;
        margin: auto;
        width: 12px;
        height: 12px;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transition: 0.12s transform ease-in-out;
        background-color: #fff;
      }
      &:checked::before {
        transform: scale(1);
      }
    }
    h1 {
      width: 70%;
    }
    button {
      border: 1px solid #fff;
      padding: 2px 8px;
      color: #fff;
      border-radius: 20px;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>
