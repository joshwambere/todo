<template>
  <div id="app" class="container">
    <addTodo @addtodo="addTodos" />
    <div class="loader">
      <pulse-loader v-show="hide==true" :loading="loading" :color="color" :size="size"></pulse-loader>
    </div>
    
    <todos @del-todo="deleteTodo" v-bind:todos="todos" v-bind:title="title"/>
  </div>
</template>

<script>

import  addTodo from '../components/addTodo.vue'
import  todos from '../components/todo.vue'

import PulseLoader from 'vue-spinner/src/PulseLoader'
import  axios from 'axios'



export default {
  name: 'Home',
  components: {
    addTodo,
    todos,
 PulseLoader
  },
  data(){
    return {
      size:'13px',
      loading:false,
      todos:[]
    }
  },
  methods:{
    deleteTodo(id){
      this.loading = true
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(this.todos=this.todos.filter(todo => todo.id!==id))
        .catch(err=>console.log(err))
        .finally(() => (this.loading = false))

    },
    
    addTodos(data){
      this.loading = true
      axios.post('https://jsonplaceholder.typicode.com/todos',{
        title:data.title,
        completed:data.completed
      })
      
        .then(res =>this.todos =[...this.todos, res.data])
        .catch(err => console.log(err))
        .finally(() => (this.loading = false))
        
    }
  },

    created(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.todos=res.data)
      .catch(err => console.log(err));
    }
}
</script>
h2 

<style>
#app {
  padding:0;
  margin:0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

}
.container{
  padding-right: 16%!important;
  padding-left: 16%!important;
  
}
.loader{
  min-height:25px;
}
</style>
