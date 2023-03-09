<template>
  <div>
    <h1>할배</h1>
    <div>{{ halbaeData }}</div>
    <!-- <div>{{ halbaeData2 }}</div> -->
    <HomeParent
      :halbaeData="halbaeData"
      :halbaeData2="halbaeData2"
      @changeHalbaeData="changeHalbaeData"
    ></HomeParent>
  </div>
</template>

<script>
import HomeParent from "../components/HomeParent.vue";
export default {
  components: {
    HomeParent,
  },
  methods: {
    changeHalbaeData(text) {
      this.halbaeData = text;
    },
  },
  data() {
    return {
      halbaeData: "나는 할배테이터!",
      halbaeData2: "나는두번째할배!",
    };
  },
};
</script>

<style>
</style>