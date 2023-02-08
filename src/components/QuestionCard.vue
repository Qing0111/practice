<script setup>
import { defineProps, defineEmits } from "vue";
import { RouterLink } from "vue-router";

const emit = defineEmits(["selectOption"]);
const props = defineProps([
  "question",
  "currentQuestionIndex",
  "questionsLength",
  "numberOfCorrectAnswers",
]);
// console.log(props.question);
const emitSelectedOption = (isCorrect) => {
  emit("selectOption", isCorrect);
};
</script>

<template>
  <section
    class="result"
    v-if="props.currentQuestionIndex == props.questionsLength"
  >
    <p>Your result...</p>
    <h2>{{ props.numberOfCorrectAnswers }}/{{ props.questionsLength }}</h2>
    <router-link to="/quiz">go back</router-link>
  </section>
  <section v-else>
    <article class="question-container">
      <h2 class="question">{{ props.question.text }}</h2>
    </article>
    <article
      class="answers-container"
      v-for="option in props.question.options"
      :key="option.id"
      @click="emitSelectedOption(option.isCorrect)"
    >
      <article class="option">
        <p class="option-label">{{ option.label }}</p>
        <article class="option-value">
          <p>{{ option.text }}</p>
        </article>
      </article>
    </article>
  </section>
</template>

<style scoped lang="scss">
.result {
  margin-top: 40px;
  text-align: center;
  p {
    font-size: 32px;
    margin-bottom: 12px;
  }
  h2 {
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 12px;
  }
}
.question-container {
  margin-top: 20px;
  .question {
    font-size: 32px;
    margin-bottom: 20px;
  }
}
.answers-container {
  .option {
    display: flex;
    margin-bottom: 20px;
    cursor: pointer;
    .option-label {
      background-color: burlywood;
      width: 50px;
      height: 50px;
      font-size: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .option-value {
      background-color: rgb(244, 239, 239);
      width: 100%;
      font-size: 30px;
      padding: 0 20px;
      color: #000;
    }
  }
}
</style>
