<template>
  <div>
    <h1>boardList</h1>
    <div>
      <router-link to="/board/1">1번으로가자</router-link>
    </div>
    <div>
      <router-link to="/board/2">2번으로가자</router-link>
    </div>
    <div>
      <router-link to="/board/3">3번으로가자</router-link>
    </div>
    <button @click="go789">go 789</button>
  </div>
</template>

<script>
export default {
  methods: {
    go789() {
      this.$router.push("/board/789");
    },
  },
  // created() {
  //   //라우터는 프로그램
  //   console.log(this.$router);
  //   //route는 각각의 페이지(경로)
  //   console.log(this.$route);
  // },
};
</script>

<style>
</style>