<script setup>
import { defineProps } from "vue";
const { questionStatue, barPercentage } = defineProps([
  "questionStatue",
  "barPercentage",
]);
</script>

<template>
  <header>
    <h4>Question {{ questionStatue }}</h4>
    <div class="bar">
      <div class="completion" :style="`width:${barPercentage}`"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  margin-top: 20px;
  h4 {
    font-size: 28px;
  }
  .bar {
    width: 300px;
    height: 50px;
    border: 3px solid burlywood;
    .completion {
      height: 100%;
      width: 0%;
      background-color: burlywood;
    }
  }
}
</style>
