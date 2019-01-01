<template>
   
   <div>
       <textarea  @input="onInputChange"  cols="50" class="textarea is-primary " placeholder="#Write markdown here...." ></textarea>
    </div>

</template>

<script>

export default {
    name: 'EditorPane',
   
    methods: {
      onInputChange (e) {                   
          this.$store.dispatch('markdown/updateNote',e.target.value);
      }

    }


}
</script>

<style>

.textarea{
  height: 80vh;
  border-radius: 10px;


}

</style>