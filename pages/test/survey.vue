<template lang="html">
  <div>
    <survey-markdown :markdown='markdown1'></survey-markdown>
  </div>
</template>

<script>
import SurveyMarkdown from "@/components/SurveyMarkdown";

export default {
  created() {
    this.markdown1 = "# Test\n* Punktlista";
    console.log("survey.created", this.markdown1);
  },
  components: {
    SurveyMarkdown
  },
  data: function() {
    return {
      markdown1: null
    };
  }
};
</script>

<style>
</style>
