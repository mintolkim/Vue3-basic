<template>
    부모 컴포넌트로 부터 받은 값<br>
    {{ consoleTest(hobby) }}
    <br>
    <input v-model="testval" style="width: 200px"><button @click="testPush">submit</button>
</template>

<script>
  import {ref} from "vue";
  export default {
      props : {
          hobby : {
              type: Array,
              require: true
          }
      },

      setup(props ,{ emit }){
          const testval = ref('');
          const num = ref(1);

          const testPush = () => {
              emit('test_Hobby', {
                  hobby : testval.value,
                  id : num.value += 1
              });
          }

          const consoleTest = (hobby) => {
              console.log("부모가 넘겨준 값 :"+ JSON.stringify(hobby));
          }

          return {
              testval,
              testPush,
              consoleTest
          }
      }
  }

</script>

<style>

</style>