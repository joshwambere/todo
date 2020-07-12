<template>
    <div class="cont">
        <div class="uncomplete">
            <h3>Uncompleted</h3>
        </div>
        <div :key="todo.id" v-for="todo in todos">
           <todoItem v-if="!todo.completed" @del-todo="$emit('del-todo',todo.id)" v-bind:todo='todo'/> 
           
           <!--to ask-->    
        </div>
        <div class="Completed">
            <h3>completed</h3>
        </div>
        <div :key="todo.id" v-for="todo in todos">
            <done v-if="todo.completed" :todo='todo' v-on:del-todo="$emit('del-todo',todo.id)"/>
        </div>
       

        
    </div>
    
</template>

<script>
import todoItem from './todoItem.vue'
import done from './done.vue'

export default {
    name:'todos',

    components:{
        todoItem,
        done
    },
    watch:{
   
    },
    props: ["todos","title"],
    data(){
        return{
            isColorChanged:false,
            colorChanged:false,
        }
    },
    methods:{
        changeColor(){
          this.isColorChanged = !this.isColorChanged;
        },
        backColo(){
            if(this.colorChanged){
                this.colorChanged=false;
            }else{
                this.colorChanged=true;
            }
        }

    }
}

</script>

<style  lang="scss" scoped>
    .blue-color{
         color:blue;
    }
    .active{
        color:red !important;
    }

    .cont{
        padding-left: 2%!important;
        padding-right:2%!important;
        border-radius: 6px;
        -webkit-box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .3);
    box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, .3);
    background: white;
        
       
    }
    .uncomplete{
        padding-top:20px;
        text-transform: uppercase;
        padding-bottom: 12px;
    }
    .Completed{
      padding-top:20px;
      text-transform: uppercase;
      padding-bottom: 16px;  
    }


</style>