<template>
    <div class="name" :class="nameClass" >{{ name }}</div>
    <input :type="type" v-model="name">
    <button class="btn btn-primary" @click="updateName">click</button>
</template>

<script>
import { ref } from "vue";
export default {
    setup(){
        const name = ref('민톨');
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

        const onSubmit = (e) => {
            name.value = e.target.value;
        }

        return {
            name,
            updateName,
            onSubmit,
            nameClass,
            type
        };
    }
}
</script>

<style>
 .name{
     color: blue;
 }
</style>