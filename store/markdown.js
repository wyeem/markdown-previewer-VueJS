
export const state = () => ({

  noteInMarkdown: ''

})


export const mutations = {

  UPDATE_NOTE(state, payload) {
   state.noteInMarkdown = payload;

 }
}


export const actions = {

  updateNote (context, payload) {
    context.commit('UPDATE_NOTE', payload);
  }

  
}



export const getters = {
  getNoteInMarkdown: state => state.noteInMarkdown
  
}