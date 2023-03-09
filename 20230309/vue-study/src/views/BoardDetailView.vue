<template>
  <div>
    <h1>detail</h1>
    <div>여기는 {{ id }} 의 디테일 페이지 입니다</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
    };
  },
  created() {
    //라우터는 프로그램
    this.id = this.$route.params.id;
  },
};
</script>

<style>
</style>