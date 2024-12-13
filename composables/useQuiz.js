export default function (quiz) {
  const currentQuestionIndex = ref(0);
  const selectedAnswers = ref([]);
  const score = ref(0);
  const isLoading = ref(true);
  const isQuizCompleted = ref(false);

  const selectAnswer = (answer) => {
    selectedAnswers.value.push(answer);
    if (answer === quiz.content[currentQuestionIndex.value].reponse) {
      score.value++;
    }
    if (currentQuestionIndex.value < quiz.content.length - 1) {
      currentQuestionIndex.value++;
    } else {
      isQuizCompleted.value = true;
    }
  };

  const reset = () => {
    currentQuestionIndex.value = 0;
    selectedAnswers.value = [];
    score.value = 0;
    isQuizCompleted.value = false;
  };

  return {
    quiz,
    currentQuestionIndex,
    selectedAnswers,
    score,
    isLoading,
    isQuizCompleted,
    selectAnswer,
    reset
  };
}
