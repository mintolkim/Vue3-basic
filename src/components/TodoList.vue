<template>
    <div class="card mt-2" v-for="(item, index) in todos" :key="item.id">
        <div class="card-body p-2 d-flex aling-items-center"
             @click="moveToPage(item.id)"
        >
            <div class="form-check flex-grow-1" style="cursor: pointer">
                <input class="form-check-input" type="checkbox" :checked="item.completed" @change="toggleTodo(index, $event)"
                @click.stop>
                <label class="form-check-label"
                       :class="{ todo: item.completed }"
                >
                    {{ item.subject }}
                </label>
            </div>
            <div>
                <button class="btn btn-danger btn-sm" @click.stop="deleteTodo(index)">
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import {useRouter} from "vue-router";

export default {
    props: {
        todos : {
            type: Array,
            require: true
        }
    },
    emits : ['toggle-todo', 'delete-todo'],
    setup(props, { emit }){
        const router = useRouter();
        const moveToPage = (todoId) =>{
            console.log(todoId);
            router.push({name: 'Todo', params: {id: todoId}});
        }
        const toggleTodo = (index, event) => {
            emit('toggle-todo', index, event.target.checked);
        }
        const deleteTodo = (index) => {
            emit('delete-todo', index);
        }
        return{
            toggleTodo,
            deleteTodo,
            moveToPage
        }
    }
}
</script>
<style></style>