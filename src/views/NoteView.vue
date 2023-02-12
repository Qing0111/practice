<script setup>
import { ref, watch, onMounted } from "vue";

const showModal = ref(false);
const newNote = ref("");
const notes = ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.trim() == "") {
    return;
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date().toLocaleDateString("zh-TW"),
    backgroundColor: getRandomColor(),
  });
  newNote.value = "";
  showModal.value = false;
};
const removeNote = (note) => {
  notes.value.splice(notes.value.indexOf(note), 1);
};
onMounted(() => {
  notes.value = JSON.parse(localStorage.getItem(Storage) || "[]");
});
watch(
  notes,
  () => {
    localStorage.setItem(Storage, JSON.stringify(notes.value));
  },
  { deep: true }
);
</script>

<template>
  <main>
    <div class="overlay" v-if="showModal">
      <div class="modal">
        <input type="text" v-model="newNote" @keyup.enter="addNote" />
        <button @click="addNote">Add Note</button>
        <button class="close" @click="showModal = false">X</button>
      </div>
    </div>
    <section class="container">
      <header>
        <h1>Note</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <template v-for="item in notes" :key="item.id">
          <article
            class="card"
            :style="`background-color: ${item.backgroundColor}`"
          >
            <p class="main-text">
              {{ item.text }}
            </p>
            <p class="date">{{ item.date }}</p>
            <button type="button" @click="removeNote(item)">X</button>
          </article>
        </template>
      </div>
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  height: calc(100vh - 66px);
  // width: 100vw;
  // padding: 0 10%;
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-weight: bold;
        margin-bottom: 25px;
        font-size: 52px;
      }
      button {
        border: none;
        width: 50px;
        height: 50px;
        cursor: pointer;
        line-height: 50px;
        background-color: rgb(240, 241, 240);
        border-radius: 100%;
        color: black;
        font-size: 20px;
      }
    }
    .cards-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      .card {
        min-height: 225px;
        background-color: rgb(237, 182, 44);
        padding: 20px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // margin-right: 20px;
        margin-bottom: 20px;
        color: #000;
        position: relative;
        .main-text {
          margin-bottom: 20px;
          word-break: break-all;
        }
        .date {
          font-style: 14px;
          font-weight: bold;
        }
        button {
          position: absolute;
          top: 2px;
          right: 8px;
          background-color: transparent;
          font-size: 20px;
          cursor: pointer;
          color: #adabab;
          border: none;
          font-weight: bold;
        }
      }
    }
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    // background-color: rgba(0, 0, 0, 0.77);
    backdrop-filter: blur(10px);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    .modal {
      width: 60%;
      background-color: white;
      border-radius: 10px;
      padding: 30px;
      display: flex;
      flex-direction: column;
      position: relative;
      input {
        padding: 16px;
        font-size: 20px;
      }
      button {
        padding: 10px 20px;
        font-size: 20px;
        width: 100%;
        background-color: darkorange;
        border: none;
        color: white;
        cursor: pointer;
        margin-top: 16px;
      }
      .close {
        position: absolute;
        top: 0;
        right: 4px;
        padding: 4px;
        width: auto;
        background-color: transparent;
        color: #000;
        margin-top: 0;
        font-size: 28px;
        font-weight: bold;
      }
    }
  }
}
</style>
