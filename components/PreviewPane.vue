<template>
     
    <div>

      {{convertToHTML()}}

      <div class="preview has-background-white-ter" v-html="rawHTML">
      </div>

    </div>


</template>

<script>


export default {
  name: 'PreviewPane',
  
  data() {
    return {
      rawHTML: ''
    }
  },
  
  computed: {
    markdown() {

      return this.$store.getters['markdown/getNoteInMarkdown'];

    }
  },

  methods: {

    convertToHTML(){
     var showdown  = require('showdown'),
     converter = new showdown.Converter(),
     text      = this.markdown,
     html      = converter.makeHtml(text);
     console.log(html);
     this.rawHTML= html;
   }

 }

}

</script>

<style scoped>

.preview{
  overflow: auto;
  height: 80vh;
  padding-left: 10px;
  border-radius: 10px;
}


</style>