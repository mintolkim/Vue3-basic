<template>
    <div class="container">
        <h1>To-Do List</h1>
        <form @submit.prevent="onSubmit">
            <div  class="d-flex">
                <div class="flex-grow-1 mr-2">
                    <input class="form-control" type="text" v-model="todo"
                           placeholder="Type new to-do">
                </div>
                <div>
                    <button class="btn btn-primary" type="submit">Add</button>
                </div>
            </div>
            <div v-show="hasError" style="color: red">
                This field cannot be empty
            </div>
        </form>
        <div v-show="!todos.length">
            추가된 todo가 없습니다
        </div>
        <div class="card mt-2" v-for="(item, index) in todos" :key="item.id">
            <div class="card-body p-2 d-flex aling-items-center">
                <div class="form-check flex-grow-1">
                    <input class="form-check-input" type="checkbox" v-model="item.completed">
                    <label class="form-check-label"
                    :class="{ todo: item.completed }"
                    >
                        {{ item.subject }}
                    </label>
                </div>
                <div>
                    <button class="btn btn-danger btn-sm" @click="deleteTodo(index)">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const todo = ref('');
        const hasError = ref(false);
        const todos = ref([]);
        const todoStyle = {
            textDecoration: 'line-through',
            color: 'gray'
        };

        const type = ref('text');
        const nameClass = ref('name');
        /*const type = ref('checkbox');
        const greeting = (name) => {
            return name + 'hi';
        }

        const greet = greeting(name);
        */

        const updateName = () => {
            //type.value = 'text';
            //name.value = '준톨'; // 일반 변수 사용시 값은 바뀌나 template 에선 바뀌지 않음
            //alert("안뇽");
            console.log(name.value);
        }

        const onSubmit = () => {
            //name.value = e.target.value;
            //e.preventDefault();
            if(todo.value === ''){
                hasError.value = true;
            } else{
                todos.value.push({
                    id: Date.now(),
                    subject: todo.value,
                    completed: false
                });
                hasError.value = false;
                todo.value = '';
            }
        }

        const deleteTodo = (index) => {
            todos.value.splice(index, 1);
            console.log('delete todo')
        }

        return {
            todo,
            todos,
            updateName,
            onSubmit,
            nameClass,
            type,
            hasError,
            todoStyle,
            deleteTodo
        };
    }
}
</script>

<style>
 .name{
     color: blue;
 }
 .todo {
     color: gray;
     text-decoration: line-through;
 }
</style>