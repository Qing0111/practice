<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { quiz } = defineProps(["quiz"]);
// console.log(quiz);

const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`);
};
</script>

<template>
  <figure class="card" @click="navigateToQuiz">
    <img :src="quiz.img" alt="圖片" />
    <article class="card-text">
      <h2>{{ quiz.name }}</h2>
      <p>{{ quiz.questions.length }} questions</p>
    </article>
  </figure>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 8px;
  box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.1);
  cursor: pointer;
  img {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
  .card-text {
    padding: 8px 12px;
    h2 {
      font-weight: bold;
    }
  }
}
</style>
