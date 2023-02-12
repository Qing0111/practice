import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { ref, computed } from "vue";

// export const useTodosStore = defineStore("todos", {
//   state: () => {
//     return {
//       todos: useStorage("todos", [
//         {
//           id: 1,
//           text: "clean room",
//           isFinished: false,
//         },
//       ]),
//       filter: "all",
//     };
//   },
//   getters: {
//     filterTodo() {
//       if (this.filter === "finished") {
//         return this.todos.filter((todo) => todo.isFinished);
//       } else if (this.filter === "unFinished") {
//         return this.todos.filter((todo) => !todo.isFinished);
//       } else {
//         return this.todos;
//       }
//     },
//   },
//   actions: {
//     addTodo(text) {
//       if (!text) {
//         return;
//       }
//       this.todos.push({
//         id: Math.floor(Math.random() * 100000000),
//         text,
//         isFinished: false,
//       });
//     },
//     toggleTodo(id) {
//       const index = this.todos.findIndex((todo) => todo.id === id);
//       this.todos[index].isFinished = !this.todos[index].isFinished;
//     },
//     updateFilter(value) {
//       this.filter = value;
//     },
//   },
// });

export const useTodosStore = defineStore("todos", () => {
  const todos = useStorage(
    "todos",
    ref([
      {
        id: 1,
        text: "clean room",
        isFinished: false,
      },
    ])
  );
  const filter = ref("all");

  const filterTodo = computed(() => {
    if (filter.value === "finished") {
      return todos.value.filter((todo) => todo.isFinished);
    } else if (filter.value === "unFinished") {
      return todos.value.filter((todo) => !todo.isFinished);
    } else {
      return todos.value;
    }
  });

  const addTodo = (text) => {
    if (!text) {
      return;
    }
    todos.value.push({
      id: Math.floor(Math.random() * 100000000),
      text,
      isFinished: false,
    });
  };
  const toggleTodo = (id) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    todos.value[index].isFinished = !todos.value[index].isFinished;
  };

  const updateFilter = (value) => {
    filter.value = value;
  };

  const removeTodo = (todo) => {
    todos.value.splice(todos.value.indexOf(todo), 1);
  };
  return {
    todos,
    filter,
    addTodo,
    toggleTodo,
    updateFilter,
    filterTodo,
    removeTodo,
  };
});
