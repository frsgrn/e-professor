<template>
  <component :is="renderedMd"></component>
</template>

<script>
export default {
  props: {
    markdown: String
  },
  computed: {
    renderedMd: function() {
      let rawTemplate = "<div />";
      if (this.markdown) {
        this.$md.renderer.rules.list_item_open = function() {
          return "<b-form-checkbox>";
        };
        this.$md.renderer.rules.list_item_close = function() {
          return "</b-form-checkbox>";
        };
        rawTemplate = this.$md.render(this.markdown);
        console.log("md -> html", rawTemplate);
      }

      return {
        name: "SurveyMarkdown",
        template: "<div>" + rawTemplate + "</div>"
      };
    }
  }
};
</script>
