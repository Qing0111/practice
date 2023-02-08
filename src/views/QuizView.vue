<script setup>
import QuestionHeader from "../components/QuestionHeader.vue";
import QuestionCard from "../components/QuestionCard.vue";
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import quizzes from "../data/data.json";

const route = useRoute();

const quizId = parseInt(route.params.id);

const quiz = quizzes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);

const questionStatus = computed(
  () => `${currentQuestionIndex.value}/${quiz.questions.length}`
);
const barPercentage = computed(
  () => `${(currentQuestionIndex.value / quiz.questions.length) * 100}%`
);

const onOptionSelect = (isCorrect) => {
  if (isCorrect) {
    numberOfCorrectAnswers.value++;
  }
  currentQuestionIndex.value++;
};
</script>

<template>
  <main>
    <QuestionHeader
      :questionStatue="questionStatus"
      :barPercentage="barPercentage"
    ></QuestionHeader>
    <QuestionCard
      :question="quiz.questions[currentQuestionIndex]"
      :currentQuestionIndex="currentQuestionIndex"
      :questionsLength="quiz.questions.length"
      @selectOption="onOptionSelect"
      :numberOfCorrectAnswers="numberOfCorrectAnswers"
    ></QuestionCard>
  </main>
</template>

<style scoped lang="scss">
main {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
