<script setup>
import Card from "../components/QuizCard.vue";
import q from "../data/data.json";
import { ref, watch } from "vue";

const quizzes = ref(q);
const search = ref("");

watch(search, () => {
  quizzes.value = q.filter((quiz) =>
    quiz.name.toLowerCase().includes(search.value.toLowerCase())
  );
});
</script>

<template>
  <main>
    <section class="container">
      <header>
        <h1>Quizzes</h1>
        <input type="text" placeholder="Search..." v-model.trim="search" />
      </header>
    </section>
    <section class="options-container">
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"></Card>
      <!-- <figure class="card" v-for="quiz in quizzes" :key="quiz.id">
        <img :src="quiz.img" alt="圖片" />
        <article class="card-text">
          <h2>{{ quiz.name }}</h2>
          <p>{{ quiz.questions.length }} questions</p>
        </article>
      </figure> -->
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  .container {
    max-width: 1000px;
    margin: 0 auto 40px;
    header {
      margin: 12px 0 28px;
      display: flex;
      align-items: center;
      h1 {
        font-weight: bold;
        margin-right: 32px;
      }
      input {
        border: none;
        background-color: rgba(128, 128, 128, 0.1);
        border-radius: 5px;
        padding: 8px;
        color: #fff;
      }
    }
  }
  .options-container {
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}
</style>
