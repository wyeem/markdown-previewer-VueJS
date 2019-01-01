<template>
  
  <section class="section has-background-grey-dark">
    

      <div class="columns is-mobile">
        
          <div class="column is-half">
              <EditorPane />
          </div>
        
          <div class="column">
              <PreviewPane />
          </div>
      
      </div>
  
  </section>

</template>

<script>

import EditorPane from '@/components/EditorPane'
import PreviewPane from '@/components/PreviewPane'

  export default {
    name: 'MarkdownEditor',
    
    components: {
      EditorPane,
      PreviewPane
     }
  }
</script>

<style scoped>

</style>
