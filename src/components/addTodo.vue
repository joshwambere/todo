<template>
    <div class="Form cont" >
        <form  @submit.prevent="addTodos" >
            <input name="addTodo" v-model="addTodo" placeholder="Add todo" class="form-control" type="text" id="">
            <input class="button" type="submit" value="submit">
        </form>
    </div>
</template>

<script>
export default {
    name:'AddTodo',
    data(){
        return{
            addTodo:''
        }
    },
    methods:{
        addTodos(){
            
            const newTodo = {

                title:this.addTodo,
                completed:false
            }
            this.$emit('addtodo', newTodo);
            
            this.addTodo='';
        }
    }
}
</script>
<style  scoped>
    form{
        display: flex;
        margin-bottom: 10px!important;
    }
    .button{
        background-color: #42b983;
        color: #fff;
        text-align: center;
        border: 1px solid #f7f7f7;
        border-radius: 6px;
        outline: none;
        
    }
    .button:hover{
        cursor: pointer;
    }
    .form-control{
        width: 99%;
        border-radius: 7px;
        border: 2px solid #f7f7f7;
        margin-right: 10px!important;
        padding: 8px!important;
    }
    .cont{
        padding-left: 2%!important;
        padding-right:2%!important;
        margin-top:2%!important;
    }
</style>