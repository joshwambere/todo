
<template>
  <div class="complete" :class="{'isComplete':todo.completed}">
      <p >
           <input class="check" type="checkbox" v-on:change="selectedTodo">
          {{todo.title}}
          <button @click="$emit('del-todo',todo.id)" class="del">x</button>
      </p>
  </div>
</template>

<script>
export default {
    name:'todoItem',
    props: ["todo"],
    methods:{
        selectedTodo(){
            this.todo.completed=!this.todo.completed;
        }

    }
}
</script>

<style scoped>
    .isComplete{
        text-decoration:line-through;
        color:red;
    }
    .isComplete p{
        
        padding: 10px;      
    }

    .complete{
        background:#f7f7f7;
        border-radius: 6px;
        margin-bottom: 24px;
    }
    .complete p{
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
        padding: 10px !important;
        margin: 0 !important;
    }
   
    .del{
        background-color: orangered;
        border-radius: 50%;
        margin-left: auto!important;
        text-align: center;
        color: #fff;
        border:none;
        float:right;
        width: 20px;
        height: 20px;
    }
    input[type="checkbox"]  {
        background: #42b983;
    }
    

</style>