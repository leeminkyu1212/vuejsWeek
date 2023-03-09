<template>
  <div>
    <h1>나</h1>
    <div>{{halbaeData}}</div>
    <button @click="changeHalbaeDataFromGrandchild">할아버지데이터를손자가바꾸기</button>

  </div>
</template>

<script>
export default {
  props:["halbaeData"],
  methods:{
    changeHalbaeDataFromGrandchild(){
      this.$emit("changeHalbaeData", "손자에서바꿨다~");

    }
  }
};
</script>

<style>
</style>