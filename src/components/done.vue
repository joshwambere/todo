<template>
    <div class="" :class="{'isComplete':todo.completed}">
        <div class="done " >
            <p>
           <input type="checkbox" v-on:change="selectedTodo">
          {{todo.title}}
          <button @click="$emit('del-todo',todo.id)" class="del">x</button>
          </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'done',
     props: ["todo"],
    methods:{
        selectedTodo(){
            this.todo.completed=!this.todo.completed;
        }
    }
}
</script>


<style  scoped>
    .done{
       
        margin-top:3%;

    }
    .isComplete{
        text-decoration:line-through;
        color:red;
    }
    .isComplete{
        text-decoration:line-through;
        color:red;
    }

    .complete{
        background:#f4f4f4;
    }
    .done p{
        border-top: 1px solid #fff;
        border-bottom: 1px solid #f4f4f4;
        padding: 10px;
        margin: 0;
        padding-bottom: 15px;

    }
    .del{
        background-color: orangered;
        border-radius: 50%;
        margin-left: auto;
        text-align: center;
        color: #fff;
        border:none;
        float:right;
        width: 20px;
        height: 20px;
    }
</style>