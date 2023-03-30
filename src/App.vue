<template>
  <div class="name">{{ name }}</div>
  <button class="btn btn-primary" v-on:click="updateName">click</button>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const name = ref('민톨');
        /*
        const greeting = (name) => {
            return name + 'hi';
        }

        const greet = greeting(name);
        */

        const updateName = () => {
            name.value = '준톨'; // 일반 변수 사용시 값은 바뀌나 template 에선 바뀌지 않음
            alert("안뇽");
        }
        return {
            name,
            updateName
        };
    }
}
</script>

<style>
 .name{
     color: blue;
 }
</style>