<template>
  <div>
    <h1>HEADER</h1>
    <Search></Search>
  </div>
</template>

<script>
// template->HTML이 들어간다
//한가지로만 감싸야한다
//script ->데이터 설정 ..methods..외부 컴포넌트 가져오기 ..
//style->css 설정
import Search from "./Search.vue";
export default {
  components: {
    //header:header
    Search,
  },
};
</script>

<style>
</style>