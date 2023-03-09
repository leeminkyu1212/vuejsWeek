<template>
  <div>
    <h1>아빠</h1>
    <div>{{ halbaeData }}</div>
    <div>{{ halbaeData2 }}</div>
    <!-- <button @click="changeHalbaeData">부모의데이터바꾸자</button> -->
    <ParentChild
      :halbaeData="halbaeData"
      @changeHalbaeData="changeHalbaeData"
    ></ParentChild>
  </div>
</template>

<script>
import ParentChild from "./ParentChild.vue";

export default {
  components: {
    ParentChild,
  },
  props: ["halbaeData", "halbaeData2"],
  methods: {
    changeHalbaeData(text) {
      this.$emit("changeHalbaeData", text);
    },
  },
};
</script>

<style>
</style>